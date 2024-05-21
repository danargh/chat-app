import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import LoginView from "@/views/LoginView.vue";
import RegisterView from "@/views/RegisterView.vue";
import DashboardView from "@/views/DashboardView.vue";

const router = createRouter({
   history: createWebHistory(import.meta.env.BASE_URL),
   routes: [
      {
         path: "/",
         name: "home",
         component: HomeView,
      },
      {
         path: "/register",
         name: "register",
         component: RegisterView,
      },
      {
         path: "/dashboard",
         name: "dashboard",
         component: DashboardView,
      },
      {
         path: "/login",
         name: "login",
         component: LoginView,
      },
      {
         path: "/about",
         name: "about",
         component: () => import("../views/AboutView.vue"),
      },
   ],
});

export default router;
