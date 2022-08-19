<template>
  <div>
    <Home></Home>
    <nuxt-link
      to="/job/home"
      class="
        mx-auto
        lg:mx-0
        hover:underline
        bg-white
        text-gray-800
        font-bold
        rounded-full
        my-6
        py-4
        px-8
        shadow-lg
      "
    >
      Go to Job Page
    </nuxt-link>
  </div>
</template>

<script>
import Home from "@/pages/job/home.vue";

export default {
  components: {
    Home,
  },
  name: "IndexPage",
  data() {
    return {};
  },
  mounted() {
    console.log(1);
  },
};
</script>
