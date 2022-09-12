<template>
  <div
    class="leading-normal tracking-normal gradient flex flex-col min-h-screen"
  >
    <Header />
    <div>
      <Loading></Loading>
      <!-- class="flex shrink-0 grow basis-auto mx-auto" -->
      <nuxt />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Loading from "../components/Loading.vue";

export default {
  components: {
    Header,
    Footer,
    Loading,
  },
};
</script>

<style>
@import "~/assets/css/campain/animate.css";
@import "~/assets/css/campain/bootstrap.css";
@import "~/assets/css/campain/font-awesome.css";
@import "~/assets/css/campain/fonts.css";
@import "~/assets/css/campain/reset.css";
@import "~/assets/css/campain/flaticon.css";
@import "~/assets/css/campain/responsive.css";
</style>