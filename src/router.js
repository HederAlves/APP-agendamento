import { createRouter, createWebHistory } from "vue-router";
import Schedule from './views/Schedule.vue'
import Register from './views/Register.vue'
import Dependentes from './views/Dependentes.vue'

 const routes = [{
    path: '/agendamento',
    name: 'schedule',
    component: Schedule
},
{
    path: '/cadastro',
    name: 'register',
    component: Register
},
{
    path: '/dependentes',
    name: 'dependentes',
    component: Dependentes
}]

const router = createRouter({ history: createWebHistory(), routes });

export default router;