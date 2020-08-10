import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'main',
    component: () => import(/* webpackChunkName: "about" */ '../views/main/Home.vue')
}
]

const router = new VueRouter({
    routes
})

export default router
