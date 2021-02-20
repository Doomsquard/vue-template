<template>
	<div class="root">
		<div class="img">
			<img
				v-if="showImage"
				src="../assets/img/aIdDy6e2Bdg.jpg"
				:style="currentImageSize"
				:class="filterImg"
			/>
			<p v-else>come back soon</p>
		</div>
		<form>
			<label for="rangeHeight">height:{{ sizeImage.currentHeight }}</label>
			<input
				type="range"
				:min="sizeImage.minHeight"
				id="rangeHeight"
				:max="sizeImage.maxHeight"
				:value="sizeImage.currentHeight"
				@input="sizeImage.currentHeight = $event.target.value"
			/>
		</form>
		<form>
			<label for="rangeWidth">width:{{ sizeImage.currentWidth }}</label>
			<input
				type="range"
				:min="sizeImage.minWidth"
				id="rangeWidth"
				:max="sizeImage.maxWidth"
				:value="sizeImage.currentWidth"
				@input="sizeImage.currentWidth = $event.target.value"
			/>
		</form>
		<form>
			<label for="rotate">rotate:{{ sizeImage.rotate.currentDeg }}</label>
			<input
				type="range"
				:min="sizeImage.rotate.minDeg"
				id="rotate"
				:max="sizeImage.rotate.maxDeg"
				:value="sizeImage.rotate.currentDeg"
				@input="sizeImage.rotate.currentDeg = $event.target.value"
			/>
		</form>
		<button @click="showImage = !showImage">{{ buttonMsg }}</button>
		<div class="filters">
			<h2>Фильтры</h2>
			<button
				@click="filterImg.sepia = !filterImg.sepia"
				:class="filterImg.sepia ? 'active' : ''"
			>
				Сепия
			</button>
			<button
				@click="filterImg.blur = !filterImg.blur"
				:class="filterImg.blur ? 'active' : ''"
			>
				Размытие
			</button>
			<button
				@click="filterImg.shadows = !filterImg.shadows"
				:class="filterImg.shadows ? 'active' : ''"
			>
				Тени
			</button>
			<button
				@click="filterImg.border = !filterImg.border"
				:class="filterImg.border ? 'active' : ''"
			>
				Рамка
			</button>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'HelloWorld',
		data() {
			return {
				showImage: true,
				sizeImage: {
					minHeight: 300,
					maxHeight: 500,
					minWidth: 300,
					maxWidth: 500,
					currentHeight: 500,
					currentWidth: 500,
					rotate: {
						minDeg: 0,
						maxDeg: 360,
						currentDeg: 0,
					},
				},
				filterImg: {
					sepia: false,
					blur: false,
					shadows: false,
					border: false,
				},
			}
		},
		computed: {
			currentImageSize: function() {
				return {
					height: `${this.sizeImage.currentHeight}px`,
					width: `${this.sizeImage.currentWidth}px`,
					transform: `rotate(${this.sizeImage.rotate.currentDeg}deg)`,
				}
			},
			buttonMsg: function() {
				return this.showImage ? 'Скрыть' : 'Показать'
			},
		},
	}
</script>

<style scoped>
	.img {
		min-width: 500px;
		min-height: 500px;
	}
	button {
		min-height: 30px;
		min-width: 100px;
	}
	.filters {
		display: flex;
		padding: 10px;
		align-items: center;
		justify-content: center;
	}
	.sepia {
		filter: sepia(60%);
	}
	.blur {
		filter: blur(10px);
	}
	.shadows {
		box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
	}
	.border {
		border: 4px solid black;
	}
	.active {
		background-color: grey;
	}
</style>
