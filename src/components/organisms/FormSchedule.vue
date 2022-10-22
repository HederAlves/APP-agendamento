<template>
  <div>
    <form @submit.prevent="salvar">
    <h1 class="my-2 text-center font-bold">Agendamento</h1>
      <ul>
        <li>
          <label>Selecione o Medico</label>
          <select name="name" id="name" v-model="schedule.name">
            <option
              v-for="doctor of doctors"
              :key="doctor.id"
              :value="doctor.name"
            >
              {{ doctor.name }}
            </option>
          </select>
        </li>
        <li>
          <label>Selecione o Convênio</label>
          <select name="name" id="name" v-model="schedule.health_insurance">
            <option
              v-for="doctor of doctors"
              :key="doctor.id"
              :value="doctor.health_insurance"
            >
              {{ doctor.health_insurance }}
            </option>
          </select>
        </li>
        <li>
          <label>Selecione a Data</label>
          <select name="name" id="name" v-model="schedule.data_query">
            <option
              v-for="doctor of doctors"
              :key="doctor.id"
              :value="doctor.data_query"
            >
              {{ doctor.data_query }}
            </option>
          </select>
        </li>
        <li>
          <label>Selecione o Horário de Atendimento</label>
          <select name="name" id="name" v-model="schedule.hours">
            <option
              v-for="doctor of doctors"
              :key="doctor.id"
              :value="doctor.hours"
            >
              {{ doctor.hours }}
            </option>
          </select>
        </li>
        <li>
          <label>Selecione o Medico</label>
          <select name="name" id="name" v-model="schedule.price">
            <option
              v-for="doctor of doctors"
              :key="doctor.id"
              :value="doctor.price"
            >
              {{ doctor.price }}
            </option>
          </select>
        </li>
      </ul>
      <button class="button">Agendar</button>
    </form>
  </div>
</template>
<script>
import Doctor from "../../services/doctors";
import Schedule from "../../services/schedule";

export default {
  name: "FormSchedule",
  data() {
    return {
      doctors: [],
      schedule: {
        id: null,
        name: null,
        health_insurance: null,
        data_query: null,
        hours: null,
        price: null,
      },
    };
  },
  mounted() {
    this.listar();
  },
  methods: {
    listar() {
      Doctor.listar()
        .then((response) => {
          
          console.log(response.data);
          this.doctors = response.data;
          this.name = response;
          this.health_insurance = response;
          this.data_query = response;
          this.hours = response;
          this.price = response;
          this.users_query = response;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    salvar() {
      if (!this.schedule.id) {
        Schedule.salvar(this.schedule)
          .then((_resposta) => {
            this.schedule = {};
            alert("Agendado com sucesso!");
          })
          .catch((e) => {
            this.errors = e.response.data.errors;
          });
      }
    },
  },
};
</script>
<style>
li {
  @apply flex flex-col;
}
label {
  @apply mt-3 mb-1 ml-1;
}
select {
  @apply w-[50vh] border-4 rounded-md pl-2;
}

.button {
  @apply w-[50vh] h-[6vh] font-bold rounded-md  pl-2 bg-emerald-400 mt-6 mb-12;
}
</style>
