import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
	  {
	      path: '',
	      // redirect重定向
	      redirect: '/home'
	    },
	{path: '/home',component: home,
	children: [
		{path: '/body',component: body,component:() =>import('../views/Body.vue')},
		{path: '/about',component: about,component:() =>import('../views/AboutView.vue')}
	]},
  ]
})


export default router
