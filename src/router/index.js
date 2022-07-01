import { createRouter, createWebHistory } from "vue-router";
import CatalogoView from "../views/CatalogoView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/Catalogo",
      name: "Catalogo",
      component: CatalogoView,
    },
    {
      path: "/Autores",
      name: "Autores",
      // route level code-splitting
      // this generates a separate chunk (Autores.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AutoresView.vue"),
    },
  ],
});

export default router;
