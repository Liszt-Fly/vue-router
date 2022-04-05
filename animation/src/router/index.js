import { createRouter, createWebHistory } from "vue-router"
import home from "@/views/home.vue"
import about from "@/views/about.vue"
import article from "@/views/article.vue"
const router = createRouter({
	history: createWebHistory(),
	scrollBehavior(to, from, savePosition) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(savePosition ?? { top: 0, behavior: "smooth" })
			}, 1000)
		})
	},
	routes: [
		{
			path: "/",
			component: () => import("@/views/home.vue"),
			name: "home",
			meta: {
				enterClass: "animate__animated animate__rotateInUpLeft",
				scrollEl: "#home",
			},
		},
		{
			path: "/about",
			component: () => import("@/views/about.vue"),
			name: "about",
			meta: {
				scrollEl: ".about",
			},
		},
		{
			path: "/article",
			component: article,
			name: "article",
		},
	],
})
export { router }
