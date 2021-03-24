<template>
	<div id="app">
		<Header />
		<div class="lg:container lg:mx-auto">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
import Header from './components/Header';
export default {
	name: 'App',
	components: {
		Header,
	},
};
</script>

<style></style>
