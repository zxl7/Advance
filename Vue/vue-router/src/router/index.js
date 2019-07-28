import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hi from '@/components/Hi'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'
import Params from '@/components/Params'
import Error from '@/components/Error'

Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     },
//     {
//       path: '/Hi',
//       name: 'Hi',
//       component: Hi,
//       children: [
//         { path: 'hi1', name: 'hi1', component: Hi1 },
//         { path: 'hi2', name: 'hi2', component: Hi2 }
//       ]
//     },
//     {
//       path: '*',
//       component: Error
//     }
//   ]
// })
export default new Router({
  routes: [
    {
      path: '/',
      name: '首页！！',
      components: {
        default: HelloWorld,
        left: Hi1,
        right: Hi2
      }
    },
    {
      path: '/Hi',
      name: 'hi组件',
      components: {
        default: Hi,
        left: Hi2,
        right: Hi1
      }
    },
    {
      path: '/params/:newsId(\\d+)/:newsTitle',
      name: 'params',
      components: {
        default: Params,
        left: Hi1,
        right: Hi2
      }
    },
    {
      path: '*',
      component: Error
    },
    {
      path: '/goback',
      redirect: '/'
      // 重定向！！
    },
    {
      path: '/goParams/:newsId(\\d+)/:newsTitle',
      redirect: '/Params/:newsId/:newsTitle'
      // 重定向！！
    }
  ]
})
