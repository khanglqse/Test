<template>
  <div class="jp_spotlight_slider_wrapper">
    <div class="carousel theme">
      <div class="item">
        <div class="jp_spotlight_slider_img_Wrapper">
          <img
            src="~/assets/css/images/content/spotlight_img.jpg"
            alt="spotlight_img"
          />
        </div>
        <div class="jp_spotlight_slider_cont_Wrapper">
          <h4>HTML Developer (1 - 2 Yrs Exp.)</h4>
          <p>Webstrot Technology Ltd.</p>
          <ul>
            <li><i class="fa fa-cc-paypal"></i>&nbsp; $12K - 15k P.A.</li>
            <li>
              <i class="fa fa-map-marker"></i>&nbsp; Caliphonia, PO 455001
            </li>
          </ul>
        </div>
        <div class="jp_spotlight_slider_btn_wrapper">
          <div class="jp_spotlight_slider_btn">
            <ul>
              <li>
                <nuxt-link to="/job/candidate-job#campaign-posting"><i class="fa fa-plus-circle"></i> &nbsp;{{
                              $t("button.addResume")
                            }}</nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>