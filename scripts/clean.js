#!/usr/bin/env node

const rimraf = require('rimraf');
const { argv } = require('yargs');
const { resolve, join } = require('path');
const { readdirSync, statSync } = require('fs');

const { config } = argv;
const cleanConfig = require(resolve(config));

const { target, ignoreReg } = cleanConfig;
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
