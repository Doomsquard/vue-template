<template>
	<div>
		<form class="root" @submit.prevent="submited" v-if="!validateForm">
			<div class="email">
				<label for="email">email</label>
				<input
					type="email"
					:class="$v.form.email.$error ? 'error' : ''"
					id="email"
					v-model.trim="form.email"
				/>
			</div>
			<div class="password">
				<label for="password">password</label>
				<input
					v-model.trim="form.password"
					:class="$v.form.password.$error ? 'error' : ''"
					id="password"
					type="password"
				/>
				<p v-if="$v.form.password.$dirty && !$v.form.password.required">
					Обязательное поле
				</p>
			</div>
			<div class="checkbox">
				<label for="checkbox">save password</label>
				<input
					v-model="form.checkbox"
					:class="$v.form.checkbox.$error ? 'error' : ''"
					id="checkbox"
					type="checkbox"
				/>
			</div>
			<div class="radio">
				<label for="male">male</label>
				<input type="radio" id="male" v-model="form.radio" value="male" />
				<label for="female">female</label>
				<input type="radio" id="female" v-model="form.radio" value="female" />
			</div>
			<div class="list">
				<label for="country">country</label>
				<select id="country" v-model="form.currentCountry">
					<option
						v-for="(country, index) in form.country"
						:key="index"
						:value="country.value"
						>{{ country.label }}</option
					>
				</select>
			</div>
			<div class="multiple">
				<label for="multiple">select fav themes</label>
				<select id="multiple" v-model="form.favTheme" multiple>
					<option
						v-for="(theme, index) in form.themes"
						:value="theme.value"
						:key="index"
						>{{ theme.label }}</option
					>
				</select>
			</div>

			<button type="submit">log</button>
		</form>
		<Reg :email="form.email" v-else />
	</div>
</template>

<script>
	import Reg from './reg'
	import { validationMixin } from 'vuelidate'
	import { required, minLength, email } from 'vuelidate/lib/validators'
	export default {
		mixins: [validationMixin],
		name: 'helloWorld',
		components: { Reg },
		data() {
			return {
				validateForm: false,
				form: {
					email: '',
					password: '',
					checkbox: false,
					radio: 'male',
					favTheme: ['IT'],
					themes: [
						{
							label: 'IT',
							value: 'IT',
						},
						{
							label: 'BOOK',
							value: 'BOOk',
						},
					],
					currentCountry: 'Russia',
					country: [
						{
							label: 'Russia',
							value: 'RUS',
						},
						{
							label: 'Ucraine',
							value: 'UC',
						},
						{
							label: 'USA',
							value: 'USA',
						},
					],
				},
			}
		},
		methods: {
			submited() {
				this.$v.form.$touch()
				if (!this.$v.form.$error) {
					console.log('+')
					this.validateForm = true
				}
			},
		},
		validations: {
			form: {
				email: {
					required,
					email,
				},
				password: {
					minLength: minLength(5),
					required,
				},
				checkbox: {
					req() {
						return this.$v.form.checkbox.$model ? true : false
					},
				},
			},
		},
	}
</script>

<style scoped>
	.root {
		display: flex;
		align-items: center;
		justify-items: center;
		flex-direction: column;
	}
	label {
		margin: 10px;
		width: 100px;
	}
	.error {
		border: 1px solid red;
	}
</style>
