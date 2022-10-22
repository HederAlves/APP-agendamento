<template>
  <div
    class="flex flex-col justify-center gap-9 ml-1 h-screen items-center sm:ml-0 sm:mt-0 sm:flex-row sm:justify-start sm:gap-20 md:gap-28 xl:gap-64"
  >
    <ImageLoginRegister />
    <IconLogo />
    <FormLogin />
    <a href=""></a>
  </div>
</template>
<script>
import IconLogo from "../components/atoms/IconLogo.vue";
import FormLogin from "../components/organisms/FormLogin.vue";
import ImageLoginRegister from "../components/atoms/ImageLoginRegister.vue";

export default {
  name: "Login",
  components: { IconLogo, ImageLoginRegister, FormLogin }
};
</script>