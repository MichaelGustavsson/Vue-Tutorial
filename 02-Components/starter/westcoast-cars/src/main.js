import { createApp } from 'vue';

import App from './App.vue';
import VehicleList from './components/VehicleList.vue';
const app = createApp(App);

app.component('vehicle-list', VehicleList);

app.mount('#app');
