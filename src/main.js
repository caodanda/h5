import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'lib-flexible/flexible.js'
import vConsole from '@/utils/vconsole.js'
import axios from 'axios'
import VueTouch from 'vue-touch';
Vue.use(VueTouch, {name: 'v-touch'});
// vConsole 在开发环境中使用
if(process.env.NODE_ENV === 'development'){
  Vue.prototype.$vConsole = vConsole;
}

Vue.config.productionTip = false
Vue.prototype.$axios = axios

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

