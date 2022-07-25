<template>
  <div
    class="flex flex-col mt-5 justify-center ml-1 gap-5 h-screen items-center sm:ml-0 sm:mt-0 sm:flex-row sm:justify-start sm:gap-20 md:gap-28 xl:gap-64"
  >
    <ImageLoginRegister />
    <IconLogo />
    <FormDependents />
  </div>
</template>
<script>
import FormDependents from "../components/organisms/FormDependents.vue";
import ImageLoginRegister from "../components/atoms/ImageLoginRegister.vue";
import IconLogo from "../components/atoms/IconLogo.vue";

export default {
  name: "Dependents",
  components: { FormDependents, ImageLoginRegister, IconLogo },
};
</script>
