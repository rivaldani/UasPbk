<template>
    <q-page class="q-pa-md">
      <q-list bordered>
        <q-item-label header class="text-h6 q-my-sm">Daftar Tugas</q-item-label>
        <q-item v-for="task in tasks" :key="task.name" clickable @click="openInNewTab(task.path)">
          <q-item-section>{{ task.name }}</q-item-section>
        </q-item>
      </q-list>
    </q-page>
  </template>
  
  <script>
  export default {
    name: "TaskList",
    data() {
      return {
        tasks: [
          { name: "Tugas 1", path: "https://rifki-project-cv.netlify.app/?authuser=0&hl=id" },
          { name: "Tugas 2", path: "https://tugas2-prakpbk-tau.vercel.app/?authuser=0&hl=id" },
          { name: "Tugas 3", path: "https://tugas3-prak-pbk-rifki.vercel.app/?authuser=0&hl=id" },
          { name: "Tugas 4", path: "https://tugas4-prakpbk.vercel.app/?authuser=0&hl=id" },
          { name: "Tugas 5", path: "https://tugas5-prakpbk.vercel.app/?authuser=0&hl=id" },
          { name: "Tugas 6", path: "https://tugas6-prakpbk.vercel.app/?authuser=0&hl=id" },
          { name: "Tugas 7", path: "https://tugas-7prakpbk.vercel.app/?authuser=0&hl=id" }
        ]
      };
    },
    methods: {
      openInNewTab(url) {
        window.open(url, "_blank");
      }
    }
  };
  </script>
  