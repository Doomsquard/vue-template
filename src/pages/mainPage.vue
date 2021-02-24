<template>
	<div class="main">
		<div class="main__title">
			<h1>Онлайн кинотеатр</h1>
		</div>
		<button
			type="button"
			class="btn btn-dark"
			@click="$router.push({ name: 'filmListPage' })"
		>
			Смотреть
		</button>
	</div>
</template>

<script>
	export default {
		name: 'mainPage',
		mounted() {
			console.log(this.$route)
		},
	}
</script>

<style lang="scss" scoped>
	.main {
		display: flex;
		flex-direction: column;
		button {
			display: block;
			max-width: 200px;
			align-self: center;
		}
	}
</style>
