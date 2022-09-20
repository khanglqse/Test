<template>
  <div class="container">
    <div class="jp_tittle_name_wrapper p-0">
      <div class="jp_tittle_name">
        <h3>{{ $t("trandingJobs.tranding") }}</h3>
        <h4>{{ $t("trandingJobs.jobs") }}</h4>
      </div>
    </div>
    <div class="jp_tittle_slider_wrapper">
      <div class="jp_tittle_slider_content_wrapper">
        <div class="">
          <div class="item">
            <div class="jp_tittle_slides_one">
              <div class="jp_tittle_side_img_wrapper">
                <img
                  src="~/assets/css/images/content/default-img.svg"
                  alt="tittle_img"
                />
              </div>
              <div class="jp_tittle_side_cont_wrapper">
                <h4>Graphic Designer (UI / UX)</h4>
                <p>Webstrot Pvt. Ltd.</p>
              </div>
            </div>
            <div class="jp_tittle_slides_one jp_tittle_slides_two">
              <div class="jp_tittle_side_img_wrapper">
                <img
                  src="~/assets/css/images/content/tittle_img2.png"
                  alt="tittle_img"
                />
              </div>
              <div class="jp_tittle_side_cont_wrapper">
                <h4>Graphic Designer (UI / UX)</h4>
                <p>Webstrot Pvt. Ltd.</p>
              </div>
            </div>
            <div class="jp_tittle_slides_one jp_tittle_slides_third">
              <div class="jp_tittle_side_img_wrapper">
                <img
                  src="~/assets/css/images/content/tittle_img3.png"
                  alt="tittle_img"
                />
              </div>
              <div class="jp_tittle_side_cont_wrapper">
                <h4>Graphic Designer (UI / UX)</h4>
                <p>Webstrot Pvt. Ltd.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {},
};
</script>

<style scoped>
  @import "~/assets/css/campain/responsive.css";
  </style>