import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
	  {// redirect重定向
	      path: '',redirect: '/home'},
	{path: '/home',component: home,
	children: [
		{path: '/body',component: body,component:() =>import('../views/Body.vue')},
		{path: '/eat',component: eat,component:() =>import('../views/WantTea.vue')},
		{path: '/about',component: about,component:() =>import('../views/About.vue')},
	]},
  ]
})


export default router
