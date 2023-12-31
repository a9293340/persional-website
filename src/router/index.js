import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/index.vue";
import About from "../views/About/index.vue";
import Portfolio from "../views/Portfolio/index.vue";
import Contact from "../views/Connect/index.vue";

const routes = [
	{
		path: "/",
		name: "home",
		component: Home,
	},
	{
		path: "/about",
		name: "about",
		component: About,
	},
	{
		path: "/portfolio",
		name: "portfolio",
		component: Portfolio,
	},
	{
		path: "/contact",
		name: "contact",
		component: Contact,
	},
	{
		path: "/:catchAll(.*)",
		redirect: "/",
	},
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
});

export default router;
