<template>
  <q-page>
    <div>
      <div id="mymap" style="height: 100vh"></div></div
  ></q-page>
</template>

<script setup>
import { onMounted } from "vue";
import "leaflet/dist/leaflet.css";
import * as L from "leaflet";
import "leaflet.markercluster";

// data GeoJson
import datas from "../data/maps.js";

//  Map
function initmap() {
  var map = L.map("mymap", {
    center: [-7.761428487552167, 110.3942887717749],
    zoom: 13,
  });

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  var markers = L.markerClusterGroup();
  var marker = L.geoJSON(datas);

  markers.addLayer(marker);
  map.addLayer(markers);
}

onMounted(() => {
  initmap();
});
</script>
