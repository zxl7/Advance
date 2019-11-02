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