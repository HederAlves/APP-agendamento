<template>
  <div class="flex justify-around h-screen items-center">
    <form @submit.prevent="salvar">
      <h1 class="text-center mb-2">Agendamento</h1>
      <ul>
        <li>
          <label for="">Selecione o Medico</label>
          <select
            class="w-[300px] border-4 rounded-md pl-2"
            name="name"
            id="name"
            v-model="schedule.name"
          >
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
          <label for="">Selecione o Convênio</label>
          <select
            class="w-[300px] border-4 rounded-md pl-2"
            name="name"
            id="name"
            v-model="schedule.health_insurance"
          >
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
          <label for="">Selecione a Data</label>
          <select
            class="w-[300px] border-4 rounded-md pl-2"
            name="name"
            id="name"
            v-model="schedule.data_query"
          >
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
          <label for="">Selecione o Horário de Atendimento</label>
          <select
            class="w-[300px] border-4 rounded-md pl-2"
            name="name"
            id="name"
            v-model="schedule.hours"
          >
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
          <label for="">Selecione o Medico</label>
          <select
            class="w-[300px] border-4 rounded-md pl-2"
            name="name"
            id="name"
            v-model="schedule.price"
          >
            <option
              v-for="doctor of doctors"
              :key="doctor.id"
              :value="doctor.price"
            >
              {{ doctor.price }}
            </option>
          </select>
        </li>
        <li>
          <label for="">Selecione para quem é a consulta</label>
          <select
            class="w-[300px] border-4 rounded-md pl-2"
            name="name"
            id="name"
            v-model="schedule.users_query"
          >
            <option
              v-for="doctor of doctors"
              :key="doctor.id"
              :value="doctor.users_query.name_dependente"
            >
              {{ doctor.users_query.name_dependente }}
            </option>
          </select>
        </li>
      </ul>
      <button>salvar</button>
    </form>
  </div>
</template>
<script>
import Doctor from "../services/doctors";
import Schedule from "../services/schedule";

export default {
  name: "Schedule",
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
          this.doctors = response.data;
          console.log(response.data);

          this.names = response;
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
  @apply flex flex-col gap-1;
}
</style>
