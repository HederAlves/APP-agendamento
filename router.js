import { createRouter, createWebHistory } from "vue-router";
import Scheduling from './views/Scheduling.vue'

 const routes = [{
    path: '/',
    name: 'scheduling',
    component: Scheduling
}]

const router = createRouter({ history: createWebHistory(), routes });

export default router;