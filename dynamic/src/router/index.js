import { createRouter, createWebHistory } from "vue-router"
import { routes } from "./routes"
import { getRoutes } from "./service"

const router = createRouter({
	history: createWebHistory(),

	routes: [
		{
			path: "/",
			component: () => import("@/views/home.vue"),
			name: "home",
			meta: {
				enterClass: "animate__animated animate__rotateInUpLeft",
				title: "网站首页",
				isMenu: true,
			},
		},
		{
			path: "/:any(.+)",
			name: "notFound",
			meta: {
				title: "404",
				isMenu: false,
			},
			component: () => import("@/views/404.vue"),
		},
	],
})

// router.addRoute({
// 	path: "/about",
// 	name: "'about'",
// 	component: () => import("@/views/about.vue"),
// })
// router.addRoute({
// 	path: "/article",
// 	name: "article",
// 	component: () => import("@/views/article.vue"),
// })
let isAddRoute = false

router.beforeEach(async (to, from, next) => {
	const routes = await getRoutes()
	if (isAddRoute === false) {
		routes.forEach((route) => {
			router.addRoute(route)
			console.log(route)
			console.log(route.name + "已经添加！")
		})
		isAddRoute = true

		return next(to.fullPath)
	} else {
		next()
	}
})
export { router }
