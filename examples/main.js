import Vue from 'vue'
import App from './App.vue'

import '../components/css/demo.scss'
import Demo from '../components/lib/demo/index'
Vue.use(Demo) // Demo.install ---> Vue.component(Demo.name, Demo)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
