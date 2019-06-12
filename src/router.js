import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home,
			meta: {
				title: "首页导航"
			}
		},
		{
			path: '/about',
			name: 'about',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
			meta: {
				title: "关于本站"
			}
		}, {
			path: '*',
			name: 'error',
			component: () => import('./views/Error.vue'),
			meta: {
				title: "错误404"
			}
		}, {
			path: '/price',
			name: 'price',
			component: () => import('./views/Price.vue'),
			meta: {
				title: "捐赠本站"
			}
		}, {
			path: '/message',
			component: () => import('./views/Message.vue'),
			meta: {
				title: "留言板"
			}
		}
	]
})
