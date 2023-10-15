import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from "@/views/Dashboard.vue";
import GridSystem from "@/views/GridSystem.vue";
import GridListPage from "@/views/GridListPage.vue";
import BreakpointsComponent from "@/views/BreakpointsComponent.vue";
import BreakpointsExample from "@/views/BreakpointsExample.vue";

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        name: 'Dashboard',
        component : Dashboard
    },
    {
        path: "/grid-system",
        name: "GridSystem",
        component: GridSystem
    },
    {
        path: "/grid-list-page",
        name: "GridListPage",
        component: GridListPage
    },
    {
        path: "/breakpointsComponent",
        name: "BreakpointsComponent",
        component: BreakpointsComponent
    },
    {
        path: "/BreakpointsExample",
        name: "BreakpointsExample",
        component: BreakpointsExample
    }
]

const router = new VueRouter({
    mode : 'history',
    routes
})

export default router;