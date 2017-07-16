import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Hi from '@/components/Hi'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'
import Params from '@/components/Params.vue'
// 全局使用root
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello', // name传参
      alias: '/home',
      // component: Hello
      components: {
        default: Hello,
        left: Hi1,
        right: Hi2
      }
    },
    {
      path: '/hi',
      name: 'Hi',
      // component: Hi,
      // children: [
      //   {
      //     path: 'hi1',
      //     name: 'Hi1',
      //     component: Hi1
      //   },
      //   {
      //     path: 'hi2',
      //     name: 'Hi2',
      //     component: Hi2
      //   }
      // ],
      components: {
        default: Hi,
        left: Hi2,
        right: Hi1
      }
    },
    {
      path: '/params/:newsId(\\d+)/:newsTitle',
      component: Params
    },
    {
      path: '/goback',
      redirect: '/'
    },
    {
      path: '/goparams/:newsId(\\d+)/:newsTitle',
      redirect: '/params/:newsId(\\d+)/:newsTitle'
    }
  ]
})
