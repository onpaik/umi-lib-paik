#!/usr/bin/env node

const rimraf = require('rimraf');
const { join } = require('path');
const { readdirSync, statSync } = require('fs');

const target = ['paik-utils'];
const ignoreReg = /src/gi;

const cwd = process.cwd();
const packagesFloder = `${cwd}/packages`;

const ignorePath = name => {
  return ignoreReg.test(name);
};
target.map(pack => {
  const dic = `${packagesFloder}/${pack}`;
  const dirs = readdirSync(dic);
  dirs.map(name => {
    const pathName = join(dic, name);
    const stats = statSync(pathName);
    const isDir = stats.isDirectory();
    if (isDir && !ignorePath(name)) {
      rimraf.sync(pathName);
    }
    return name;
  });
  return pack;
});
