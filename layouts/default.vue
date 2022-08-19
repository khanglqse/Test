<template>
  <div class="leading-normal tracking-normal gradient flex flex-col min-h-screen">
    <Header />
    <div class="flex shrink-0 grow basis-auto mx-auto">
      <nuxt />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default {
  components: {
    Header,
    Footer,
  }
}
</script>

<style>
@import '~/assets/css/campain/animate.css';
@import '~/assets/css/campain/style.css';
@import '~/assets/css/campain/bootstrap.css';
@import '~/assets/css/campain/font-awesome.css';
@import '~/assets/css/campain/fonts.css';
/* @import '~/assets/css/campain/reset.css'; */
/* @import '~/assets/css/campain/owl.carousel.css';
@import '~/assets/css/campain/owl.theme.default.css'; */
@import '~/assets/css/campain/flaticon.css';
@import '~/assets/css/campain/responsive.css';

/* html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

.gradient {
  background: linear-gradient(90deg, #d53369 0%, #daae51 100%);
} */
</style>