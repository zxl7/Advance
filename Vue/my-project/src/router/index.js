import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Demo1 from '@/pages/demo1'
import Demo2 from '@/pages/demo2'
import Demo3 from '@/pages/demo3'
import Demo4 from '@/pages/demo4'
import Demo5 from '@/pages/demo5'
import Demo6 from '@/pages/demo6'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/demo1',
      name: 'demo1',
      component: Demo1
    },
    {
      path: '/demo2',
      name: 'demo2',
      component: Demo2
    },
    {
      path: '/demo3',
      name: 'demo3',
      component: Demo3
    },
    {
      path: '/demo4',
      name: 'demo4',
      component: Demo4
    },
    {
      path: '/demo5',
      name: 'demo5',
      component: Demo5
    },
    {
      path: '/demo6',
      name: 'demo6',
      component: Demo6
    }
  ]
})
