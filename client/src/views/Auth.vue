<template>
	<div class="mt-40 mx-auto flex flex-col w-96 border border-blue-400">
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
			<form v-if="isToggle == false" class="flex flex-col flex-grow py-3">
				<input
					placeholder="Email"
					class="border my-2 px-2 py-1"
					id="sign-in-email"
					type="email"
				/>
				<input
					placeholder="Password"
					class="border my-2 px-2 py-1"
					id="sign-in-password"
					type="password"
				/>
				<button class="mt-2 bg-blue-400 text-white uppercase py-1">
					sign in
				</button>
			</form>
			<form v-else class="flex flex-col flex-grow py-3">
				<input
					placeholder="Username"
					class="border my-2 px-2 py-1"
					id="sign-up-username"
					type="text"
				/>
				<input
					placeholder="Email"
					class="border my-2 px-2 py-1"
					id="sign-up-email"
					type="email"
				/>
				<input
					placeholder="Password"
					class="border my-2 px-2 py-1"
					id="sign-up-password"
					type="password"
				/>
				<button class="mt-2 bg-blue-400 text-white uppercase py-1">
					sign up
				</button>
			</form>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Auth',
	data() {
		return {
			isToggle: false,
		};
	},
	components: {},
	methods: {},
};
</script>

<style scoped>
input:focus,
input:active {
	outline: none;
}
</style>
