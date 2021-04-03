<template>
	<form @submit="signUp" class="flex flex-col flex-grow py-3">
		<input
			required
			placeholder="Username"
			class="border my-2 px-2 py-1"
			id="sign-up-username"
			type="text"
			v-model="signupUsername"
		/>
		<input
			required
			placeholder="Email"
			class="border my-2 px-2 py-1"
			id="sign-up-email"
			type="text"
			v-model="signupEmail"
		/>
		<input
			required
			minlength="6"
			placeholder="Password"
			class="border my-2 px-2 py-1"
			id="sign-up-password"
			type="password"
			v-model="signupPassword"
		/>
		<button class="mt-2 bg-blue-400 text-white uppercase py-1">
			sign up
		</button>
	</form>
</template>

<script>
import { mapActions } from 'vuex';
export default {
	name: 'Register',
	data() {
		return {
			signupUsername: '',
			signupEmail: '',
			signupPassword: '',
		};
	},
	methods: {
		...mapActions(['register']),
		signUp(e) {
			e.preventDefault();
			if (
				this.signupUsername !== '' &&
				this.signupEmail !== '' &&
				this.signupPassword !== ''
			) {
				// if one from those fields do not fill
				console.log('sign up');
				this.register({
					username: this.signupUsername.trim(),
					email: this.signupEmail.trim(),
					password: this.signupPassword.trim(),
				});
				this.signupUsername = '';
				this.signupEmail = '';
				this.signupPassword = '';
			} else {
				console.log('fail to sign up');
			}
		},
	},
};
</script>
