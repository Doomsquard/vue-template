export default {
	methods: {
		addSomeMethod() {
			console.log('add method')
		},
		onBodyScroll(e) {
			const modal = e.target
			if (modal.clientHeight + modal.scrollTop + 20 >= modal.scrollHeight) {
				this.buttonDisable = false
			} else {
				this.buttonDisable = true
			}
			this.addSomeMethod()
		},
	},
}
