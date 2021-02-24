import VueRouter from 'vue-router'
import mainPage from '../pages/mainPage'
import errorPage from '../pages/404'
import filmList from '../pages/filmListPage'
import headerLayout from '../pages/headerLayout'
import filmPage from '../pages/filmPage'

export default new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'mainPage',
			component: mainPage,
		},
		{
			path: '/films',
			name: 'headerLayout',
			component: headerLayout,
			children: [
				{
					path: '',
					name: 'filmListPage',
					component: filmList,
				},
				{
					path: ':id',
					name: 'filmPage',
					component: filmPage,
					beforeEnter(to, from, next) {
						if (localStorage.getItem('auth')) {
							next()
						} else {
							next({ name: 'filmListPage' })
						}
					},
				},
			],
		},

		{
			path: '/*',
			name: 'errorPage',
			component: errorPage,
		},
	],
})
