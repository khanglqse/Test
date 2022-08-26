<template>
  <div
    class="jp_tittle_slider_main_wrapper"
    style="float: left; width: 100%; margin-top: 30px"
  >
    <TrandingJob></TrandingJob>

    <div class="jp_first_sidebar_main_wrapper">
      <div class="container">
        <div class="row">
          <div class="col-lg-9 col-md-9 col-sm-12 col-xs-12">
            <div class="row">
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="jp_hiring_slider_main_wrapper">
                  <div class="jp_hiring_heading_wrapper">
                    <h2>{{ $t("topHiringCompanies") }}</h2>
                  </div>

                  <TopHirring></TopHirring>
                </div>
              </div>
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <RecentJob></RecentJob>
              </div>

              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <Candidate></Candidate>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
            <div class="jp_first_right_sidebar_main_wrapper">
              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div class="jp_add_resume_wrapper">
                    <div class="jp_add_resume_img_overlay"></div>
                    <div class="jp_add_resume_cont">
                      <!-- <img
                        src="~/assets/css/images/content/resume_logo.png"
                        alt="logo"
                      /> -->
                      <h4>
                        Nhận công việc phù hợp nhất trên email của bạn. Thêm
                        Tiếp tục NGAY BÂY GIỜ!
                      </h4>
                      <ul>
                        <li>
                          <a href="#"
                            ><i class="fa fa-plus-circle"></i> &nbsp;{{
                              $t("button.addResume")
                            }}</a
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div class="jp_spotlight_main_wrapper">
                    <div class="spotlight_header_wrapper">
                      <h4>{{ $t("jobSpotlight") }}</h4>
                    </div>
                    <JobSpotlight></JobSpotlight>
                  </div>
                </div>
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div class="jp_rightside_job_categories_wrapper">
                    <div class="jp_rightside_job_categories_heading">
                      <h4>{{ $t("JobsByCategory") }}</h4>
                    </div>
                    <JobByCategory></JobByCategory>
                  </div>
                </div>
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div class="jp_rightside_career_wrapper">
                    <div class="jp_rightside_career_heading">
                      <h4>{{ $t("careerAdvice") }}</h4>
                    </div>
                    <CareerAdvice></CareerAdvice>
                  </div>
                </div>
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div class="jp_rightside_job_categories_wrapper">
                    <div class="jp_rightside_job_categories_heading">
                      <h4>{{ $t("JobsByCategory") }}</h4>
                    </div>
                    <div class="jp_rightside_job_categories_content">
                      <ul>
                        <li>
                          <i class="fa fa-caret-right"></i>
                          <a href="#">Graphic Designer <span>(214)</span></a>
                        </li>
                        <li>
                          <i class="fa fa-caret-right"></i>
                          <a href="#">Engineering Jobs <span>(514)</span></a>
                        </li>
                        <li>
                          <i class="fa fa-caret-right"></i>
                          <a href="#">Mainframe Jobs <span>(554)</span></a>
                        </li>
                        <li>
                          <i class="fa fa-caret-right"></i>
                          <a href="#">Legal Jobs <span>(457)</span></a>
                        </li>
                        <li>
                          <i class="fa fa-caret-right"></i>
                          <a href="#">IT Jobs <span>(1254)</span></a>
                        </li>
                        <li>
                          <i class="fa fa-plus-circle"></i>
                          <a href="#"
                            >{{ $t("button.viewAll") }}
                            {{ $t("button.category") }}</a
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

    <div class="jp_counter_main_wrapper">
      <JobReport></JobReport>
    </div>

    <div class="jp_best_deals_main_wrapper">
      <BestDeal></BestDeal>
    </div>
  </div>
</template>

<script>
import TrandingJob from "@/components/landing-page/tranding-job/tranding-job.vue";
import TopHirring from "@/components/landing-page/top-hiring/top-hiring.vue";
import RecentJob from "@/components/landing-page/recent-job/recent-job.vue";
import Candidate from "@/components/landing-page/candidate/candidate.vue";
import JobSpotlight from "@/components/landing-page/job-spotlight/job-spotlight.vue";
import JobByCategory from "@/components/landing-page/job-by-category/job-by-category.vue";
import CareerAdvice from "@/components/landing-page/career-advice/career-advice.vue";
import JobReport from "@/components/landing-page/job-report/job-report.vue";
import BestDeal from "@/components/landing-page/best-deal/best-deal.vue";

export default {
  setup() {},
  components: {
    TrandingJob,
    TopHirring,
    RecentJob,
    Candidate,
    JobSpotlight,
    JobByCategory,
    CareerAdvice,
    JobReport,
    BestDeal,
  },
};
</script>