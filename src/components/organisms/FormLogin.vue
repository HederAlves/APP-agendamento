<template>
  <div>
    <form @submit.prevent="salvar">
      <h1 class="text-center font-bold xl:mt-0">Faça seu login</h1>
      <label>Nome</label>
      <input
        class="inputPrimary"
        type="text"
        placeholder="Nome"
        v-model="user.name"
      />
      <label>Senha</label>
      <input
        class="inputPrimary"
        type="text"
        placeholder="********"
        v-model="user.password"
      />
      <button class="button">Entrar</button>
    </form>
  </div>
</template>
<script>
import Users from "../../services/users";

export default {
  name: "FormRegister",
  data() {
    return {
      user: {
        id: "",
        name: "",
        password: "",
      },
    };
  },
  methods: {
    salvar() {
      if (this.user) {
        Users.salvar(this.user)
          .then((_resposta) => {
            this.$router.push("/agendamento");
          })
          .catch((e) => {
            this.errors = e.response.data.errors;
          });
      } else {
        alert("Senha ou nome não localizados");
      }
    },
  },
};
</script>
<style scoped>
form {
  @apply flex flex-col gap-2;
}

.button {
  @apply w-[50vh] h-[6vh] font-bold rounded-md  pl-2 bg-emerald-400 my-5;
}
</style>
