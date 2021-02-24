<template>
	<div class="header">
		<div>
			<p @click="scrollToTop">
				Список фильмов
			</p>
		</div>
		<button type="button" class="btn btn-dark" @click="signIn">
			{{ signButtonText }}
		</button>
	</div>
</template>

<script>
	export default {
		name: 'title',
		data() {
			return {
				buttonSign: true,
				auth: false,
			}
		},
		methods: {
			scrollToTop() {
				window.scrollTo(0, top)
			},
			signIn() {
				this.buttonSign = !this.buttonSign
				if (this.buttonSign) {
					this.$router.push({ name: 'mainPage' })
					localStorage.removeItem('auth')
					this.auth = false
				} else {
					localStorage.setItem('auth', true)
					this.auth = true
				}
			},
		},
		created() {
			this.auth = localStorage.getItem('auth') !== null
		},
		computed: {
			signButtonText() {
				return this.buttonSign && !localStorage.getItem('auth')
					? 'Войти'
					: 'Выйти'
			},
		},
	}
</script>

<style lang="scss" scoped>
	.header {
		display: flex;
		justify-content: space-around;
		position: fixed;
		top: 0;
		left: 0;
		min-width: 100%;
		max-height: 220px;
		padding-top: 15px;
		background-color: black;
		p {
			cursor: pointer;
		}
		button {
			margin-bottom: 10px;
		}
	}
</style>
