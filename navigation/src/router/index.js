import { createRouter, createWebHistory } from "vue-router"
import home from "@/views/home.vue"
import about from "@/views/about.vue"
import login from "@/views/login.vue"
import article from "@/views/article.vue"
import { loginCheck } from "@/helper.js"
const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: "/",
			component: home,
			name: "home",
			beforeEnter: [],
		},
		{
			path: "/about",
			component: about,
			name: "about",
			meta: { auth: false },
			beforeEnter: (to, from) => {
				console.log("路由配置项中:beforeEnter")
			},
		},
		{
			path: "/login",
			component: login,
			name: "login",
		},
		{
			path: "/article",
			component: article,
			name: "article",
		},
	],
})
router.beforeEach((to, from) => {
	console.log("全局:beforeEach")
	return true
})
router.beforeResolve((to, from) => {
	console.log("全局:beforeResolve")
})
const routes = []
router.afterEach((to, from, fail) => {
	console.log("全局:afterEach")
	if (fail) {
	}
	if (!fail) {
		console.log("success")
		routes.push(to.path)
		localStorage.setItem("routes", JSON.stringify(routes))
	}
})
export default router
