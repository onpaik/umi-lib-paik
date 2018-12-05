import '@babel/polyfill';
import { join, extname,dirname } from 'path';
import { transformFileSync } from '@babel/core';
import { writeFileSync,existsSync } from 'fs';
import  mkdirp from 'mkdirp';
import globby from 'globby';
import rimraf from 'rimraf';
import {
  simplifiedToTaiwanWithPhrases,
  simplifiedToHongKong,
} from 'node-opencc';

const merge = require('deepmerge')

Object.assign(Array.prototype, {
  async foreachSync(cb) {
    for (let index = 0; index < this.length; index += 1) {
      await cb(this[index], index, this);
    }
  },
  async mapSync(cb) {
    await Promise.all(this.map(async (obj, index) => {
      await cb(obj, index, this);
    }));
  },
});


function  getBabelConfig(){
  return {
    presets: [
      [
        require.resolve('@babel/preset-env'),
      ],
    ],
  }
}
function getmessageFloder(singular){
  return singular ? 'message' : 'messages';
}
function getLocaleFloder(singular){
  return singular ? 'locale' : 'locales';
}
function getTempLocale(singular) {
  return singular ? '.locale' : '.locales';
}
function noKey(obj){
  return Object.keys(obj).length === 0
}
function isEmpty(obj){
  if(noKey(obj)) return true;
  const key = Object.keys(obj);
  key.map(k=>{
    if(noKey(obj[k])) delete obj[k]
    return k;
  })
  if(noKey(obj)) return true;
  return false;
}
async function writeFile( destPath, code) {
  const dir = dirname(destPath);
  await mkdirp.sync(dir);
  await writeFileSync(destPath,code);
}
function useTranslate(lang,data){
  const { defaultMessage } = data;
  if(lang==='zhTW') return data[lang] || simplifiedToTaiwanWithPhrases(defaultMessage);
  if(lang==='zhHK') return data[lang] || simplifiedToHongKong(defaultMessage);
  return data[lang] || defaultMessage;
}
function transLate(...arg){
  const [ content,support,_data ] = arg;
  
  const _key = Object.keys(content);
  const _localeKey = Object.keys(support);
  let data = {};
  Object.values(support).map(value =>{
    data[value] ={};
    return value;
  });
  _key.map(temp=>{
    const { id } =  content[temp];
    _localeKey.map(l=>{
      const lang = support[l];
      data = {
        ...data,
        ..._data,
        [lang]: {
          ...data[lang],
          [id]:useTranslate(l,content[temp]),
        }
      }
      return l;
    })
    return temp;
  })
  return data;
}
async function addIntl(...arg){
  const [ file,singular,absSrcPath,support ] = arg;
  const { path } = file;
  const ext = extname(path).replace('.',''); 
  const floder = getLocaleFloder(singular);
  const tfloder = getTempLocale(singular);
  const newPath = path.replace(/src/,`src\/${floder}/${tfloder}`);
  let data = {};
  if(ext ==='js' || ext ==='ts'){
    await rimraf.sync(`${absSrcPath}${floder}/${tfloder}`);
    const { code } = transformFileSync(path, getBabelConfig());
    
    await writeFile(newPath,code);
    delete require.cache[newPath]
    const content = require(newPath).default;
    await rimraf.sync(`${absSrcPath}${floder}/${tfloder}`);
    data = transLate(content,support,data);
  }
  if(ext === 'json'){
    delete require.cache[path]
    const content = require(path);
    data = transLate(content,support,data);
  }
  return data;
}
async function getTransLataData(...arg){
  const [ singular, absSrcPath, absPagesPath,support] = arg;
  const msgFloder = getmessageFloder(singular);
  let data = {};
  await globby
    .sync('**/*.{ts,js,json}', {
      cwd: join(absSrcPath, msgFloder),
    }).map(name => ({
      name,
      path: join(absSrcPath, msgFloder, name)
    }))
    .concat(
      globby
    .sync('**/*.{ts,js,json}', {
      cwd: join(absPagesPath, msgFloder),
      }).map(name => ({
        name,
        path: join(absPagesPath, msgFloder, name)
      }))
    ).mapSync(async file => {
      const singal = await addIntl(file,singular,absSrcPath,support);
      data = merge(singal,data);
      // console.log(data);
      return file;
    })
  generateFile(data,support,absSrcPath,singular);
  return data;
}
function generateFile(...arg){
  const [ data, support,absSrcPath,singular ] = arg;
  const langs = Object.values(support);
  langs.map(lang =>{
    const langPath = `${absSrcPath}/${getLocaleFloder(singular)}/${lang}.json`;
    if(existsSync(langPath)){
      const orignData = require(langPath);
      writeFileSync(langPath,JSON.stringify({
        ...orignData,
        ...data[lang],
      }, null, '\t'))
    }else{
      writeFileSync(langPath,JSON.stringify(data[lang], null, '\t'))
    }
  })
}
export default function (api, opt={}) {
  const defaultSupport = {
    enUS:'en-US',
    zhCN:'zh-CN',
    zhTW:'zh-TW',
    zhHK:'zh-HK',
  };
  const { config, paths } = api;
  const { singular } = config;
  const { absSrcPath,absPagesPath } = paths;
  const support = {
    ...opt.support,
    ...defaultSupport,
  }
  api.addPageWatcher(
    join(absSrcPath, getmessageFloder(singular)),
  );

  api.onOptionChange(newOpts => {
    opt = newOpts;
    api.rebuildTmpFiles();
  });
  api.registerCommand('intl',{
    hide:true,
  },args => {
    getTransLataData(
      singular,
      absSrcPath,
      absPagesPath,
      support,
    )
  });
}