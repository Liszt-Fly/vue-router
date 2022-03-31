import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
	history: createWebHistory(),

	routes: [
		{
			path: "/",
			component: () => import("@/views/home.vue"),
			name: "home",
			meta: { enterClass: "animate__animated animate__rotateInUpLeft" },
		},
		{
			path: "/about",
			component: () => import("@/views/about.vue"),
			name: "about",
		},
		{
			path: "/article",
			component: () => import("@/views/article.vue"),
			name: "article",
		},
	],
})
export { router }
