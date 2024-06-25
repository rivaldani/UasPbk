import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { Quasar } from 'quasar';
import 'quasar/dist/quasar.css';

createApp(App)
  .use(router)
  .use(Quasar)
  .mount('#app');
