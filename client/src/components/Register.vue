<template>
	<form @submit="signUp" class="flex flex-col flex-grow py-3">
		<input
			placeholder="Username"
			class="border my-2 px-2 py-1"
			id="sign-up-username"
			type="text"
			v-model="signupUsername"
		/>
		<input
			placeholder="Email"
			class="border my-2 px-2 py-1"
			id="sign-up-email"
			type="email"
			v-model="signupEmail"
		/>
		<input
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
		signUp() {
			if (
				this.signupUsername !== '' &&
				this.signupEmail !== '' &&
				this.signupPassword !== ''
			) {
				// if one from those fields do not fill
				console.log('sign up');
				fetch('/person', {
					method: 'POST',
					headers: {
						Accept: 'application/json',
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						user: {
							signupUsername: this.signupUsername,
							signupEmail: this.signupEmail,
							signupPassword: this.signupPassword,
						},
					}),
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
