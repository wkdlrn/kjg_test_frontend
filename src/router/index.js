import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("@/pages/BoardPage.vue"),
    },
    { 
      path: '/board/:idx', 
      component: () => import("@/pages/BoardDetail.vue") },
  ],
});
export default router;
