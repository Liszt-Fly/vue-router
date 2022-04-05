export const routes = [
	{
		path: "/about",
		name: "about",
		meta: { title: "关于我们", permissions: ["about"], isMenu: true },
		component: () => import("@/views/about.vue"),
	},
	{
		path: "/article",
		name: "article",
		meta: { title: "文章", permissions: ["articles"] },
		component: () => import("@/views/404.vue"),
	},
]
