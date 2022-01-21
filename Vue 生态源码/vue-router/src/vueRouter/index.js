let _Vue = null

export default class VueRouter {
  // 初始化方法包装
  init() {
    this.createRouteMap()
    this.initComponents(_Vue)
    this.initEvent()
  }
  // 静态方法
  static install(Vue) {
    // 1. 判断当前插件是否安装
    if (VueRouter.install.installed) {
      return
    }
    VueRouter.install.installed = true

    // 2. Vue构造函数 记录到全局变量,实例方法中直接使用构造函数
    _Vue = Vue

    // 3. 创建Vue实例时候传入的router对象注入到 Vue实例
    // 混入，插件中给所有的Vue实例混入一个选项，组件也会有
    _Vue.mixin({
      beforeCreate() {
        // 区分选项实例和组件
        if (this.$options.router) {
          // Vue 实例中获取
          _Vue.prototype.$router = this.$options.router
          // 挂载初始化函数
          this.$options.router.init()
        }
      },
    })
  }
  // 初始化属性
  constructor(options) {
    // 记录传入的options
    this.options = options
    // rules 规则键值对
    this.routeMap = {}
    // 响应式对象，observable内部会转响应式对象，渲染函数和计算属性中直接使用
    this.data = _Vue.observable({
      current: '/',
    })
  }

  createRouteMap() {
    // 遍历所有路由规则，把路由规则解析成键值对的形式，存储到 routeMap 中
    this.options.routes.forEach((route) => {
      this.routeMap[route.path] = route.component
      console.log(this.routeMap)
    })
  }
  // 创建router-link
  initComponents(Vue) {
    // 创建组件
    Vue.component('router-link', {
      // 接受参数
      props: {
        to: String,
      },
      // h函数，创建虚拟DOM，h函数来自 Vue
      render(h) {
        return h(
          // 三个参数：创建的元素选择器（标签选择器），属性，
          'a',
          {
            // dom对象属性 + attrs对象
            attrs: {
              href: this.to,
            },
            on: {
              // 注册点击时间
              click: this.clickHandler,
            },
            // 子元素，数组形式
          },
          [this.$slots.default],
        )
      },
      // template: '<a :href="to"><slot></slot></a>',

      methods: {
        clickHandler(e) {
          //  pushState 改变浏览器的地址栏，不发请求，data（将来传给popstate事件对象的一个参数），title，超链接跳转的url地址
          history.pushState({}, '', this.to)
          // 全局挂载的 $router
          // 当前点击完超链接的值
          this.$router.data.current = this.to
          e.preventDefault()
        },
      },
    })

    // 创建 router-view
    const self = this
    Vue.component('router-view', {
      // 创建虚拟DOM，render中需要先找到当前路由地址，然后根据地址去 routerMap 中寻找对应组件，最后再用h()函数，返回组件的虚拟DOM
      render(h) {
        const component = self.routeMap[self.data.current]
        return h(component)
      },
    })
  }
  // 浏览器前进后退
  // 注册 popstate 函数
  initEvent() {
    // popstate 事件的作用
    window.addEventListener('popstate', () => {
      // this VueRouter对象，window.location.pathname代表路径部分
      this.data.current = window.location.pathname
    })
  }
}
