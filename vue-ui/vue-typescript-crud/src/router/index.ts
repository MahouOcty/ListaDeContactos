import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    alias: "/contacts",
    name: 'contacts',
    component: () => import("../components/ContactsList.vue")
  },
  {
    path: "/contacts/:id",
    name: 'contact-details',
    component: () => import("../components/ContactDetails.vue")
  },
  {
    path: '/add',
    name: "add",
    component: () => import("../components/AddContact.vue")
  }
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
