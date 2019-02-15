#!/usr/bin/env node
const shell = require('shelljs');
const rimraf = require('rimraf');

const cwd = process.cwd();
const from = `${cwd}/packages/paik-utils/lib`;
const to = `${cwd}/packages/paik-utils/`;

shell.exec(`cp -rf ${from}/* ${to}`);
rimraf.sync(`${to}index.js`);
shell.exec(`npm run upj`);
shell.exec(`npm run disableLint`);
