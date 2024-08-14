<template>
  <q-page class="q-pa-md">
    <FullCalendar :options="calendarOptions" />
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";

const calendarOptions = ref({
  plugins: [dayGridPlugin],
  initialView: "dayGridMonth",
  headerToolbar: {
    start: "title",
    left: "prev,next today",
    center: "title",
    right: "dayGridMonth, dayGridWeek, dayGridDay",
  },
  // height: "1000px",
  aspectRatio: 1,

  events: [
    { title: "Event 1", date: "2024-08-15" },
    { title: "Event 2", date: "2024-08-20" },
    { title: "Event 3", date: "2024-08-24" },
    { title: "Event 4", date: "2024-08-20" },
  ],
});
</script>

<style scoped>
/* Tambahkan gaya jika diperlukan */
</style>
