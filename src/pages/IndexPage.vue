<template>
  <q-page>
    <div>
      <div id="mymap" style="height: 500px"></div></div
  ></q-page>
</template>

<script setup>
import { onMounted } from "vue";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import { IRouter, IGeocoder, LineOptions } from "leaflet-routing-machine";

// Create Map
function initmap() {
  var map = L.map("mymap", {
    center: [51.505, -0.09],
    zoom: 13,
  });
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);
  L.Routing.control({
    waypoints: [
      L.latLng(-7.761428487552167, 110.3942887717749),
      L.latLng(-7.761715908131458, 110.40934551429152),
    ],
    routeWhileDragging: true,
  }).addTo(map);
}

onMounted(() => {
  initmap();
});
</script>
