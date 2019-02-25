const chokidar = require('chokidar');
const shell = require('shelljs');
const ora = require('ora');
const chalk = require('chalk');

const cwd = process.cwd();

const watcher = chokidar.watch(`src/**/messages/**/**.{ts,js,json}`, {
  ignored: /(^|[\/\\])\../,
  persistent: true,
  cwd
});
let num = 0;
const fileChange = async path => {
    num += 1;
    const spinner = ora();
    spinner.start(`parse intl data start, ${path}`);
    const { code } = await shell.exec(`umi intl --src ${path.replace(/src\//,'')}`);
    if(code ===0) {
      spinner.succeed(`${chalk.green(`parse intl data succeed, ${path}`)}`);
    }
    else spinner.fail(`parse intl data failed, ${path}`);
}

watcher.on('change', fileChange)

const close = () => watcher.close();

process.on('SIGINT', () => {
  close();
});