<template>
	<div id="app">
		<Main msg="price" />
	</div>
</template>

<script>
	import Main from './components/main.vue'

	export default {
		name: 'App',
		components: {
			Main,
		},
	}
</script>

<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
</style>
