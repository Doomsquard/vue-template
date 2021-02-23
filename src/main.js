import Vue from 'vue'
import App from './App.vue'
import './main.css'
import plugin from './plugins/plugins'

Vue.use(plugin)

Vue.config.productionTip = false

new Vue({
	render: (h) => h(App),
}).$mount('#app')
