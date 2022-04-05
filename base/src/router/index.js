import Home from "../views/Home.vue"
import About from "../views/About.vue"
import { ref } from "vue"
const path = ref(window.location.path)
export let router = {
	routes: [
		{
			path: "/",
			component: Home,
		},
		{
			path: "/About",
			component: About,
		},
	],
}
export { path }
