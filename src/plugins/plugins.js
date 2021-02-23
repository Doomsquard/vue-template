import onBodyScroll from '../mixins/mixins'

export default {
	install(vue) {
		vue.mixin(onBodyScroll)
		vue.prototype.$logger = () => {
			console.log('simple plugin')
		}
	},
}
