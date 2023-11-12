import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from "@/views/Dashboard.vue";
import GridSystem from "@/views/GridSystem.vue";
import GridListPage from "@/views/GridListPage.vue";
import BreakpointsComponent from "@/views/BreakpointsComponent.vue";
import BreakpointsExample from "@/views/BreakpointsExample.vue";
import TypographyMain from "@/views/TypographyMain.vue";
import TableMain from "@/views/TableMain.vue";
import FormMain from "@/views/FormMain.vue";
import ButtonMain from "@/views/ButtonMain.vue";
import IconMain from "@/views/IconMain.vue";

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
    },
    {
        path: "/typographyMain",
        name: "TypographyMain",
        component: TypographyMain
    },
    {
        path: "/tableMain",
        name: "TableMain",
        component: TableMain
    },
    {
        path: "/formMain",
        name: "FormMain",
        component: FormMain
    },
    {
        path: "/buttonMain",
        name: "ButtonMain",
        component: ButtonMain
    },
    {
        path: "/iconMain",
        name: "IconMain",
        component: IconMain
    }
]

const router = new VueRouter({
    mode : 'history',
    routes
})

export default router;