import Vue from 'vue'
import App from './App.vue'
import 'imooc-ui/dist/css/index.css'
import MUI from "imooc-ui";
Vue.use(MUI);
// import '../components/css/demo.scss'
// import '../components/css/card.scss'
// import Demo from '../components/lib/demo/index'
// import Card from '../components/lib/card/index'

// Vue.use(Demo) // Demo.install ---> Vue.component(Demo.name, Demo)
// Vue.use(Card)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
