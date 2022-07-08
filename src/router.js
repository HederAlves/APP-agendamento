import { createRouter, createWebHistory } from "vue-router";
import Schedule from './views/Schedule.vue'

 const routes = [{
    path: '/agendamento',
    name: 'schedule',
    component: Schedule
}]

const router = createRouter({ history: createWebHistory(), routes });

export default router;