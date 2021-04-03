<template>
	<div class="flex items-center flex-col">
		<div class="mt-40 flex flex-col w-96 border border-blue-400">
			<div class="w-full">
				<div
					@click="isToggle = false"
					:class="isToggle ? 'bg-blue-400 text-white' : 'text-blue-400'"
					class="w-3/6 uppercase inline-block text-center cursor-pointer px-3 py-5 font-bold"
				>
					sign in
				</div>
				<div
					@click="isToggle = true"
					:class="isToggle ? 'text-blue-400' : 'bg-blue-400 text-white'"
					class="w-3/6 uppercase inline-block text-center cursor-pointer px-3 py-5 font-bold"
				>
					sign up
				</div>
			</div>
			<div class="flex flex-row px-5 py-2">
				<Login v-if="isToggle == false" />
				<Register v-else />
			</div>
		</div>
		<Alert
			v-if="isLogin === false"
			v-bind:alertMessage="alertMessage"
			v-bind:isSuccess="isLogin"
		/>
		<Alert
			v-if="isRegister === false || isRegister === true"
			v-bind:alertMessage="alertMessage"
			v-bind:isSuccess="isRegister"
		/>
	</div>
</template>

<script>
import Login from '../components/Login';
import Register from '../components/Register';
import Alert from '../components/Alert';
import store from '../store/index';
export default {
	name: 'Auth',
	data() {
		return {
			isToggle: false,
		};
	},
	components: {
		Login,
		Register,
		Alert,
	},
	computed: {
		isLogin: () => store.state.isLogin,
		isRegister: () => store.state.isRegister,
		alertMessage: () => store.state.alertMessage,
	},
	methods: {},
};
</script>

<style scoped>
input:focus,
input:active {
	outline: none;
}
</style>
