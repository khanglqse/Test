<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-9 col-md-9 col-sm-12 col-xs-12">
        <div class="jp_best_deal_slider_main_wrapper">
          <div class="jp_best_deal_heading_wrapper">
            <h2>{{ $t("offeringBestDeals") }}</h2>
          </div>
          <div class="jp_best_deal_slider_wrapper">
            <div class="carousel theme">
              <div class="item">
                <div class="row">
                  <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div class="jp_best_deal_main_cont_wrapper">
                      <div class="jp_best_deal_icon_sec">
                        <i class="flaticon-magnifying-glass"></i>
                      </div>
                      <div class="jp_best_deal_cont_sec">
                        <h4>
                          <a href="#">{{ $t("button.searchAJob") }}</a>
                        </h4>
                        <p>
                          Proin gravida nibh vel velit auctr akshay Aenean
                          sollicitudin...
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div
                      class="
                        jp_best_deal_main_cont_wrapper
                        jp_best_deal_main_cont_wrapper1
                      "
                    >
                      <div class="jp_best_deal_icon_sec">
                        <i class="flaticon-users"></i>
                      </div>
                      <div class="jp_best_deal_cont_sec">
                        <h4>
                          <a href="#">{{ $t("button.applyAGoodJob") }}</a>
                        </h4>
                        <p>
                          Proin gravida nibh vel velit auctr akshay Aenean
                          sollicitudin...
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div
                      class="
                        jp_best_deal_main_cont_wrapper
                        jp_best_deal_main_cont_wrapper2
                      "
                    >
                      <div class="jp_best_deal_icon_sec">
                        <i class="flaticon-shield"></i>
                      </div>
                      <div class="jp_best_deal_cont_sec">
                        <h4>
                          <a href="#">{{ $t("button.jobSecurity") }}</a>
                        </h4>
                        <p>
                          Proin gravida nibh vel velit auctr akshay Aenean
                          sollicitudin...
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div
                      class="
                        jp_best_deal_main_cont_wrapper
                        jp_best_deal_main_cont_wrapper2
                      "
                    >
                      <div class="jp_best_deal_icon_sec">
                        <i class="flaticon-notification"></i>
                      </div>
                      <div class="jp_best_deal_cont_sec">
                        <h4>
                          <a href="#">{{ $t("button.jobNotifications") }}</a>
                        </h4>
                        <p>
                          Proin gravida nibh vel velit auctr akshay Aenean
                          sollicitudin...
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
        <div class="jp_rightside_career_wrapper jp_best_deal_right_sec_wrapper">
          <div class="jp_rightside_career_heading">
            <h4>{{ $t("recentResumes") }}</h4>
          </div>
          <div class="jp_rightside_career_main_content">
            <div
              class="
                jp_rightside_career_content_wrapper jp_best_deal_right_content
              "
            >
              <div class="jp_rightside_career_img">
                <img
                  src="~/assets/css/images/content/client_img1.jpg"
                  alt="career_img"
                  width="80"
                  height="80"
                />
              </div>
              <div class="jp_rightside_career_img_cont">
                <h4>Akshay Handge</h4>
                <p><i class="fa fa-folder-open-o"></i> &nbsp; Developer</p>
              </div>
            </div>
            <div
              class="
                jp_rightside_career_content_wrapper jp_best_deal_right_content
              "
            >
              <div class="jp_rightside_career_img">
                <img
                  src="~/assets/css/images/content/client_img2.jpg"
                  alt="career_img"
                  width="80"
                  height="80"
                />
              </div>
              <div class="jp_rightside_career_img_cont">
                <h4>Akshay Handge</h4>
                <p><i class="fa fa-folder-open-o"></i> &nbsp;UI Designer</p>
              </div>
            </div>
            <div
              class="
                jp_rightside_career_content_wrapper jp_best_deal_right_content
              "
            >
              <div class="jp_rightside_career_img">
                <img
                  src="~/assets/css/images/content/client_img3.jpg"
                  alt="career_img"
                  width="80"
                  height="80"
                />
              </div>
              <div class="jp_rightside_career_img_cont">
                <h4>Jacklen Fandores</h4>
                <p><i class="fa fa-folder-open-o"></i> &nbsp;Web Designer</p>
              </div>
            </div>
            <div class="jp_rightside_career_btn">
              <a href="#"><i class="fa fa-plus-circle"></i> {{ $t("button.viewAll") }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>