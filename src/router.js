import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./pages/HomePage.vue";
import BlogPage from "./pages/BlogPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/blog",
      name: "blog",
      component: BlogPage,
    },
  ],
});
export { router };
