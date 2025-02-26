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
      component: () => import("@/pages/BoardDetail.vue"),
     },
     { 
      path: '/board/register', 
      component: () => import("@/pages/BoardRegister.vue"),
     },
  ],
});
export default router;
