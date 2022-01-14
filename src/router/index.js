import VueRouter from "vue-router";
import Vue from "vue";
Vue.use(VueRouter)


const routes = [
  {
    path:'/',
    component:()=>import('../components/home.vue'),
  },
  {
    path:'/home',
    component:()=>import('../components/home.vue'),
    name:'home',
    meta:{
      title:"首页"
    }
  },
  {
    path:'/newYear',
    component:()=>import('../components/newYear.vue'),
    name:'newYear',
    meta:{
      title:"恭贺新年"
    }
  },
  {
    path:'/show',
    component:()=>import('../components/show.vue'),
    name:'show',
    meta:{
      title:"猜猜我是谁"
    }
  },
  {
    path:'/lottery',
    component:()=>import('../components/lottery.vue'),
    name:'lottery',
    meta:{
      title:"随机抽奖"
    }
  },
  {
    path:'/animate',
    component:()=>import('../components/animate.vue'),
    name:'animate',
    meta:{
      title:"动画学习"
    }
  },
  {
    path:'/mana',
    component:()=>import('../components/mana.vue'),
    name:'mana',
    meta:{
      title:"后台-viewUI"
    }
  },
]

const router = new VueRouter({
  mode:'history',
  routes
})

router.afterEach(to=>{
  let title = to.meta.title || '移动H5'
  window.document.title = title;
  window.scrollTo(0,0)
})

export default router