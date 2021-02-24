<template>
	<div class="filmCard">
		<div class="filmCard__item">
			<div class="filmCard__item-title">
				<p>
					{{ film.title }}
				</p>
			</div>
			<div class="filmCard__item-img">
				<p class="filmCard__item-rating">{{ film.rating }}</p>
				<img :src="film.img" alt="image film" />
				<router-link :to="{ name: 'filmPage', params: { id: film.id } }">
					<div class="filmCard__item__info">
						<p class="filmCard__item__info-title">
							Немного о сюжете
						</p>
					</div>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'filmCard',
		props: {
			film: Object,
		},
		created() {
			console.log(this.film)
		},
	}
</script>

<style lang="scss" scoped>
	.filmCard {
		&__item {
			position: relative;
			margin-bottom: 30px;
			&-title {
				p {
					position: absolute;
					margin-bottom: 0;
					bottom: 0;
					left: 0;
					width: 100%;
					color: #ffffff;
					height: 100px;
					background: linear-gradient(
						90deg,
						rgba(0, 0, 0, 1) 0%,
						rgba(0, 0, 0, 0) 90%
					);
					font-weight: 700;
					padding: 20px;
					font-size: 30px;
					border-radius: 0 0 10px 10px;
				}
			}
			&-img {
				height: auto;
				overflow: hidden;
				border-radius: 10px;
			}
			&-rating {
				position: absolute;
				right: 0;
				top: 0;
				background-color: #eb5804;
				width: 100px;
				height: 50px;
				margin-bottom: 0;
				display: flex;
				justify-content: center;
				align-items: center;
				color: #ffffff;
				font-weight: 700;
				font-size: 20px;
				border-radius: 0 10px 0 10px;
				opacity: 0.8;
			}
			&__info {
				position: absolute;
				cursor: pointer;
				top: 0;
				left: 0;
				bottom: 0;
				right: 0;
				border-radius: 10px;
				background-color: rgba(0, 0, 0, 0.6);
				color: #ffffff;
				display: flex;
				justify-content: center;
				align-items: center;
				font-weight: 700;
				font-size: 30px;
				text-decoration: none;
				opacity: 0;
				transition: all 0.2s ease;
				&:hover,
				&:focus {
					opacity: 1;
				}
			}
		}
		img {
			max-width: 1000px;
		}
	}
</style>
