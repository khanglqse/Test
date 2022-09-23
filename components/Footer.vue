<template>
  <div class="jp_main_footer_img_wrapper">
    <div class="jp_newsletter_img_overlay_wrapper"></div>
    <div class="jp_newsletter_wrapper">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <div class="jp_newsletter_text">
              <img src="~/assets/css/images/content/news_logo.png" width="330" height="47" alt="news_logo">
            </div>
          </div>
          <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
            <div class="jp_newsletter_field">
              <i class="fa fa-envelope-o"></i
              ><input type="text" :placeholder="$t('placeholder.yourEmail')" /><button
                type="submit"
                aria-label="submit"
              >
                {{ $t("button.submit") }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- jp Newsletter Wrapper End -->
    <!-- jp footer Wrapper Start -->
    <div class="jp_footer_main_wrapper">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="jp_footer_logo_wrapper">
              <div class="jp_footer_logo">
                <a href="#">
                  <!-- <img
                    src="~/assets/css/images/content/resume_logo.png"
                    alt="footer_logo"
                /> -->
                </a>
              </div>
            </div>
          </div>
          <div class="jp_footer_three_sec_main_wrapper">
            <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div class="jp_footer_first_cont_wrapper">
                <div class="jp_footer_first_cont">
                  <h2>{{ $t("jobFilter.whoWeAre") }}</h2>
                  <p>
                    This is Photoshop's version of Lom Ipsum. Proin gravida nibh
                    vel velit auctor aliquet. Aenean sollicitudin, lorem quis
                    bibendum.<br /><br />
                    Proin akshay handge vel velit auctor aliquet. Aenean
                    sollicitudin,
                  </p>
                  <!-- <ul>
                    <li>
                      <i class="fa fa-plus-circle"></i>
                      <a href="#">{{ $t("button.readMore") }}</a>
                    </li>
                  </ul> -->
                </div>
              </div>
            </div>
            <div class="col-lg-2 col-md-2 col-sm-6 col-xs-12">
              <div
                class="jp_footer_candidate_wrapper jp_footer_candidate_wrapper2"
              >
                <div class="jp_footer_candidate">
                  <h2>{{ $t("menu.affiliate") }}</h2>
                  <ul>
                    <li>
                      <a href="#"
                        ><i class="fa fa-caret-right" aria-hidden="true"></i>
                        {{ $t("menu.publisher") }}</a
                      >
                    </li>
                    <li>
                      <a href="#"
                        ><i class="fa fa-caret-right" aria-hidden="true"></i>
                        {{ $t("menu.advertiser") }}</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-2 col-md-2 col-sm-6 col-xs-12">
              <div
                class="jp_footer_candidate_wrapper jp_footer_candidate_wrapper3"
              >
                <div class="jp_footer_candidate">
                  <h2>{{ $t("menu.aboutUs") }}</h2>
                  <ul>
                    <li>
                      <a href="#"
                        ><i class="fa fa-caret-right" aria-hidden="true"></i>
                        {{ $t("menu.companyIntroduction") }}</a
                      >
                    </li>
                    <li>
                      <a href="#"
                        ><i class="fa fa-caret-right" aria-hidden="true"></i>
                        Blog</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <div
                class="jp_footer_candidate_wrapper jp_footer_candidate_wrapper4"
              >
                <div class="jp_footer_candidate">
                  <h2>{{ $t("menu.contactUs") }}</h2>
                  <ul>
                    <li>
                      <a href="#"
                        ><i class="fa fa-caret-right" aria-hidden="true"></i>
                        Email: massrecruitment@gmail.com</a
                      >
                    </li>
                    <li>
                      <a href="#"
                        ><i class="fa fa-caret-right" aria-hidden="true"></i>
                        {{ $t("menu.phoneNumber") }}: 0123456789</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="jp_bottom_footer_Wrapper">
              <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                  <div class="jp_bottom_footer_left_cont">
                    <p>{{$t("menu.address")}}: Đường A, Phường B, Gò Vấp, Hồ Chí Minh</p>
                  </div>
                  <div class="jp_bottom_top_scrollbar_wrapper">
                    <a href="javascript:" id="return-to-top"
                      ><i class="fa fa-angle-up"></i
                    ></a>
                  </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                  <div class="jp_bottom_footer_right_cont">
                    <ul>
                      <li>
                        <a href="https://mass-recruitment-landing-git-master-khanglqse.vercel.app/" aria-label="facebook"><i class="fa fa-facebook"></i></a>
                      </li>
                      <li>
                        <a href="https://mass-recruitment-landing-git-master-khanglqse.vercel.app/" aria-label="twitter"><i class="fa fa-twitter"></i></a>
                      </li>
                      <li>
                        <a href="https://mass-recruitment-landing-git-master-khanglqse.vercel.app/" aria-label="pinterest"><i class="fa fa-pinterest-p"></i></a>
                      </li>
                      <li>
                        <a href="https://mass-recruitment-landing-git-master-khanglqse.vercel.app/" aria-label="linkedin"><i class="fa fa-linkedin"></i></a>
                      </li>
                      <li class="hidden-xs">
                        <a href="https://mass-recruitment-landing-git-master-khanglqse.vercel.app/" aria-label="google"><i class="fa fa-google-plus"></i></a>
                      </li>
                      <li class="hidden-xs">
                        <a href="https://mass-recruitment-landing-git-master-khanglqse.vercel.app/" aria-label="vimeo"><i class="fa fa-vimeo"></i></a>
                      </li>
                    </ul>
                  </div>
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
import Logo from "@/components/Logo";

export default {
  name: "TheFooter",
  components: {
    logo: Logo,
  },
};
</script>

<style scoped>
@import url('@/assets/css/custom-css/footer.css');
</style>

cert => yes change to no
