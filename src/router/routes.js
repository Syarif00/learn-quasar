const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      {
        path: "integration",
        component: () => import("pages/IntegrationPage.vue"),
      },
      {
        path: "routing-services",
        component: () => import("pages/RoutingPage.vue"),
      },
      {
        path: "marker-cluster",
        component: () => import("pages/MarkerCluster.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",

    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
