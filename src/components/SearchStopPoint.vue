<template>
  <div class="row">
    <div class="col-4 q-pa-md" style="min-height: 92vh">
      <div class="title">
        <p class="text-weight-bold text-h5">Stop Point Analysis</p>
        <p class="text-grey-6">
          Complete the following details to generate result.
        </p>
      </div>
      <div class="column q-gutter-md q-my-lg">
        <q-input filled v-model="text" placeholder="By Agreement" />
        <q-select
          v-model="model"
          :options="options"
          label="Standard"
          outlined
        />
        <div class="row items-center justify-between">
          <div class="col">
            <q-input outlined v-model="text" type="date" label="End Date" />
          </div>
          <div class="col-1 text-center"><q-icon name="arrow_right_alt" /></div>
          <div class="col">
            <q-input outlined v-model="text" type="date" label="Start Date" />
          </div>
        </div>
        <q-btn
          type="submit"
          color="primary"
          label="Search"
          @click="toggleGenerate()"
        />

        {{ isGenerated }}
      </div>
    </div>
    <div class="col right-side">
      <div v-if="isGenerated" ref="mymapp" style="height: 92vh"></div>
      <div
        v-else
        class="column items-center justify-center"
        style="height: 92vh"
      >
        <img src="/map.png" width="200" alt="" />
        <p class="text-weight-bold text-h6 q-mt-lg">
          Your generated report will be displayed here
        </p>
        <p class="text-grey-7">
          Fill the available options and click generate.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, watch } from "vue";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const isGenerated = ref(true);

//  Map
const mymapp = ref();
var map;

function initmap() {
  var container = L.DomUtil.get(mymapp.value);
  if (container != null) {
    container._leaflet_id = null;
  }
  map = L.map(mymapp.value, {
    center: [-7.761428487552167, 110.3942887717749],
    zoom: 13,
  });
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);
}

const options = ref(["Option 1", "Option 2", "Option 3"]);

const toggleGenerate = () => {
  isGenerated.value = !isGenerated.value;
  if (mymapp.value) {
    initmap();
  }
};

onMounted(() => {
  initmap();
});
</script>

<style>
.title {
  line-height: 0.2;
}
</style>
