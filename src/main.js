import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './styles/index.scss';

import svgIcon from '@/assets/svg/index';

const app = createApp(App);

app.use(svgIcon);

app.use(store).use(router).mount('#app');
