import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import '@/style/theme/index.css'
import echarts from 'echarts'

Vue.prototype.$echarts = echarts
Vue.prototype.$imgPath = 'http://121.196.145.100:8080/Hotel/'
Vue.config.productionTip = false
Vue.use(ElementUI)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
