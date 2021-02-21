<template>
	<div class="main">
		<button @click="checkmodal" v-if="!check">modal click</button>
		<Modal v-if="check" @close="checkmodal">
			<template slot="title">title</template>
			<template slot="body">
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore enim
					magni modi quas itaque, atque ea exercitationem autem excepturi
					aperiam nihil. Reprehenderit, assumenda. Dicta consequuntur harum
					possimus dolores voluptas earum.
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ab
					harum nemo nulla, quidem quam minima asperiores, quaerat perferendis
					praesentium nobis dicta. Maxime, illo deleniti amet quo qui rem
					maiores!
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Est eaque
					dicta aliquid error reiciendis. Sint laudantium voluptate expedita
					quos fugiat, iure vel obcaecati magnam consequuntur praesentium a nam
					accusantium similique?
				</p>
			</template>
		</Modal>
	</div>
</template>

<script>
	import Modal from './modal'
	export default {
		name: 'main',
		components: { Modal },
		data() {
			return {
				check: false,
			}
		},
		methods: {
			checkmodal() {
				this.check = !this.check
			},
		},
		watch: {
			check: function(newState, prev) {
				console.log(newState, prev)
			},
		},
	}
</script>
