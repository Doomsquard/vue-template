<template>
	<div class="filmListPage">
		<FilmList />
	</div>
</template>

<script>
	import FilmList from '../components/filmList'

	export default {
		name: 'filmListPage',
		components: { FilmList },
	}
</script>

<style lang="scss" scoped>
	.filmListPage {
		margin-top: 100px;
	}
</style>
