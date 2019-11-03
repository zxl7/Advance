# 计划
1. web server
2. UI test
3. Native code build
4. unit Test
5. headless Crawler

## Require
- module被加载的时候执行，加载后缓存,
- 一旦出现某个模块被循环加载，就只输出已经执行的部分，还未执行的部分不会输出


## exports --> module.exports
1. exports默认的快捷方式，可以添加属性，不能修改指向
2. commenJS 模块对外的输出永远是module.exports

## Global
可以声明全局变量
1. CommonJS
2. Buffer
3. console
4. timer
5. setImmediate(()=>{}) 晚于nextTick() 插入下一个队列第一个

### process 进程
- argv 参数相关，(自定义传输一些命令到脚本)
- nextTick(()=>{}) 早于setImmediate() 插入当前队列最后一个
