import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        requireAuth: false,
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth === true) {
    alert("You must be authenticated");
  }
  next();
});

export default router;
