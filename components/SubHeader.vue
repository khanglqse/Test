<template>
  <div>
    <!-- jp Tittle Wrapper Start -->
    <div class="jp_tittle_main_wrapper">
      <div class="jp_tittle_img_overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="jp_tittle_heading_wrapper">
              <div class="jp_tittle_heading">
                <h2>Thông tin chi tiết</h2>
              </div>
              <div class="jp_tittle_breadcrumb_main_wrapper">
                <div class="jp_tittle_breadcrumb_wrapper">
                  <ul>
                    <li>
                      <nuxt-link to="/"> Trang chủ </nuxt-link>
                      <i class="fa fa-angle-right"></i>
                      <!-- <a href="#">Trang chủ</a> -->
                    </li>
                    <li>
                      <p>{{ $t(`menuHeader.${header.title}`) }}</p>
                    </li>
                    <!-- <li>About-Us</li> -->
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["header"]),
  },
  created() {
    this.$store.dispatch("header/getTitle", this.$router.currentRoute.name);
  },
};
</script>

<style scoped>
@import url("@/assets/css/campain/style_II.css");
</style>