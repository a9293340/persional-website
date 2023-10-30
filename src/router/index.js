import { createRouter, createWebHistory } from "vue-router";

const routes = [
	{
		path: "/",
		name: "home",
		component: () => import("../views/index.vue"),
	},
	{
		path: "/about",
		name: "about",
		component: () => import("../views/About/index.vue"),
	},
	{
		path: "/portfolio",
		name: "portfolio",
		component: () => import("../views/Portfolio/index.vue"),
	},
	{
		path: "/contact",
		name: "contact",
		component: () => import("../views/Contact/index.vue"),
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
