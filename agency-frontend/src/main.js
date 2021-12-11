import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ClickOutside from './common/ClickOutside';
import VueSplide from '@splidejs/vue-splide';
import VueGoogleMaps from '@fawmi/vue-google-maps';
import mdiVue from 'mdi-vue/v3';
import * as mdijs from '@mdi/js';

import '@splidejs/splide/dist/css/splide.min.css';
import './assets/css/vars.css';
import './assets/css/reset.css';
import './assets/css/font.css';
import './assets/css/style.css';

const app = createApp(App);
app.use(router);
app.use(store);
app.use(VueSplide);
app.use(mdiVue, { icons: mdijs });
app.use(VueGoogleMaps, {
  load: { key: process.env.VUE_APP_GMAP_API_KEY || '' },
});
app.directive('click-outside', ClickOutside);
app.mount('#app');
