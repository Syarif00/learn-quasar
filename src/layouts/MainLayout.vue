<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Quasar - Leaflet </q-toolbar-title>

        <div>Trial Quasar</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Features </q-item-label>

        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";

defineOptions({
  name: "MainLayout",
});

const linksList = [
  {
    title: "Default",
    caption: "",
    icon: "dashboard",
    link: "/",
  },
  {
    title: "Integrations",
    caption: "Integration Map",
    icon: "integration_instructions",
    link: "/integration",
  },
  {
    title: "Routing Services",
    caption: "Navigation",
    icon: "route",
    link: "/routing-services",
  },
  {
    title: "Marker Cluster",
    caption: "Cluster",
    icon: "workspaces",
    link: "/marker-cluster",
  },
  {
    title: "Form",
    caption: "Form Components",
    icon: "description",
    link: "/form",
  },
  {
    title: "CRUD",
    caption: "CRUD",
    icon: "file_copy",
    link: "/crud",
  },
];

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
