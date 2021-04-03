<template>
	<div
		:class="isSuccess ? 'border-green-500' : 'border-red-500'"
		class="mt-5 w-96 p-5 border border-red-500"
	>
		<p
			:class="isSuccess ? 'text-green-500' : 'text-red-500'"
			class=" text-center uppercase"
		>
			{{ alertMessage }}
		</p>
	</div>
</template>

<script>
export default {
	name: 'Alert',
	components: {},
	props: {
		alertMessage: String,
		isSuccess: Boolean,
	},
};
</script>
