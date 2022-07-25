import { createRouter, createWebHistory } from "vue-router";
import Dependents from "./views/Dependents.vue";
import Schedule from "./views/Schedule.vue";
import Register from "./views/Register.vue";
import Login from "./views/Login.vue";

const routes = [
  {
    path: "/",
    name: "login",
    component: Login,
  },

  {
    path: "/agendamento",
    name: "schedule",
    component: Schedule,
  },
  {
    path: "/cadastro",
    name: "register",
    component: Register,
  },
  {
    path: "/dependentes",
    name: "dependents",
    component: Dependents,
  },
];

const router = createRouter({ history: createWebHistory(), routes });

export default router;
