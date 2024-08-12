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
      {
        path: "form",
        component: () => import("pages/FormPage.vue"),
      },
      {
        path: "crud",
        component: () => import("pages/CRUD.vue"),
      },
      {
        path: "stop-point-analysis",
        component: () => import("pages/StopPoint.vue"),
      },
      {
        path: "pinia",
        component: () => import("pages/PiniaPage.vue"),
      },
      {
        path: "calendar",
        component: () => import("pages/FullCalendar.vue"),
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
