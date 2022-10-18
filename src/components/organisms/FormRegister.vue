<template>
  <div>
    <form @submit.prevent="salvar">
      <h1 class="text-center font-bold xl:mt-0">Faça seu cadastro</h1>
      <label>Nome</label>
      <input
        class="inputPrimary"
        type="text"
        placeholder="Nome"
        v-model="user.name"
      />
      <label>Data de Nascimento</label>
      <input
        class="inputPrimary"
        type="text"
        placeholder="29/05/1992"
        v-model="user.data_birth"
      />
      <label>Sexo</label>
      <input
        class="inputPrimary"
        type="text"
        placeholder="Masculino"
        v-model="user.sex"
      />
      <label>Telefone</label>
      <input
        class="inputPrimary"
        type="text"
        placeholder="(99)9.9999-9999"
        v-model="user.phone"
      />
      <label>Nacionalidade</label>
      <input
        class="inputPrimary"
        type="text"
        placeholder="Brasileiro"
        v-model="user.nationality"
      />
      <label>CPF</label>
      <input
        class="inputPrimary"
        type="text"
        placeholder="000.000.000-00"
        v-model="user.CPF"
      />
      <button class="button">salvar</button>
    </form>
    <Modal v-if="visible"
      ><h1>Cadastrado com sucesso!</h1>
      <p>Deseja cadastrar dependentes?</p></Modal
    >
  </div>
</template>
<script>
import Users from "../../services/users";
import Modal from "../atoms/Modal.vue";

export default {
  name: "FormRegister",
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
  },
  components: { Modal },
};
</script>
<style scoped>
form {
  @apply flex flex-col;
}
label {
  @apply mt-3 mb-1 ml-1;
}
.button {
  @apply w-[50vh] h-[6vh] font-bold rounded-md  pl-2 bg-emerald-400 my-5;
}
</style>
