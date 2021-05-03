import {createRouter, createWebHashHistory} from "vue-router";

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import ('../views/login/login.vue'),
  },
  {
    path: '/main',
    name: 'main',
    component: () => import ('../views/login/login.vue'),
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;