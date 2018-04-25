import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import ToolBar from '@/components/ToolBar'
import About from '@/components/About'
import CalcTool from '@/components/CalcTool'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/calc',
      name: 'calcTool',
      component: CalcTool
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
