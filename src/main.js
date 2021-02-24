import Vue from 'vue'
import App from './App.vue'
import './assets/styles/main.scss'
import router from './router/index'
import VueRouter from 'vue-router'

Vue.config.productionTip = false
Vue.use(VueRouter)

new Vue({
	render: (h) => h(App),
	el: '#app',
	router,
})
