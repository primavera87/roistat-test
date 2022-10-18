import { createApp } from 'vue';
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import BootstrapVue3 from 'bootstrap-vue-3';
import 'element-plus/dist/index.css'

createApp(App).use(store).use(router).use(ElementPlus).use(BootstrapVue3).mount('#app');
