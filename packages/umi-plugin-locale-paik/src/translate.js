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
import chalk from 'chalk';

const log = console.log;
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
    const content = await require(newPath).default;
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
function logInfo(type,text){
  const date = new Date().toLocaleString();
  log(chalk.green(`${text}[${chalk.yellow(date)}]`));
}
async function getTransLataData(...arg){
  const [ singular, absSrcPath,support] = arg;
  const msgFloder = getmessageFloder(singular);
  let data = {};
  logInfo('red','文件转换开始')
  await globby
    .sync(`**/${msgFloder}/*.{ts,js,json}`, {
      cwd: absSrcPath,
    }).map(name => ({
      name,
      path: join(absSrcPath, name)
    }))
    .mapSync(async file => {
      const singal = await addIntl(file,singular,absSrcPath,support);
      data = merge(singal,data);
      return file;
    })
  logInfo('green','收集国际化信息结束')
  generateFile(data,support,absSrcPath,singular);
  logInfo('green','恭喜你，文件写入成功')
  return data;
}
function generateFile(...arg){
  const [ data, support,absSrcPath,singular ] = arg;
  const langs = Object.values(support);
  langs.map(lang =>{
    logInfo('red',`开始写入${chalk.magenta(lang)}文件`)
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
    logInfo('green',`${chalk.magenta(lang)}文件更新结束`)
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
  const { absSrcPath } = paths;
  const support = {
    ...defaultSupport,
    ...opt.support,
  }
  api.addPageWatcher(
    join(absSrcPath, getmessageFloder(singular)),
  );

  api.onOptionChange(newOpts => {
    opt = newOpts;
    api.rebuildTmpFiles();
  });
  api.registerCommand('intl',{
    hide:false,
  },args => {
    getTransLataData(
      singular,
      absSrcPath,
      support,
    )
  });
}