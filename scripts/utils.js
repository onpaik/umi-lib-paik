const { join, basename } = require('path');
const { readdirSync, statSync } = require('fs');

const fileDisplay = (filePath, cb) => {
  // 根据文件路径读取文件，返回文件列表
  const files = readdirSync(filePath);
  files.forEach(fileName => {
    const filedir = join(filePath, fileName);
    const stats = statSync(filedir);
    const isFile = stats.isFile(filedir);
    const isDir = stats.isDirectory();
    if (isDir) fileDisplay(filedir);
    if (isFile) {
      const name = basename(filedir);
      if (!name.match(/.test/)) cb(filedir);
    }
  });
};

exports.fileDisplay = fileDisplay;
