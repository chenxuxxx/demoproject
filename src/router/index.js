import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import table from '@/views/iview-ui/table'
import md5passWord from '@/views/other/md5-passWord'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/table',
      name: 'table',
      component: table
    },
    {
      path: '/md5-passWord',
      name: 'md5-passWord',
      component: md5passWord
    }
  ]
})
