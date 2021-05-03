import {createRouter, createWebHashHistory} from "vue-router";

const routes = [
  {
    path: "/",
    name: "Login",
    component: () => import ("../views/login/login.vue"),
  },
  {
    path: "/home",
    name: "Home",
    component: () => import ("../views/home.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import ("../views/about.vue"),
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;