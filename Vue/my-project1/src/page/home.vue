<template>
  <div class="home-page">
    <v-header></v-header>

    <ul class="nav">
      <li v-for="item in arrList" :key="item.id">
        <img :src="item.imgUrl">
        <span>{{item.name}}</span>
      </li>
    </ul>

    <v-course :arrList="array"></v-course>

  </div>
</template>
<script>
import Header from '@/components/header/'
import webImg from '@/assets/web.png'
import move from '@/assets/move.png'
import data from '@/assets/data.png'
import bigdata from '@/assets/bigdata.png'
import course from '@/components/course/'

import course1 from '@/assets/course1.jpg'
import course2 from '@/assets/course2.jpg'
import course3 from '@/assets/course3.jpg'
import course4 from '@/assets/course4.jpg'
import course5 from '@/assets/course5.jpg'

export default {
  data () {
    return {
      arrList: [],

      array: []
    }
  },
  mounted () {
    this.arrList = [
      {
        imgUrl: webImg,
        name: '前端开发'
      },
      {
        imgUrl: move,
        name: '后端开发'
      },
      {
        imgUrl: data,
        name: '数据库'
      },
      {
        imgUrl: bigdata,
        name: '云计算'
      }
    ]

    this.array = [
      {
        imgUrl: course1,
        title: '加油鸭',
        msg: '中级 · 330人在学'
      },
      {
        imgUrl: course2,
        title: '实例妙解Sed和Awk的秘密',
        msg: '中级 · 330人在学'
      },
      {
        imgUrl: course3,
        title: '望远镜',
        msg: '中级 · 330人在学'
      },
      {
        imgUrl: course4,
        title: '实例妙解时钟的秘密',
        msg: '中级 · 330人在学'
      },
      {
        imgUrl: course5,
        title: '星星的力量哟',
        msg: '中级 · 330人在学'
      }
    ]
  },
  components: {
    'v-header': Header,
    'v-course': course
  }
}
</script>
<style scoped>
.home-page .nav {
  height: 100px;
  background: #f3f5f7;
  white-space: nowrap;
  text-align: center;
  font-size: 0;
}
.nav li {
  width: 88px;
  display: inline-block;
  text-align: center;
  font-size: 14px;
}
.nav li img {
  display: block;
  width: 32px;
  margin: 20px auto 12px;
}

</style>
