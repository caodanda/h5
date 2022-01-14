import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'lib-flexible/flexible.js'
import VConsole from "vconsole";
import axios from 'axios'
import VueTouch from 'vue-touch';
import animate from 'animate.css'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';


Vue.use(ViewUI);
Vue.use(VueTouch, {name: 'v-touch'});
Vue.use(animate)
// vConsole 在开发环境中使用
console.log('env',process.env.NODE_ENV)
if(process.env.NODE_ENV === 'development'){
  new VConsole()
}
import MD5 from 'js-md5';
const accessKey = '9fd977fbd0'
const secret = '7513c7c1e0194f5786cc07142606c7a2'
let accessTime = new Date().getTime()
console.log('time',accessTime)
let keyString = `${accessKey}${accessTime}${secret}${accessKey}`
let mdString = MD5(keyString)
console.log('md5',mdString)


Vue.config.productionTip = false
Vue.prototype.$axios = axios

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

