<template>
	<div class="modal" tabindex="-1">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title">
						<slot name="title"></slot>
					</h5>
					<button
						type="button"
						class="btn-close"
						data-bs-dismiss="modal"
						aria-label="Close"
						@click="close"
					></button>
				</div>
				<div class="modal-body" ref="modalBody" @scroll="onBodyScroll">
					<p>
						<slot name="body" />
					</p>
				</div>
				<div class="modal-footer">
					<button
						type="button"
						@click="close"
						class="btn btn-secondary"
						data-bs-dismiss="modal"
					>
						Close
					</button>
					<button
						type="button"
						@click="close"
						class="btn btn-primary"
						:disabled="buttonDisable"
					>
						Save changes
					</button>
				</div>
			</div>
		</div>
		<input v-model="inputValue" />
		<h1>{{ inputValue | upperCase }}</h1>
	</div>
</template>

<script>
	export default {
		name: 'Modal',
		data() {
			return {
				inputValue: '',
				buttonDisable: true,
			}
		},
		methods: {
			close() {
				this.$emit('close')
			},

			addSomeMethod() {
				console.log('method is add')
			},
		},
		filters: {
			upperCase(value) {
				return value.toUpperCase()
			},
		},
		mounted() {
			const modal = this.$refs.modalBody
			modal.scrollTop = modal.scrollHeight - modal.clientHeight
		},
		created() {
			console.log(this.$logger())
		},
	}
</script>

<style scoped>
	.modal {
		display: block;
	}
	.modal-body {
		max-height: 200px;
		overflow-y: scroll;
	}
</style>
