<template>
    <q-layout view="hHh lpR fFf">
      <q-header class="bg-primary text-white">
        <q-toolbar>
          <q-toolbar-title>
            <q-avatar icon="" />
            WeatherWidget
          </q-toolbar-title>
          <q-btn flat icon="" label="TUGAS RIVAL" />
        </q-toolbar>
      </q-header>
  
      <q-drawer show-if-above v-model="leftDrawerOpen" side="left" overlay>
        <q-list>
          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Home</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-drawer>
  
      <q-page-container>
        <router-view />
      </q-page-container>
  
      <q-footer class="bg-grey-9 text-white">
        <q-toolbar>
          <q-toolbar-title>
            © Muhammad Rivaldani.UAS PRAKTIKUM
          </q-toolbar-title>
        </q-toolbar>
      </q-footer>
    </q-layout>
  </template>
  
  <script>
  export default {
    name: 'MainLayout',
    data() {
      return {
        leftDrawerOpen: false,
      };
    },
  };
  </script>
  
  <style>
  /* Tambahkan gaya CSS di sini */
  </style>
  