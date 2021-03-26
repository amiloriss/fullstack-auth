import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {};

const mutations = {};

const actions = {
	async login({commit}, person){
		await fetch('/api/persons/login', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(person),
		})
	},
	async register({ commit }, person) {
		await fetch('/api/persons', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(person),
		});
	},
};

const getters = {};

export default new Vuex.Store({
	state,
	mutations,
	actions,
	getters,
});
