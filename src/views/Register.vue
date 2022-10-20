<template>
  <div
    class="flex flex-col mt-32 justify-center ml-1 gap-10 h-screen items-center sm:ml-0 sm:mt-0 sm:flex-row sm:justify-start sm:gap-20 md:gap-28 xl:gap-64"
  >
    <ImageLoginRegister />
    <IconLogo />
    <FormRegister />
  </div>
</template>
<script>
import IconLogo from "../components/atoms/IconLogo.vue";
import FormRegister from "../components/organisms/FormRegister.vue";
import ImageLoginRegister from "../components/atoms/ImageLoginRegister.vue";

export default {
  name: "Schedule",
  components: { FormRegister, IconLogo, ImageLoginRegister },
};
</script>
