export default [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    component: () => import("../views/home/index.vue"),
  },
  {
    path: "/404",
    component: () => import("../views/error/404.vue"),
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/404",
  },
];
