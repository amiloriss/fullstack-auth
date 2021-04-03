<template>
	<form @submit="signIn" class="flex flex-col flex-grow py-3">
		<input
			required
			placeholder="Email"
			class="border my-2 px-2 py-1"
			id="sign-in-email"
			type="email"
			v-model="signinEmail"
		/>
		<input
			required
			placeholder="Password"
			class="border my-2 px-2 py-1"
			id="sign-in-password"
			type="password"
			v-model="signinPassword"
		/>
		<button class="mt-2 bg-blue-400 text-white uppercase py-1">
			sign in
		</button>
	</form>
</template>

<script>
import { mapActions } from 'vuex';
export default {
	name: 'Login',
	data() {
		return {
			signinEmail: '',
			signinPassword: '',
		};
	},

	methods: {
		...mapActions(['login']),
		signIn(e) {
			e.preventDefault();
			if (this.signinEmail !== '' && this.signinPassword !== '') {
				this.login({
					email: this.signinEmail.trim(),
					password: this.signinPassword.trim(),
				});
				this.signinEmail = '';
				this.signinPassword = '';
			} else {
				console.log('fail to sign in');
			}
		},
	},
};
</script>
