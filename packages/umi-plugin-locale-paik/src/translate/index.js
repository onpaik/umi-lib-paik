import '@babel/polyfill';
import { join, extname,dirname,basename } from 'path';
import { transformFileSync } from '@babel/core';
import { writeFileSync,existsSync } from 'fs';
import  mkdirp from 'mkdirp';
import globby from 'globby';
import rimraf from 'rimraf';
import { winPath } from 'umi-utils';
import ora from 'ora';
import {
  simplifiedToTaiwanWithPhrases,
  simplifiedToHongKong,
} from 'node-opencc';
import chalk from 'chalk';

const deepmerge = require('deepmerge');
const log = console.log;
const dynamicReg = /^(d|D)-\S+/g;

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
  return 'messages';
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
function getExt(path){
  return extname(path).replace('.',''); 
}
function getFileName(path){
  return basename(path,extname(path));
}
function getDynamicName(path){
  return getFileName(path).replace(/^(d|D)-/,'');
}
function logInfo(type,text){
  const date = new Date().toLocaleString();
  log(chalk[type](`${text}[${chalk.yellow(date)}]\n`));
}
async function writeFile( destPath, code) {
  const dir = dirname(destPath);
  await mkdirp.sync(dir);
  await writeFileSync(destPath,code);
}
function useTranslate(lang,data){
  const { defaultMessage } = data;
  if(lang.match(/tw/gi)) return data[lang] || simplifiedToTaiwanWithPhrases(defaultMessage);
  if(lang.match(/hk/gi)) return data[lang] || simplifiedToHongKong(defaultMessage);
  return data[lang] || defaultMessage;
}
function transLate(...arg){
  const [ content,support,_data,path, spinner ] = arg;
  if(!content){
    const info = `${chalk.blue(path)}`;
    spinner.fail(`${chalk.red(`国际化内容为空，数据提取失败 (${info}) \n`)}`);
    process.exit(1);
  }
  const _key = Object.keys(content);
  const _localeKey = Object.keys(support);
  let data = {};
  Object.values(support).map(value =>{
    data[value] ={};
    return value;
  });
  _key.map(temp=>{
    const { id } =  content[temp];
    _localeKey.map( l=>{
      const lang = support[l];
      data = {
        ...data,
        ..._data,
        [lang]: {
          ...data[lang],
          [id]: useTranslate(l,content[temp]),
        }
      }
      return l;
    })
    return temp;
  })
  return data;
}
async function addIntl(...arg){
  const [ file,singular,absSrcPath,support,spinner ] = arg;
  const { path } = file;
  const ext = getExt(path); 
  const floder = getLocaleFloder(singular);
  const tfloder = getTempLocale(singular);
  const newPath = winPath(path.replace(/src/,`src\/${floder}/${tfloder}`));
  let data = {};
  if(ext.match(/^(j|t)s$/i)){
    await rimraf.sync(winPath(`${absSrcPath}${floder}/${tfloder}`));
    const { code } = transformFileSync(path, getBabelConfig());
    await writeFile(newPath,code);
    delete require.cache[newPath]
    const content = await require(newPath).default;
    await rimraf.sync(winPath(`${absSrcPath}${floder}/${tfloder}`));
    data = transLate(content,support,data,path);
  }
  if(ext.match(/^json$/i)){
    delete require.cache[path]
    const content = require(path);
    data = transLate(content,support,data,path);
  }
  return data;
}
async function transLatePublic(...arg){
  const [ content, support, path, spinner ] = arg;
  if(!content){
    const info = `${chalk.blue(path)}`;
    spinner.color = 'red';
    spinner.fail(`${chalk.red(`国际化内容为空，数据提取失败 (${info}) \n`)}`);
    process.exit(1);
  }
  const locales = Object.values(support);
  const localeKey =  Object.keys(support);
  const data = {};
  locales.map(lang => {
    data[lang] = {};
    return lang;
  })
  const temp = await Object.values(content).mapSync(async obj => {
    const { id } = obj;
    const stemp = await localeKey.mapSync(async k => {
      data[support[k]] = {
        ...data[support[k]],
        [id]: useTranslate(k, obj)
      };
      return k;
    })
    return obj;
  })
  return data;
}
async function generatePublicFile(...arg){
  const [ file, absSrcPath, support, collectData,spinner  ] = arg;
  let _tempData = collectData;
  const { name, path } = file;
  const dynamicName = getDynamicName(name);
  const tempPublicPath = winPath(`${absSrcPath.replace(/src\//,'public/.lang')}`);
  const tempFilePath = winPath(`${tempPublicPath}/${name}`);
  const ext = getExt(path); 
  _tempData= {
    [dynamicName]:{
      ...(collectData[dynamicName] || {}),
    }
  }
  if(ext.match(/^(j|t)s$/i)){
    await rimraf.sync(tempPublicPath);
    const { code } = transformFileSync(path, getBabelConfig());
    await writeFile(tempFilePath,code);
    delete require.cache[tempFilePath]
    const content = await require(tempFilePath).default;
    await rimraf.sync(tempPublicPath);
    const data = await transLatePublic(content,support,path,spinner);
    _tempData[dynamicName] = deepmerge(data,_tempData[dynamicName])
  }
  if(ext.match(/^json$/i)){
    delete require.cache[tempFilePath]
    const content = require(tempFilePath);
    const data = await transLatePublic(content,support,path,spinner);
    _tempData[dynamicName] = deepmerge(data,_tempData[dynamicName])
  }
  return _tempData;
}
async function writePublic(data,absSrcPath){
  await Object.keys(data).mapSync(async name => {
    const distFloder = `${absSrcPath.replace(/src\//,'public/lang')}`;
    await Object.keys(data[name]).mapSync(async lang => {
      const filePath = winPath(`${distFloder}/${lang}/${name}.json`);
      if(existsSync(filePath)){
        const orignData = require(filePath);
        await writeFileSync(filePath,JSON.stringify({
          ...orignData,
          ...data[name][lang],
        }, null, '\t'))
      }else{
        await writeFile(filePath,JSON.stringify(data[name][lang], null, '\t'))
      }
      return lang;
    })
    return name;
  })
}
async function generateFile(...arg){
  const [ data, support,absSrcPath,singular ] = arg;
  const langs = Object.values(support);
  langs.mapSync(async lang =>{
    const langPath = winPath(`${absSrcPath}/${getLocaleFloder(singular)}/${lang}.json`);
    if(existsSync(langPath)){
      const orignData = require(langPath);
      await writeFileSync(langPath,JSON.stringify({
        ...orignData,
        ...data[lang],
      }, null, '\t'))
    }else{
      await writeFileSync(langPath,JSON.stringify(data[lang], null, '\t'))
    }
  })
}
async function handlenormal(localeFiles,singular,absSrcPath,support){
  const spinner = ora();
  spinner.start(`收集${chalk.blue('非动态')}国际化信息开始`);
  let localeData = {};
  // 收集国际化数据到非动态目录
  await localeFiles.mapSync(async file => {
    const singal = await addIntl(file,singular,absSrcPath,support,spinner);
    if(!singal){
      return null;
    }else{
      localeData = deepmerge(singal,localeData);
    }
    return file;
  });
  spinner.color = 'green';
  spinner.succeed(`收集${chalk.blue('非动态')}国际化信息成功`);
  spinner.color = 'cyan';
  spinner.start(`开始写入${chalk.blue('非动态')}国际化信息`);
  await generateFile(localeData,support,absSrcPath,singular);
  spinner.color = 'green';
  spinner.succeed(`写入${chalk.blue('非动态')}国际化信息成功`);
}
async function genDynamic(...arg){
  const [ dynamicIntl,dynamicLocale,absSrcPath,support ] = arg;
  let collectData = {};
  if(dynamicIntl && dynamicLocale.length){
    const spinner = ora();
    spinner.start(`收集${chalk.yellow('动态')}国际化信息开始`);
    await dynamicLocale.mapSync(async file =>{
      const data = await generatePublicFile(file,absSrcPath,support,collectData,spinner);
      collectData = deepmerge(data,collectData);
      return file;
    })
    spinner.succeed(`收集${chalk.yellow('动态')}国际化信息成功`);
    spinner.start(`开始写入${chalk.yellow('动态')}国际化信息`);
    writePublic(collectData, absSrcPath);
    spinner.succeed(`写入${chalk.yellow('动态')}国际化信息成功`);
  }
  return true;
}
async function getTransLataData(...arg){
  const [ singular, absSrcPath,support,dynamicIntl] = arg;
  const msgFloder = getmessageFloder(singular);
  const files = await globby
  .sync(`**/${msgFloder}/**/**.{ts,js,json}`, {
    cwd: absSrcPath,
  }).map(name => ({
    name,
    path: join(absSrcPath, name)
  }));
  let localeFiles = [];
  let dynamicLocale = [];
  if(dynamicIntl){
    dynamicLocale = files.filter(file => {
      const { name } = file;
      const filename = getFileName(name);
      if(filename.match(dynamicReg) && getDynamicName(name)) return true;
      localeFiles.push(file);
      return false;
    });
  }else{
    localeFiles = files;
  }
  await handlenormal(localeFiles,singular,absSrcPath,support);
  await genDynamic(dynamicIntl,dynamicLocale,absSrcPath,support);
}
export default function (api, opt={}) {
  const defaultSupport = {
    enUS:'en-US',
    zhCN:'zh-CN',
  };
  const { support, dynamicIntl } = opt;
  const { config, paths } = api;
  const { singular } = config;
  const { absSrcPath } = paths;
  const newSupport = {
    ...defaultSupport,
    ...support,
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
      newSupport,
      dynamicIntl,
    )
  });
}