<template>
  <div class="mainContainer">
    <ImageSchedule />
    <IconLogo />
    <FormSchedule />
  </div>
</template>
<script>
import IconLogo from "../components/atoms/IconLogo.vue";
import FormSchedule from "../components/organisms/FormSchedule.vue";
import ImageSchedule from "../components/atoms/ImageSchedule.vue";

export default {
  name: "Schedule",
  components: { IconLogo, FormSchedule, ImageSchedule },
};
</script>
<style>
.mainContainer {
  @apply flex flex-col h-screen items-center;
}
</style>