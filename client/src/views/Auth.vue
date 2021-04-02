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
	<Alert alertMessage = 'person not found'/>
	</div>
</template>

<script>
import Login from '../components/Login';
import Register from '../components/Register';
import Alert from '../components/Alert'
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
		Alert
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
