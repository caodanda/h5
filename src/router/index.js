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
    path:'/child',
    component:()=>import('../components/child.vue'),
    name:'child',
    meta:{
      title:"逛庙会"
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
    path:'/mock',
    component:()=>import('../components/mock.vue'),
    name:'mock',
    meta:{
      title:"fastMock"
    }
  },
  {
    path:'/changcheng',
    component:()=>import('../components/changcheng.vue'),
    name:'changcheng',
    meta:{
      title:"changcheng"
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