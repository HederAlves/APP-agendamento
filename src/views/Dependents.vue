<template>
  <div class="flex justify-around h-screen items-center">
    <form @submit.prevent="salvar">
      <h1 class="text-center mb-2">Cadastro de dependentes</h1>
      <label>Nome</label>
      <input
        class="w-[300px] border-4 rounded-md pl-2"
        type="text"
        placeholder="Nome"
        v-model="user.name"
      />
      <label>Data de Nascimento</label>
      <input
        class="w-[300px] border-4 rounded-md pl-2"
        type="text"
        placeholder="29/05/1992"
        v-model="user.data_birth"
      />
      <label>Sexo</label>
      <input
        class="w-[300px] border-4 rounded-md pl-2"
        type="text"
        placeholder="Masculino"
        v-model="user.sex"
      />
      <label>Telefone</label>
      <input
        class="w-[300px] border-4 rounded-md pl-2"
        type="text"
        placeholder="(99)9.9999-9999"
        v-model="user.phone"
      />
      <label>Nacionalidade</label>
      <input
        class="w-[300px] border-4 rounded-md pl-2"
        type="text"
        placeholder="Brasileiro"
        v-model="user.nationality"
      />
      <label>CPF</label>
      <input
        class="w-[300px] border-4 rounded-md pl-2"
        type="text"
        placeholder="000.000.000-00"
        v-model="user.CPF"
      />
      <button>salvar</button>
    </form>
    <div
      class="flex flex-col items-center gap-4 absolute z-30 bg-slate-900 text-white p-10 m-10 rounded-lg"
      v-if="visible"
    >
      <h1>Cadastrado com sucesso!</h1>
      <p>Deseja cadastrar mais dependentes?</p>
      <button @click="yes">Sim</button>
      <button @click="no">Não</button>
    </div>
  </div>
</template>
<script>
import Users from "../services/users";

export default {
  name: "Schedule",
  data() {
    return {
      visible: false,
      user: {
        id: "",
        name: null,
        data_birth: null,
        sex: null,
        phone: null,
        nationality: null,
        CPF: null,
      },
    };
  },
  methods: {
    salvar() {
      if (!this.user.id) {
        Users.salvar(this.user)
          .then((_resposta) => {
            this.user = {};
            this.visible = true;
          })
          .catch((e) => {
            this.errors = e.response.data.errors;
          });
      }
    },
    no() {
      this.$router.push("/agendamento");
    },
    yes() {
      this.$router.push("/dependentes");
    },
  },
};
</script>
<style>
form {
  @apply flex flex-col gap-2;
}
</style>
