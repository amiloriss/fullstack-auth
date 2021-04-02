import Vue from 'vue';
import store from '../store/index';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Auth from '../views/Auth.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '*',
		redirect: {
			name: 'Auth',
		},
	},
	{
		path: '/auth',
		name: 'Auth',
		component: Auth,
	},
	{
		path: '/home',
		name: 'Home',
		component: Home,
	},
];

const router = new VueRouter({
	routes,
});

router.beforeEach((to, from, next) => {
	store.dispatch('fetchToken');
	if (to.fullPath === '/home') {
		if (!store.state.token) {
			next('/auth');
		}
	}
	if (to.fullPath === '/auth') {
		if (store.state.token) {
			next('/home');
		}
	}
	next();
});

export default router;
