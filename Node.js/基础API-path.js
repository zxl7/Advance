const { normalize } = require('path')
// 标准化路径
console.log(normalize('/usr//local/bin'));
console.log(normalize('/usr//local/../bin'));

const { join } = require('path')
// 路径拼接
console.log(join('/usr', '/local', '/bin'));

const { resolve } = require('path')
// 相对路径转绝对路径

const { basename, dirname, extname } = require('path')
// 文件名
// 所在文件夹
// 扩展名


const { parse, format } = require('path')
const ret = parse(filePath)
// 路径拆分 parse
// 路径合并 format

const { sep, delimiter, win32, posix } = require('path')


// __dirname, __filename 总是返回文件的绝对路径
// process.cwd() 总是返回执行node命令所在的文件夹

// require方法中总是相对于当前文件所在的文件夹
// 在其他地方和process.cwd()一样，相对node启动文件夹