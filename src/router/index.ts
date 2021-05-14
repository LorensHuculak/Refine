import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import List from "@/views/List.vue";
import Create from "@/views/Create.vue";
import Docs from "@/views/Docs.vue";
const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/create",
        name: "Create",
        component: Create,
    },
    {
        path: "/list/:address",
        name: "list",
        component: List,
    },
    {
        path: "/docs",
        name: "Docs",
        component: Docs,
    },
    {
        path: "/:catchAll(.*)",
        component: Home,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
