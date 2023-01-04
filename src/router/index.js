import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/home'
import Main from '@/components/Main'
import Mall from '@/components/Mall'
import User from '@/components/User'
import PageOne from '@/components/PageOne'
import PageTwo from '@/components/PageTwo'
import Other from '@/components/Other'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      redirect: '/home',
      // redirect 重定向
      children: [{ //children 不要大写 找这个错误人都快疯了
        path: 'HelloWorld',
        name: 'HelloWorld',
        component: HelloWorld
      },
      {
        path: 'home',
        // path 后面都不要/ 否则会报错
        name: 'Home',
        component: Home
      },
      {
        path: 'mall',
        name: 'Mall',
        component: Mall
      },
      {
        path: 'user',
        name: 'User',
        component: User
      },
      {
        path: 'Page1',
        name: 'page1',
        component: PageOne
      },
      {
        path: 'Page2',
        name: 'Page2',
        component: PageTwo
        // path 要跟数据给的路径一样
      }
      ]
    },



  ]
})
