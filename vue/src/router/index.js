import {
	createRouter,
	createWebHistory,
	createWebHashHistory,
} from "vue-router"
import Home from "@/views/Home.vue"
import Article from "@/views/front/article/ListArticle.vue"
import Show from "@/views/front/article/Show.vue"
import UserShow from "@/views/front/user/Show.vue"
import UserList from "@/views/front/user/List.vue"
import NotFound from "@/views/common/NotFound.vue"
import UserNavigation from "@/components/UserNavigation.vue"
import Front from "@/layout/Front.vue"
import Member from "@/layout/Member.vue"
import Email from "@/views/Member/Email.vue"
import Mobile from "@/views/Member/Mobile.vue"
const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: "/",
			component: Front,
			children: [
				{
					path: "/home",
					name: "Home",
					component: Home,
					meta: { class: "home" },
				},
				{
					path: "articles",
					name: "Article",
					component: Article,
					meta: { class: "article" },
				},
				{
					path: "/articles/show/:id",
					name: "Show",
					component: Show,
					// alias: "/:id(\\d+).html",
				},
			],
		},

		{
			path: "/user",
			name: "User",
			component: UserList,
		},
		{
			path: "/show-user/:id",
			name: "User-Show",
			component: UserShow,
		},
		{
			path: "/:any(.*)",
			component: NotFound,
		},
		{
			path: "/Member",
			component: Member,
			name: "Member",
			redirect: { path: "/Member/mobile" },
			children: [
				{
					path: "email",
					component: Email,
					name: "Email",
				},
				{
					path: "mobile",
					component: Mobile,
					name: "Mobile",
				},
			],
		},
	],
})

export default router
