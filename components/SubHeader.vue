<template>
  <div>
    <!-- <div class="jp_top_header_main_wrapper">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div class="jp_top_header_left_wrapper">
              <div class="jp_top_header_left_cont">
                <p><i class="fa fa-phone"></i> &nbsp;Phone &nbsp;+123456789</p>
                <p class="">
                  <i class="fa fa-envelope"></i> &nbsp;Email :&nbsp;<a href="#"
                    ><span
                      class="__cf_email__"
                      data-cfemail="03466e626a6f43667b626e736f662d606c6e"
                      >[email&#160;protected]</span
                    ></a
                  >
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div class="jp_top_header_right_wrapper">
              <div class="jp_top_header_right_cont">
              </div>
              <div class="jp_top_header_right__social_cont">
                <ul>
                  <li>
                    <a href="#"><i class="fa fa-facebook"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="fa fa-twitter"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="fa fa-pinterest-p"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="fa fa-linkedin"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="fa fa-google-plus"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="fa fa-vimeo"></i></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->
    <!-- Top Header Wrapper End -->

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
                      <a>{{ $t(`menuHeader.${header.title}`) }}</a>
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