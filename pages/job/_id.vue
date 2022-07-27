<template>
  <div>
    <div class="pt-24">hello {{ this.id }}</div>
    <button class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg" @click="setName('khang1')">Set name to Khang</button>
    <button class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg" @click="setNameWithUpperCase('khang1')">
      Set name uppercaseto Khang
    </button>
    <button class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg" @click="fetchName(1)">Fetch name from API</button>
    <nuxt-link to="/" class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg">Go to home</nuxt-link>
    <p>This is data u can use through application in store {{ user }}</p>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  data() {
    return {
      id: this.$route.params.id,
    };
  },
  computed: {
    // ...mapState(['name']),
    ...mapState(["user"]),
  },
  methods: {
    ...mapActions({
      setNameWithUpperCase: "user/setNameWithUpperCase",
      setName: "user/setName",
      fetchName: "user/fetchName"
    }),
    ...mapMutations({
      setName: "user/setName",
    }),
   
  },
  async mounted() {
    // const data = await this.$axios.get(`/job/${this.id}`).catch(e => console.log(e))
  },
};
</script>
