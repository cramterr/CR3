import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Edit from '../views/Edit.vue'
import Info from '../views/Info.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
  path: '/edit',
  name: 'Edit List',
  component: Edit
  },
  {
  path: '/info',
  name: 'Console Info',
  component: Info
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
