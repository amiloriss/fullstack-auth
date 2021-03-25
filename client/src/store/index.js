import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {};

const mutations = {};

const actions = {
	async addPerson({ commit }, newPerson) {
		fetch('/person', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newPerson),
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
