import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Params from '@/components/params'
import Hi1 from '@/components/Hi1'
import Error from '@/components/Error'

//配置路由文件
Vue.use(Router)


export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component:HelloWorld,
      alias:'/Home1'
    },{
      path:'/params/:newsId(\\d+)/:newsTitle',
      component: Params
    },{
      path:'/goHome',
      redirect:'/'
    },{
      path:'/goParams/:newsId(\\d+)/:newsTitle',
      redirect:'/params/:newsId(\\d+)/:newsTitle'
    },{
      path:'/hi1',
      component:Hi1,
      alias:'/xana'
    },{
      path:'*',
      component:Error
    }
  ]
})
