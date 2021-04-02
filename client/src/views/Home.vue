<template>
	<div>
		<h1 class="text-title text-center text-blue-400">Hello {{person.username}}</h1>
		<button @click="logoutPerson" class="mt-2 bg-blue-400 text-white uppercase p-1">Logout</button>
	</div>
</template>

<script>
import {mapActions, mapState} from 'vuex';
import store from '../store/index'
export default {
	name: 'Home',
	components: {},
	methods: {
		...mapActions(['logout']),
		logoutPerson(){
			this.logout();
		}
	},
	created() {
		store.dispatch('fetchUser')
	},
	computed: {
		...mapState(['person'])
	}
};
</script>
