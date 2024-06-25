<template>
    <q-page class="flex flex-center bg-page">
      <weather-widget />
    </q-page>
  </template>
  
  <script>
  import WeatherWidget from '../components/WeatherWidget.vue';
  
  export default {
    components: {
      WeatherWidget,
    },
  };
  </script>
  
  <style>
  .bg-page {
    background: linear-gradient(135deg, #0dc9f8, #0e90b8);
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  </style>
  