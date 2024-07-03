<template>
  <q-page padding>
    <div style="width: 50%">
      <q-form action="/url" method="POST" class="q-gutter-md">
        <h3>QInput</h3>
        <q-input name="text" v-model="text" label="Label" />

        <h3>QSelect</h3>
        <q-select
          name="select"
          v-model="list"
          :options="['Kentang', 'Semangka', 'Jeruk']"
          label="Choose your type ..."
        />
        <h3>QBtnToggle</h3>
        <q-btn-toggle
          name="toggle"
          v-model="list"
          :options="[
            { label: 'Kentang', value: 'Kentang' },
            { label: 'Semangka', value: 'Semangka' },
            { label: 'Jeruk', value: 'Jeruk' },
          ]"
        />

        <h3>QRadio</h3>
        <q-radio name="radio1" v-model="list" val="Kentang" label="Kentang" />
        <q-radio name="radio2" v-model="list" val="Semangka" label="Semangka" />
        <q-radio name="radio3" v-model="list" val="Jeruk" label="Jeruk" />

        <h3>QCheckbox</h3>
        <q-checkbox
          name="checkbox"
          right-label
          v-model="selectedOption"
          label="Orange"
        />

        <h3>QToggle</h3>
        <q-toggle name="toggle" v-model="selectedOption" color="green" />

        <h3>QSlider</h3>
        <q-slider
          name="slider"
          v-model="distance"
          :min="0"
          :max="100"
          label
          :step="2"
          color="green"
        />

        <h3>QRange</h3>
        <q-range name="range" v-model="range" label color="green" />

        <h3>QFile</h3>
        <q-file name="file" v-model="file"> </q-file>

        <h3>QTime</h3>
        <q-time name="time" v-model="time" with-seconds />

        <h3>QDate</h3>
        <q-date name="date" v-model="date" landscape minimal />

        <h3>Submit Button</h3>
        <q-btn color="primary" type="submit" label="Submit" />
      </q-form>
    </div>

    <q-page-sticky position="right" style="width: 50%">
      <q-card class="my-card">
        <q-card-section>
          <pre>{{ $data }}</pre>
        </q-card-section>
        <q-card-actions align="center">
          <q-btn label="logger" @click="logger($data)" />
        </q-card-actions>
      </q-card>
    </q-page-sticky>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      text: "Agus",
      list: null,
      selectedOption: null,
      isHuman: false,
      distance: 0,
      range: {
        min: 10,
        max: 20,
      },
      file: null,
      time: null,
      date: null,
    };
  },
  methods: {
    logger(...params) {
      console.log(...params);
    },
  },
};
</script>
