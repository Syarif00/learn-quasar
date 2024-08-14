<template>
  <div>
    <h1>Screenshot Capture</h1>
    <form @submit.prevent="captureScreenshot">
      <div>
        <label for="url">URL:</label>
        <input type="text" v-model="url" placeholder="Enter URL" required />
      </div>
      <div>
        <label for="scrollStep">Scroll Step (px):</label>
        <input type="number" v-model.number="scrollStep" placeholder="100" />
      </div>
      <div>
        <label for="scrollDelay">Scroll Delay (ms):</label>
        <input type="number" v-model.number="scrollDelay" placeholder="100" />
      </div>
      <button type="submit">Capture Screenshot</button>
    </form>
    <div v-if="screenshotUrl">
      <h2>Screenshot</h2>
      <img :src="screenshotUrl" alt="Screenshot" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const url = ref("");
const scrollStep = ref(100);
const scrollDelay = ref(100);
const screenshotUrl = ref("");

const captureScreenshot = async () => {
  try {
    const response = await fetch("http://localhost:3000/screenshot", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url: url.value,
        scrollStep: scrollStep.value,
        scrollDelay: scrollDelay.value,
      }),
    });

    if (response.ok) {
      const blob = await response.blob();
      screenshotUrl.value = URL.createObjectURL(blob);
    } else {
      console.error("Error:", response.statusText);
    }
  } catch (error) {
    console.error("Error:", error);
  }
};
</script>

<style>
/* Add some styles if needed */
</style>
