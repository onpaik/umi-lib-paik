#!/usr/bin/env node

const extendArray = () => {
  Object.assign(Array.prototype, {
    async mapSync(cb) {
      await Promise.all(
        this.map(async (obj, index) => {
          await cb(obj, index, this);
        }),
      );
    },
  });
};
extendArray();

const { readdirSync, statSync, readFileSync, writeFileSync } = require('fs');
const { join } = require('path');

const cwd = process.cwd();
const target = `${cwd}/packages/paik-utils/`;

const dirs = readdirSync(target);
const _dir = [];
const ignoreName = name => /src|lib|es|dist/gi.test(name);
dirs.mapSync(async name => {
  const pathName = join(target, name);
  const stats = statSync(pathName);
  const isDir = stats.isDirectory();
  if (isDir && !ignoreName(name)) {
    _dir.push(name);
  }
  return '';
});

const addDisableEslintText = fileName => {
  const data = readFileSync(fileName, 'utf8');
  let content = data;
  if (!data.startsWith('/* eslint-disable */'))
    content = `/* eslint-disable */ \n ${data}`;
  writeFileSync(fileName, content);
};
const fileDisplay = filePath => {
  const files = readdirSync(filePath);
  files.forEach(fileName => {
    const filedir = join(filePath, fileName);
    const stats = statSync(filedir);
    const isFile = stats.isFile(filedir);
    const isDir = stats.isDirectory();
    if (isDir) fileDisplay(filedir);
    if (isFile) {
      addDisableEslintText(join(filedir));
    }
  });
};

_dir.map(d => {
  fileDisplay(`${target}${d}`);
  return d;
});
