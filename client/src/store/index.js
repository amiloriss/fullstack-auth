import Vue from 'vue';
import Vuex from 'vuex';
import router from '../router/index';

Vue.use(Vuex);

const state = {
	person: null,
	isAuth: null,
	token: null,
};

const mutations = {
	setPerson: (state, personData) =>
		(state.person = JSON.parse(localStorage.getItem('personData'))),
	updateToken: (state, token) => (state.token = token),
	fetchUser: (state, personData) => (state.person = personData),
	setAuth: (state, authSuccess) => (state.isAuth = authSuccess),
	logout: state => localStorage.removeItem('personToken'),
};

const actions = {
	async login({ commit }, person) {
		try {
			const res = await fetch('/auth/login', {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(person),
			});
			if (res.status === 200) {
				const { email, username, token } = await res.json();
				const personData = { email, username };

				localStorage.setItem('personToken', token);
				localStorage.setItem('personData', JSON.stringify({ email, username }));

				commit('updateToken', token);
				commit('setPerson', personData);
				commit('setAuth', true);

				if (state.token) router.push('/home');
			}
		} catch (error) {
			console.error(error);
		}
	},

	fetchUser({ commit }) {
		commit('fetchUser', JSON.parse(localStorage.getItem('personData')));
	},

	fetchToken({ commit }) {
		commit('updateToken', localStorage.getItem('personToken'));
	},

	async register({ commit }, person) {
		await fetch('/auth', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(person),
		});
	},

	logout({ commit }) {
		commit('logout');
		router.push('/');
	},
};

const store = new Vuex.Store({
	state,
	mutations,
	actions,
});

export default store;
