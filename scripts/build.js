#!/usr/bin/env node

const { transformFileSync } = require('@babel/core');
const {
  readdirSync,
  statSync,
  writeFileSync,
  readFileSync,
  existsSync,
} = require('fs');
const mkdirp = require('mkdirp');
const { join, dirname, extname } = require('path');
const rimraf = require('rimraf');
const { argv } = require('yargs');

const { src } = argv;

const cwd = process.cwd();
const packagesFloder = `${cwd}/packages`;

const packages = readdirSync(packagesFloder);

const amdDir = 'es';
const cmdDir = 'lib';
const umdDir = 'dist';

const modMap = [amdDir, cmdDir, umdDir];
const cleanDir = mod =>
  modMap.map(dest => rimraf.sync(`./packages/${mod}/${dest}`));

const getBabelConfig = modType => ({
  presets: [
    [require.resolve('@babel/preset-env')],
    require.resolve('@babel/preset-react'),
  ],
  plugins: [
    require.resolve('@babel/plugin-proposal-export-default-from'),
    require.resolve('@babel/plugin-proposal-do-expressions'),
    require.resolve('@babel/plugin-proposal-class-properties'),
    require.resolve('@babel/plugin-syntax-dynamic-import'),
    require.resolve('@babel/plugin-proposal-optional-chaining'),
    require.resolve('@babel/plugin-transform-runtime'),
    ...(modType === 'es'
      ? [require.resolve('@babel/plugin-transform-modules-amd')]
      : []),
    ...(modType === 'lib'
      ? [require.resolve('@babel/plugin-transform-modules-commonjs')]
      : []),
    ...(modType === 'dist'
      ? [require.resolve('@babel/plugin-transform-modules-umd')]
      : []),
  ],
});

const writeFile = async (destPath, code) => {
  const dir = dirname(destPath);
  await mkdirp(dir);
  await writeFileSync(destPath, code);
};
const build = file => {
  modMap.map(mod => {
    const ext = extname(file);
    const destPath = file.replace(/src/, mod);
    if (ext.match(/js/gi)) {
      const { code } = transformFileSync(file, getBabelConfig(mod));
      writeFile(destPath, code);
    } else {
      writeFile(destPath, readFileSync(file));
    }
    return mod;
  });
};

const fileDisplay = filePath => {
  // 根据文件路径读取文件，返回文件列表
  const files = readdirSync(filePath);
  files.forEach(fileName => {
    const filedir = join(filePath, fileName);
    const stats = statSync(filedir);
    const isFile = stats.isFile(filedir);
    const isDir = stats.isDirectory();
    if (isDir) fileDisplay(filedir);
    if (isFile) {
      build(filedir);
    }
  });
};

let dist = packages;
if (src) {
  dist = [
    src
      .replace(/\.\//g, '')
      .replace(/\/?$/g, '')
      .split('/')[1],
  ];
}
dist.map(mod => {
  cleanDir(mod);
  const dir = `${packagesFloder}/${mod}/src`;
  if (existsSync(dir)) {
    fileDisplay(dir);
  }
  return mod;
});
