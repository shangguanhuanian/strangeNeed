import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/HomeView.vue'
import about from '../views/AboutView.vue'
// import body from '../views/Body.vue'

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
		{path: '/body',component: body,component:() =>('../views/Body.vue')},{path: '/about',component: about}
	]},
  ]
})


export default router
