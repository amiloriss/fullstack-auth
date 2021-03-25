<template>
	<form @submit="signIn" class="flex flex-col flex-grow py-3">
		<input
			placeholder="Email"
			class="border my-2 px-2 py-1"
			id="sign-in-email"
			type="email"
			v-model="signinEmail"
		/>
		<input
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
export default {
	name: 'Login',
	data() {
		return {
			signinEmail: '',
			signinPassword: '',
		};
	},

	methods: {
		signIn() {
			if (this.signinEmail !== '' && this.signinPassword !== '') {
				// if one from those fields do not fill
				console.log('sign in');

				fetch('/person', {
					method: 'GET',
					headers: {
						Accept: 'application/json',
						'Content-Type': 'application/json',
					},
					// body: JSON.stringify({
					// 	email: this.signinEmail,
					// 	password: this.signinPassword,
					// }),
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
