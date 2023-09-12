import Vue from 'vue'
import App from '../data_function/App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
