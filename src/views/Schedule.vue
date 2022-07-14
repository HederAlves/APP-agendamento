<template>
  <div class="mainContainer">
    <h1 class="mt-8 text-center font-bold">Agendamento</h1>
    <IconLogo />
    <FormSchedule />
  </div>
</template>
<script>
import IconLogo from "../components/atoms/IconLogo.vue";
import FormSchedule from "../components/organisms/FormSchedule.vue";

export default {
  name: "Schedule",
  components: { IconLogo, FormSchedule },
};
</script>
<style>
.mainContainer {
  @apply flex flex-col h-screen items-center;
}
</style>
