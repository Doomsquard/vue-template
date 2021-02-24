<template>
	<div className="filmList">
		<div clasName="filmList__item" v-for="(film, index) in films" :key="index">
			<FilmCard :film="film" />
		</div>
	</div>
</template>

<script>
	import films from '../mocks/films'
	import FilmCard from './filmCard'
	export default {
		name: 'filmList',
		components: { FilmCard },
		data() {
			return {
				films,
			}
		},
	}
</script>
