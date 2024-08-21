const shell = require('shelljs');
const util = require('./util.js');

// 删除lib文件
util.deleteCatalog('./lib');
// 复制src到lib文件
shell.exec('tsc')