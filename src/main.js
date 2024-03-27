import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js';
import axios from 'axios'
window.axios = axios;
import 'bootstrap/dist/css/bootstrap.min.css';
import "./static/fontawesome-free-6.5.1-web/css/all.min.css";

const app = createApp(App)
app.use(router)
app.mount('#app')
