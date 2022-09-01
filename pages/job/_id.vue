<!-- <template>
  <div>
    <div class="pt-24">hello {{ this.id }}</div>
    <button class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg" @click="setName('khang1')">Set name to Khang</button>
    <button class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg" @click="setNameWithUpperCase('khang1')">
      Set name uppercaseto Khang
    </button>
    <button class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg" @click="fetchName(1)">Fetch name from API</button>
    <nuxt-link to="/job/home" class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg">Go to home</nuxt-link>
    <p>This is data u can use through application in store {{ user }}</p>
  </div>
</template> -->

<template>
  <div class="jp_listing_single_main_wrapper" id="campaign-detail">
    <ApplyJobDialog
      :dialogModel="dialog"
      @cancel="actionDialog($event)"
      @confirm="actionDialog($event)"
      ref="applyJob"
    ></ApplyJobDialog>

    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
          <div class="jp_listing_left_sidebar_wrapper">
            <div class="jp_job_des">
              <h2>{{ $t("campaign.description") }}</h2>
              <p>{{ campaign.description }}.</p>
              <ul>
                <li>
                  <i class="fa fa-globe"></i>&nbsp;&nbsp;
                  <a href="#">www.example.com</a>
                </li>
                <li>
                  <i class="fa fa-file-pdf-o"></i>&nbsp;&nbsp;
                  <a href="#">Download Info</a>
                </li>
              </ul>
            </div>
            <div class="jp_job_res">
              <h2>{{ $t("campaign.responsiblities") }}</h2>
              <p>
                Curabitur non nulla sit amet nisl tempus convallis quis ac
                lectus. Mauris blandit aliquet elit, eget tincidunt nibh
                pulvinar a. Praesent sapien massa, convallis a pellentesque nec,
                egestas non nisi. Curabitur aliquet quam id dui posuere blandit.
              </p>
              <ul>
                <li>
                  <i class="fa fa-caret-right"></i>&nbsp;&nbsp; Build
                  next-generation web applications with a focus on the client
                  side.
                </li>
                <li>
                  <i class="fa fa-caret-right"></i>&nbsp;&nbsp; Redesign UI's,
                  implement new UI's, and pick up Java as necessary.
                </li>
                <li>
                  <i class="fa fa-caret-right"></i>&nbsp;&nbsp; Explore and
                  design dynamic and compelling consumer experiences.
                </li>
                <li>
                  <i class="fa fa-caret-right"></i>&nbsp;&nbsp; Design and build
                  scalable framework for web applications.
                </li>
              </ul>
            </div>
            <div class="jp_job_res jp_job_qua">
              <h2>{{ $t("campaign.minimumQualification") }}</h2>
              <ul>
                <li>
                  <i class="fa fa-caret-right"></i>&nbsp;&nbsp; BA/BS degree in
                  a technical field or equivalent practical experience.
                </li>
                <li>
                  <i class="fa fa-caret-right"></i>&nbsp;&nbsp; 2 years of
                  relevant work experience in software development.
                </li>
                <li>
                  <i class="fa fa-caret-right"></i>&nbsp;&nbsp; Programming
                  experience in C, C++ or Java.
                </li>
                <li>
                  <i class="fa fa-caret-right"></i>&nbsp;&nbsp; Experience with
                  AJAX, HTML and CSS.
                </li>
              </ul>
            </div>
            <div class="jp_job_apply">
              <h2>{{ $t("campaign.minimumQualification") }}</h2>
              <p>
                Praesent sapien massa, convallis a pellentesque nec, egestas non
                nisi. Curabitur aliquet quam id dui posuere blandit. Curabitur
                aliquet quam id dui posuere blandit. Curabitur non nulla sit
                amet nisl tempus convallis quis ac lectus.
              </p>
            </div>
            <!-- <div class="jp_job_map">
                            <h2>Loacation</h2>
                            <div id="map" style="width:100%; float:left; height:300px;"></div>
                        </div> -->
          </div>
          <div class="jp_listing_left_bottom_sidebar_wrapper">
            <div class="jp_listing_left_bottom_sidebar_social_wrapper">
              <ul class="hidden-xs">
                <li>SHARE :</li>
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
                <li class="hidden-xs">
                  <a href="#"><i class="fa fa-google-plus"></i></a>
                </li>
                <li class="hidden-xs">
                  <a href="#"><i class="fa fa-vimeo"></i></a>
                </li>
              </ul>
            </div>
          </div>
          <div class="jp_listing_left_bottom_sidebar_key_wrapper">
            <ul>
              <li><i class="fa fa-tags"></i> {{ $t("keywords") }} :</li>
              <li><a href="#">ui designer,</a></li>
              <li><a href="#">developer,</a></li>
              <li><a href="#">senior</a></li>
              <li><a href="#">it company,</a></li>
              <li><a href="#">design,</a></li>
              <li><a href="#">call center</a></li>
            </ul>
          </div>
          <!-- <div class="jp_listing_related_heading_wrapper">
                        <h2>Related Jobs</h2>
                        <div class="jp_listing_related_slider_wrapper">
                            <div class="owl-carousel owl-theme">
                                <div class="item">
                                    <div class="row">
                                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div class="jp_job_post_main_wrapper_cont jp_job_post_grid_main_wrapper_cont">
                                                <div class="jp_job_post_main_wrapper">
                                                    <div class="row">
                                                        <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                                                            <div class="jp_job_post_side_img">
                                                                <img src="images/content/job_post_img1.jpg" alt="post_img" />
                                                            </div>
                                                            <div class="jp_job_post_right_cont">
                                                                <h4>HTML Developer (1 - 2 Yrs Exp.)</h4>
                                                                <p>Webstrot Technology Pvt. Ltd.</p>
                                                                <ul>
                                                                    <li><i class="fa fa-cc-paypal"></i>&nbsp; $12K - 15k P.A.</li>
                                                                    <li><i class="fa fa-map-marker"></i>&nbsp; Caliphonia, PO 455001</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                                            <div class="jp_job_post_right_btn_wrapper">
                                                                <ul>
                                                                    <li><a href="#"><i class="fa fa-heart-o"></i></a></li>
                                                                    <li><a href="#">Part Time</a></li>
                                                                    <li><a href="#">Apply</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="jp_job_post_keyword_wrapper">
                                                    <ul>
                                                        <li><i class="fa fa-tags"></i>Keywords :</li>
                                                        <li><a href="#">ui designer,</a></li>
                                                        <li><a href="#">developer,</a></li>
                                                        <li><a href="#">senior</a></li>
                                                        <li><a href="#">it company,</a></li>
                                                        <li><a href="#">design,</a></li>
                                                        <li><a href="#">call center</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div class="jp_job_post_main_wrapper_cont jp_job_post_grid_main_wrapper_cont">
                                                <div class="jp_job_post_main_wrapper">
                                                    <div class="row">
                                                        <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                                                            <div class="jp_job_post_side_img">
                                                                <img src="images/content/job_post_img2.jpg" alt="post_img" />
                                                            </div>
                                                            <div class="jp_job_post_right_cont">
                                                                <h4>HTML Developer (1 - 2 Yrs Exp.)</h4>
                                                                <p>Webstrot Technology Pvt. Ltd.</p>
                                                                <ul>
                                                                    <li><i class="fa fa-cc-paypal"></i>&nbsp; $12K - 15k P.A.</li>
                                                                    <li><i class="fa fa-map-marker"></i>&nbsp; Caliphonia, PO 455001</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                                            <div class="jp_job_post_right_btn_wrapper">
                                                                <ul>
                                                                    <li><a href="#"><i class="fa fa-heart-o"></i></a></li>
                                                                    <li><a href="#">Part Time</a></li>
                                                                    <li><a href="#">Apply</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="jp_job_post_keyword_wrapper">
                                                    <ul>
                                                        <li><i class="fa fa-tags"></i>Keywords :</li>
                                                        <li><a href="#">ui designer,</a></li>
                                                        <li><a href="#">developer,</a></li>
                                                        <li><a href="#">senior</a></li>
                                                        <li><a href="#">it company,</a></li>
                                                        <li><a href="#">design,</a></li>
                                                        <li><a href="#">call center</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div class="jp_job_post_main_wrapper_cont jp_job_post_grid_main_wrapper_cont">
                                                <div class="jp_job_post_main_wrapper">
                                                    <div class="row">
                                                        <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                                                            <div class="jp_job_post_side_img">
                                                                <img src="images/content/job_post_img3.jpg" alt="post_img" />
                                                            </div>
                                                            <div class="jp_job_post_right_cont">
                                                                <h4>HTML Developer (1 - 2 Yrs Exp.)</h4>
                                                                <p>Webstrot Technology Pvt. Ltd.</p>
                                                                <ul>
                                                                    <li><i class="fa fa-cc-paypal"></i>&nbsp; $12K - 15k P.A.</li>
                                                                    <li><i class="fa fa-map-marker"></i>&nbsp; Caliphonia, PO 455001</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                                            <div class="jp_job_post_right_btn_wrapper">
                                                                <ul>
                                                                    <li><a href="#"><i class="fa fa-heart-o"></i></a></li>
                                                                    <li><a href="#">Part Time</a></li>
                                                                    <li><a href="#">Apply</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="jp_job_post_keyword_wrapper">
                                                    <ul>
                                                        <li><i class="fa fa-tags"></i>Keywords :</li>
                                                        <li><a href="#">ui designer,</a></li>
                                                        <li><a href="#">developer,</a></li>
                                                        <li><a href="#">senior</a></li>
                                                        <li><a href="#">it company,</a></li>
                                                        <li><a href="#">design,</a></li>
                                                        <li><a href="#">call center</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="row">
                                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div class="jp_job_post_main_wrapper_cont jp_job_post_grid_main_wrapper_cont">
                                                <div class="jp_job_post_main_wrapper">
                                                    <div class="row">
                                                        <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                                                            <div class="jp_job_post_side_img">
                                                                <img src="images/content/job_post_img1.jpg" alt="post_img" />
                                                            </div>
                                                            <div class="jp_job_post_right_cont">
                                                                <h4>HTML Developer (1 - 2 Yrs Exp.)</h4>
                                                                <p>Webstrot Technology Pvt. Ltd.</p>
                                                                <ul>
                                                                    <li><i class="fa fa-cc-paypal"></i>&nbsp; $12K - 15k P.A.</li>
                                                                    <li><i class="fa fa-map-marker"></i>&nbsp; Caliphonia, PO 455001</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                                            <div class="jp_job_post_right_btn_wrapper">
                                                                <ul>
                                                                    <li><a href="#"><i class="fa fa-heart-o"></i></a></li>
                                                                    <li><a href="#">Part Time</a></li>
                                                                    <li><a href="#">Apply</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="jp_job_post_keyword_wrapper">
                                                    <ul>
                                                        <li><i class="fa fa-tags"></i>Keywords :</li>
                                                        <li><a href="#">ui designer,</a></li>
                                                        <li><a href="#">developer,</a></li>
                                                        <li><a href="#">senior</a></li>
                                                        <li><a href="#">it company,</a></li>
                                                        <li><a href="#">design,</a></li>
                                                        <li><a href="#">call center</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div class="jp_job_post_main_wrapper_cont jp_job_post_grid_main_wrapper_cont">
                                                <div class="jp_job_post_main_wrapper">
                                                    <div class="row">
                                                        <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                                                            <div class="jp_job_post_side_img">
                                                                <img src="images/content/job_post_img2.jpg" alt="post_img" />
                                                            </div>
                                                            <div class="jp_job_post_right_cont">
                                                                <h4>HTML Developer (1 - 2 Yrs Exp.)</h4>
                                                                <p>Webstrot Technology Pvt. Ltd.</p>
                                                                <ul>
                                                                    <li><i class="fa fa-cc-paypal"></i>&nbsp; $12K - 15k P.A.</li>
                                                                    <li><i class="fa fa-map-marker"></i>&nbsp; Caliphonia, PO 455001</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                                            <div class="jp_job_post_right_btn_wrapper">
                                                                <ul>
                                                                    <li><a href="#"><i class="fa fa-heart-o"></i></a></li>
                                                                    <li><a href="#">Part Time</a></li>
                                                                    <li><a href="#">Apply</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="jp_job_post_keyword_wrapper">
                                                    <ul>
                                                        <li><i class="fa fa-tags"></i>Keywords :</li>
                                                        <li><a href="#">ui designer,</a></li>
                                                        <li><a href="#">developer,</a></li>
                                                        <li><a href="#">senior</a></li>
                                                        <li><a href="#">it company,</a></li>
                                                        <li><a href="#">design,</a></li>
                                                        <li><a href="#">call center</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div class="jp_job_post_main_wrapper_cont jp_job_post_grid_main_wrapper_cont">
                                                <div class="jp_job_post_main_wrapper">
                                                    <div class="row">
                                                        <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                                                            <div class="jp_job_post_side_img">
                                                                <img src="images/content/job_post_img3.jpg" alt="post_img" />
                                                            </div>
                                                            <div class="jp_job_post_right_cont">
                                                                <h4>HTML Developer (1 - 2 Yrs Exp.)</h4>
                                                                <p>Webstrot Technology Pvt. Ltd.</p>
                                                                <ul>
                                                                    <li><i class="fa fa-cc-paypal"></i>&nbsp; $12K - 15k P.A.</li>
                                                                    <li><i class="fa fa-map-marker"></i>&nbsp; Caliphonia, PO 455001</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                                            <div class="jp_job_post_right_btn_wrapper">
                                                                <ul>
                                                                    <li><a href="#"><i class="fa fa-heart-o"></i></a></li>
                                                                    <li><a href="#">Part Time</a></li>
                                                                    <li><a href="#">Apply</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="jp_job_post_keyword_wrapper">
                                                    <ul>
                                                        <li><i class="fa fa-tags"></i>Keywords :</li>
                                                        <li><a href="#">ui designer,</a></li>
                                                        <li><a href="#">developer,</a></li>
                                                        <li><a href="#">senior</a></li>
                                                        <li><a href="#">it company,</a></li>
                                                        <li><a href="#">design,</a></li>
                                                        <li><a href="#">call center</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="row">
                                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div class="jp_job_post_main_wrapper_cont jp_job_post_grid_main_wrapper_cont">
                                                <div class="jp_job_post_main_wrapper">
                                                    <div class="row">
                                                        <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                                                            <div class="jp_job_post_side_img">
                                                                <img src="images/content/job_post_img1.jpg" alt="post_img" />
                                                            </div>
                                                            <div class="jp_job_post_right_cont">
                                                                <h4>HTML Developer (1 - 2 Yrs Exp.)</h4>
                                                                <p>Webstrot Technology Pvt. Ltd.</p>
                                                                <ul>
                                                                    <li><i class="fa fa-cc-paypal"></i>&nbsp; $12K - 15k P.A.</li>
                                                                    <li><i class="fa fa-map-marker"></i>&nbsp; Caliphonia, PO 455001</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                                            <div class="jp_job_post_right_btn_wrapper">
                                                                <ul>
                                                                    <li><a href="#"><i class="fa fa-heart-o"></i></a></li>
                                                                    <li><a href="#">Part Time</a></li>
                                                                    <li><a href="#">Apply</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="jp_job_post_keyword_wrapper">
                                                    <ul>
                                                        <li><i class="fa fa-tags"></i>Keywords :</li>
                                                        <li><a href="#">ui designer,</a></li>
                                                        <li><a href="#">developer,</a></li>
                                                        <li><a href="#">senior</a></li>
                                                        <li><a href="#">it company,</a></li>
                                                        <li><a href="#">design,</a></li>
                                                        <li><a href="#">call center</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div class="jp_job_post_main_wrapper_cont jp_job_post_grid_main_wrapper_cont">
                                                <div class="jp_job_post_main_wrapper">
                                                    <div class="row">
                                                        <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                                                            <div class="jp_job_post_side_img">
                                                                <img src="images/content/job_post_img2.jpg" alt="post_img" />
                                                            </div>
                                                            <div class="jp_job_post_right_cont">
                                                                <h4>HTML Developer (1 - 2 Yrs Exp.)</h4>
                                                                <p>Webstrot Technology Pvt. Ltd.</p>
                                                                <ul>
                                                                    <li><i class="fa fa-cc-paypal"></i>&nbsp; $12K - 15k P.A.</li>
                                                                    <li><i class="fa fa-map-marker"></i>&nbsp; Caliphonia, PO 455001</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                                            <div class="jp_job_post_right_btn_wrapper">
                                                                <ul>
                                                                    <li><a href="#"><i class="fa fa-heart-o"></i></a></li>
                                                                    <li><a href="#">Part Time</a></li>
                                                                    <li><a href="#">Apply</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="jp_job_post_keyword_wrapper">
                                                    <ul>
                                                        <li><i class="fa fa-tags"></i>Keywords :</li>
                                                        <li><a href="#">ui designer,</a></li>
                                                        <li><a href="#">developer,</a></li>
                                                        <li><a href="#">senior</a></li>
                                                        <li><a href="#">it company,</a></li>
                                                        <li><a href="#">design,</a></li>
                                                        <li><a href="#">call center</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div class="jp_job_post_main_wrapper_cont jp_job_post_grid_main_wrapper_cont">
                                                <div class="jp_job_post_main_wrapper">
                                                    <div class="row">
                                                        <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                                                            <div class="jp_job_post_side_img">
                                                                <img src="images/content/job_post_img3.jpg" alt="post_img" />
                                                            </div>
                                                            <div class="jp_job_post_right_cont">
                                                                <h4>HTML Developer (1 - 2 Yrs Exp.)</h4>
                                                                <p>Webstrot Technology Pvt. Ltd.</p>
                                                                <ul>
                                                                    <li><i class="fa fa-cc-paypal"></i>&nbsp; $12K - 15k P.A.</li>
                                                                    <li><i class="fa fa-map-marker"></i>&nbsp; Caliphonia, PO 455001</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                                            <div class="jp_job_post_right_btn_wrapper">
                                                                <ul>
                                                                    <li><a href="#"><i class="fa fa-heart-o"></i></a></li>
                                                                    <li><a href="#">Part Time</a></li>
                                                                    <li><a href="#">Apply</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="jp_job_post_keyword_wrapper">
                                                    <ul>
                                                        <li><i class="fa fa-tags"></i>Keywords :</li>
                                                        <li><a href="#">ui designer,</a></li>
                                                        <li><a href="#">developer,</a></li>
                                                        <li><a href="#">senior</a></li>
                                                        <li><a href="#">it company,</a></li>
                                                        <li><a href="#">design,</a></li>
                                                        <li><a href="#">call center</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> -->
        </div>
        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div
                class="
                  jp_rightside_job_categories_wrapper
                  jp_rightside_listing_single_wrapper
                "
              >
                <div class="jp_rightside_job_categories_heading">
                  <h4>{{ $t("jobOverview") }}</h4>
                </div>
                <div class="jp_jop_overview_img_wrapper">
                  <div class="jp_jop_overview_img">
                    <img
                      :src="campaign.imageUrl"
                      alt="post_img"
                      style="width: 300px"
                    />
                  </div>
                </div>
                <div class="jp_job_listing_single_post_right_cont">
                  <div class="jp_job_listing_single_post_right_cont_wrapper">
                    <h4>{{ campaign.title }}</h4>
                    <p>{{ campaign.categoryName }}</p>
                  </div>
                </div>
                <div class="jp_job_post_right_overview_btn_wrapper">
                  <div class="jp_job_post_right_overview_btn">
                    <ul>
                      <li>
                        <a href="#"><i class="fa fa-heart-o"></i></a>
                      </li>
                      <li>
                        <a href="#">{{ $t("parttime") }}</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="jp_listing_overview_list_outside_main_wrapper">
                  <div class="jp_listing_overview_list_main_wrapper">
                    <div class="jp_listing_list_icon">
                      <i class="fa fa-calendar"></i>
                    </div>
                    <div class="jp_listing_list_icon_cont_wrapper">
                      <ul>
                        <li>Date Posted:</li>
                        <li>{{ convertDate(campaign.startDate) || "---" }}</li>
                      </ul>
                    </div>
                  </div>
                  <div
                    class="
                      jp_listing_overview_list_main_wrapper
                      jp_listing_overview_list_main_wrapper2
                    "
                  >
                    <div class="jp_listing_list_icon">
                      <i class="fa fa-map-marker"></i>
                    </div>
                    <div class="jp_listing_list_icon_cont_wrapper">
                      <ul>
                        <li>Location:</li>
                        <li>{{ campaign.location || "---" }}</li>
                      </ul>
                    </div>
                  </div>
                  <!-- <div
                    class="
                      jp_listing_overview_list_main_wrapper
                      jp_listing_overview_list_main_wrapper2
                    "
                  >
                    <div class="jp_listing_list_icon">
                      <i class="fa fa-info-circle"></i>
                    </div>
                    <div class="jp_listing_list_icon_cont_wrapper">
                      <ul>
                        <li>Job Title:</li>
                        <li>HTML Developer</li>
                      </ul>
                    </div>
                  </div>
                  <div
                    class="
                      jp_listing_overview_list_main_wrapper
                      jp_listing_overview_list_main_wrapper2
                    "
                  >
                    <div class="jp_listing_list_icon">
                      <i class="fa fa-clock-o"></i>
                    </div>
                    <div class="jp_listing_list_icon_cont_wrapper">
                      <ul>
                        <li>Hours:</li>
                        <li>40h / Week</li>
                      </ul>
                    </div>
                  </div>
                  <div
                    class="
                      jp_listing_overview_list_main_wrapper
                      jp_listing_overview_list_main_wrapper2
                    "
                  >
                    <div class="jp_listing_list_icon">
                      <i class="fa fa-money"></i>
                    </div>
                    <div class="jp_listing_list_icon_cont_wrapper">
                      <ul>
                        <li>Salary:</li>
                        <li>$12K - 15k P.A.</li>
                      </ul>
                    </div>
                  </div>
                  <div
                    class="
                      jp_listing_overview_list_main_wrapper
                      jp_listing_overview_list_main_wrapper2
                    "
                  >
                    <div class="jp_listing_list_icon">
                      <i class="fa fa-th-large"></i>
                    </div>
                    <div class="jp_listing_list_icon_cont_wrapper">
                      <ul>
                        <li>Category:</li>
                        <li>Developer</li>
                      </ul>
                    </div>
                  </div>
                  <div
                    class="
                      jp_listing_overview_list_main_wrapper
                      jp_listing_overview_list_main_wrapper2
                    "
                  >
                    <div class="jp_listing_list_icon">
                      <i class="fa fa-star"></i>
                    </div>
                    <div class="jp_listing_list_icon_cont_wrapper">
                      <ul>
                        <li>Experience:</li>
                        <li>1+ Years Experience</li>
                      </ul>
                    </div>
                  </div> -->
                  <div class="jp_listing_right_bar_btn_wrapper">
                    <div class="jp_listing_right_bar_btn">
                      <ul>
                        <!-- <li>
                          <a href="#"
                            ><i class="fa fa-plus-circle"></i> &nbsp;Apply With
                            Facebook</a
                          >
                        </li> -->
                        <li>
                          <a @click="showApplyDialog()"
                            ><i class="fa fa-plus-circle"></i> &nbsp;{{
                              $t("button.applyNow")
                            }}!</a
                          >
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
  </div>
</template>

<script>
import ApplyJobDialog from "@/components/dialog-component/apply-job.vue";
import { CampaignModel } from "@/model/campaign-model";
import { DialogModel } from "@/model/dialog-model";
import CampaignService from "@/services/campaignService";
import CandidateService from "@/services/candidateService";
import toast from "@/mixins/toast";
import validForm from "@/mixins/validForm";
import ButtonName from "@/constant/button-name";
import { mapState, mapActions, mapMutations } from "vuex";

export default {
  components: {
    ApplyJobDialog,
  },
  // data() {
  //   return {
  //     id: this.$route.params.id,
  //   };
  // },
  // computed: {
  //   // ...mapState(['name']),
  //   ...mapState(["user"]),
  // },
  // methods: {
  //   ...mapActions({
  //     setNameWithUpperCase: "user/setNameWithUpperCase",
  //     setName: "user/setName",
  //     fetchName: "user/fetchName",
  //   }),
  //   ...mapMutations({
  //     setName: "user/setName",
  //   }),
  // },
  props: {
    campaignValue: {
      type: Object,
      default: () => {
        const item = new CampaignModel();
        return item;
      },
    },
    dialogModel: {
      type: Object,
      default: () => {
        const dialog = new DialogModel();
        return dialog;
      },
    },
  },
  data() {
    return {
      id: this.$route.params.id,
      campaign: this.campaignValue,
      dialog: this.dialogModel,
    };
  },
  mixins: [toast, validForm],
  methods: {
    async getDetailCampaign() {
      try {
        const result = await CampaignService.getDetailCampaign(this.id);
        if (result.success) {
          this.campaign = result.data;
        } else {
          this.showToastMessage(ButtonName.TOAST_ERROR, result.message);
        }
      } catch (error) {
        this.showToastMessage(ButtonName.TOAST_ERROR, error?.message);
      }
    },

    showApplyDialog() {
      this.dialog = {
        isShow: true,
        title: this.$i18n.t("titleDialog.applyJob"),
      };
    },

    actionDialog(event) {
      if (event.isSubmit) {
        this.submitCandidateCV(event);
      } else {
        this.dialog = new DialogModel();
        this.$refs.applyJob.onReset();
      }
    },

    async submitCandidateCV(data) {
      this.formValid = false;
      this.emailValid = false;

      const titleToast = {
        true: ButtonName.TOAST_SUCCESS,
        false: ButtonName.TOAST_ERROR,
      };

      let messageResult = "";

      try {
        const serviceAPI = data.isForm === 1 ? CandidateService.submitCandidate(data) : CandidateService.uploadCVCandidate(data);
        const result = await serviceAPI;
        if (result.success) {
          this.dialog = new DialogModel();
          this.$refs.applyJob.onReset();

          messageResult = this.$i18n.t("message.submitSuccess");
        }
        this.showToastMessage(
          titleToast[result.success || !result.isError],
          messageResult || result.errorMessage
        );
      } catch (error) {
        this.showToastMessage(ButtonName.TOAST_ERROR, error?.message);
      }
    },

    validationForm(item) {
      return !item.name || !item.phone;
    },

    validEmail(item) {
      return !this.validationEmail(item.email);
    },
  },
  created() {
    this.getDetailCampaign();
  },
};
</script>

<style scoped>
@import url("../../assets/css/campain/style_II.css");
</style>
