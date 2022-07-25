<template>
  <div class="mainContainer">
    <slot></slot>
    <div class="listbutton">
      <button @click="yes">Sim</button>
      <button @click="no">Não</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "Modal",
  methods: {
    no() {
      this.$router.push("/agendamento");
    },
    yes() {
      this.$router.push("/dependentes");
    },
  },
};
</script>
<style scoped>
.mainContainer {
  @apply flex flex-col items-center gap-4 absolute -mt-[65vh] sm:-mt-[55vh] -ml-[1.3vh] sm:ml-[2vh] bg-slate-900 text-white text-center p-5 rounded-lg h-auto;
}

.listbutton {
  @apply flex gap-2 mt-10;
}
button {
  @apply w-32 bg-emerald-400 text-black font-bold;
}
button:hover {
  @apply bg-white;
}
</style>
