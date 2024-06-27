<template>
  <q-page>
    <div>
      <div id="mymap" style="height: 100vh"></div></div
  ></q-page>
</template>

<script setup>
import { onMounted } from "vue";
import "leaflet/dist/leaflet.css";
import L, { marker } from "leaflet";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import { IRouter, IGeocoder, LineOptions } from "leaflet-routing-machine";

//  Map
function initmap() {
  var map = L.map("mymap", {
    center: [51.505, -0.09],
    zoom: 15,
  }).setView([-7.761428487552167, 110.3942887717749]);

  var marker = L.marker([-7.761428487552167, 110.3942887717749]).addTo(map);

  L.tileLayer("https://{s}.tile.osm.org/{z}/{x}/{y}.png", {
    attribution: "OSM",
  }).addTo(map);

  map.on("click", function (e) {
    var secondMarker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(map);

    L.Routing.control({
      waypoints: [
        L.latLng(-7.761428487552167, 110.3942887717749),
        L.latLng(e.latlng.lat, e.latlng.lng),
      ],
    })
      .on("routesfound", function (e) {
        e.routes[0].coordinates.forEach(function (coord, index) {
          setTimeout(() => {
            marker.setLatLng([coord.lat, coord.lng]);
          }, 200 * index);
        });
      })

      .addTo(map);
  });
}

onMounted(() => {
  initmap();
});
</script>
