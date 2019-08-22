// 1. 解析模板生成reder函数
// 2. 响应式开始监听
// 3. 首次渲染，显示页面，且绑定依赖
// 4. data属性变化，触发rerender

// 一、
// 模板中的所有信息都被render包含
// 模板中用到的data中的属性，都变成了JS变量
// 模板中用到的v-model v-for v-on都变成了js逻辑
// reder函数返回vnode 

// 二、响应时间听
// Object.defineProperty
// data的属性代理到vm上


// 首次渲染、显示页面、且绑定依赖
