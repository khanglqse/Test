<template>
  <div id="preloader" v-if="isLoading">
    <div id="status">
      <img src="~/assets/css/images/header/loadinganimation.gif" />
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  mounted() {
    this.enableInterceptor();
  },
  data() {
    return {
      isLoading: false,
      axiosInterceptor: null,
    };
  },
  methods: {
    /**
     * Enable Interceptor
     * Time create: 09/04/2021
     */
    enableInterceptor() {
      this.axiosInterceptor = axios.interceptors.request.use(
        (config) => {
          this.isLoading = true;
          return config;
        },
        (error) => {
          this.isLoading = false;
          return Promise.reject(error);
        }
      );

      axios.interceptors.response.use(
        (response) => {
          this.isLoading = false;
          return response;
        },
        (error) => {
          this.isLoading = false;
          return Promise.reject(error);
        }
      );
    },

    /**
     * Disable Interceptor
     * Time create: 09/04/2021
     */
    disableInterceptor() {
      axios.interceptors.request.eject(this.axiosInterceptor);
    },
  },
};
</script>