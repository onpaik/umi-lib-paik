#!/usr/bin/env node

const { readdirSync, statSync, writeFileSync } = require('fs');
const { join } = require('path');

const cwd = process.cwd();
const ignore = name => /dist|src|es|lib/gi.test(name);
const target = `${cwd}/packages/paik-utils`;
const packageJsonPath = `${target}/package.json`;
const packageJson = require('../packages/paik-utils/package.json');

const dirs = readdirSync(target);
const _dirs = [];
dirs.map(name => {
  const pathName = join(target, name);
  const stats = statSync(pathName);
  const isDir = stats.isDirectory();
  if (isDir && !ignore(name)) {
    _dirs.push(name);
  }
  return name;
});

packageJson.files.length = 0;
packageJson.files.push(...['lib', 'es', 'dist', ..._dirs]);
writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, '\t'));
