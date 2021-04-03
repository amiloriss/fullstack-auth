import Vue from 'vue';
import Vuex from 'vuex';
import router from '../router/index';

Vue.use(Vuex);

const state = {
	person: null,
	isLogin: null,
	alertMessage: '',
	isRegister: null,
	token: null,
};

const mutations = {
	setPerson: state =>
		(state.person = JSON.parse(localStorage.getItem('personData'))),
	updateToken: (state, token) => (state.token = token),
	fetchPerson: (state, personData) => (state.person = personData),
	setRegister: (state, [isRegister, message]) => {
		state.isRegister = isRegister;
		state.alertMessage = message;
		setTimeout(() => {
			state.isRegister = null;
			state.alertMessage = '';
		}, 3000);
	},
	setLogin: (state, [isLogin, message]) => {
		state.isLogin = isLogin;
		state.alertMessage = message;
		setTimeout(() => {
			state.isLogin = null;
			state.alertMessage = '';
		}, 3000);
	},
	logout: () => {
		localStorage.removeItem('personToken');
		localStorage.removeItem('personData');
	},
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

				localStorage.setItem('personToken', token);
				localStorage.setItem('personData', JSON.stringify({ email, username }));

				commit('updateToken', token);
				commit('setPerson');

				if (state.token) router.push('/home');
			} else {
				const err = await res.json();
				throw new Error(err);
			}
		} catch (error) {
			// alert fail to login
			commit('setLogin', [false, error.message]);
		}
	},

	fetchPerson({ commit }) {
		commit('fetchPerson', JSON.parse(localStorage.getItem('personData')));
	},

	fetchToken({ commit }) {
		commit('updateToken', localStorage.getItem('personToken'));
	},

	async register({ commit }, person) {
		try {
			const res = await fetch('/auth', {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(person),
			});

			const response = await res.json() 
			// alert user has been created
			commit('setRegister', [true, response]);

			if (res.status !== 200) {
				throw new Error(response);
			}
		} catch (error) {
			// alert this person already exists
			commit('setRegister', [false, error.message]);
			console.log(error.message);
		}
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
