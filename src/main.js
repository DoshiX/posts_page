import { createApp } from 'vue';
import App from './App.vue';

import * as Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import store from '@/store';

import './assets/scss/styles.scss';

import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/aura-light-green/theme.css';

const app = createApp(App);
const appVueAxios = Vue.createApp();

appVueAxios.use(VueAxios, axios);
app.provide('axios', app.config.globalProperties.axios)

app.use(PrimeVue)
    .use(store)
    .mount('#app');