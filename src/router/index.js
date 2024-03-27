import { createRouter, createWebHistory} from 'vue-router';
import admin from './admin.js'

var routes = [...admin]

var router = createRouter({
   history: createWebHistory(),
   routes
})

export default router;

