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
const { join, basename, extname, dirname } = require('path');

const cwd = process.cwd();
const target = `${cwd}/packages/paik-utils/`;
const babelConfig = (dir = 'src') =>
  `${cwd}/packages/babel-plugin-import-paik/${dir}/config.js`;

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
const babelHelpMod = {};

const fileDisplay = filePath => {
  const files = readdirSync(filePath);
  files.forEach(fileName => {
    const filedir = join(filePath, fileName);
    const stats = statSync(filedir);
    const isFile = stats.isFile(filedir);
    const isDir = stats.isDirectory();
    if (isDir) fileDisplay(filedir);
    if (isFile) {
      const ext = extname(fileName);
      const name = basename(filedir, ext);
      const dirName = dirname(filedir)
        .split(/paik-utils/)[1]
        .replace(/^\//, '');
      const dir = dirName.split('/');
      if (name.match(/^index$/gi)) {
        if (dir.length !== 1) {
          babelHelpMod[dir[dir.length - 1]] = dir.join('/');
        }
      } else if (dir.length !== 1) {
        babelHelpMod[name] = dir.join('/');
      } else {
        const [_name] = dir;
        babelHelpMod[name] = _name;
      }
      addDisableEslintText(join(filedir));
    }
  });
};

_dir.map(d => {
  fileDisplay(`${target}${d}`);
  return d;
});

const template = (data, type) => `${
  type === 'lib' ? '"use strict";' : '/* eslint-disable */'
}

module.exports = ${JSON.stringify(data, null, '\t')};`;

['lib', 'src'].map(d => {
  writeFileSync(babelConfig(d), template(babelHelpMod, d));
  return d;
});
// writeFileSync(babelConfig('lib'), template(babelHelpMod, 'lib'));
// writeFileSync(babelConfig('src'), template(babelHelpMod));
