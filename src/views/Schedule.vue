<template>
  <div class="flex flex-col mt-5 justify-center ml-1 gap-5 h-screen items-center sm:ml-0 sm:mt-0 sm:flex-row sm:justify-start sm:gap-20 md:gap-28 xl:gap-64">
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