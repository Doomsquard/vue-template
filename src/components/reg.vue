<template>
	<div>
		<h1>Вы успешно зарегистрированы {{ email }}</h1>
	</div>
</template>

<script>
	export default {
		name: 'Reg',
		props: {
			email: String,
		},
	}
</script>
