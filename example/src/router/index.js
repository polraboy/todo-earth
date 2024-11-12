import { createRouter, createWebHistory } from "vue-router";
import Todos from "../views/Todos.vue";
import Home from "../views/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/todos",
      name: "todos",
      component: Todos,
    },
  ],
});

export default router;
