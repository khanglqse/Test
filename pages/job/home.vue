<template>
  <div>
    <FilterJob></FilterJob>

    <div
      class="jp_tittle_slider_main_wrapper"
      style="float: left; width: 100%; margin-top: 30px"
    >
      <TrandingJob></TrandingJob>

      <div class="jp_first_sidebar_main_wrapper">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
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
          </div>
        </div>
      </div>

      <div class="jp_counter_main_wrapper">
        <JobReport></JobReport>
      </div>

      <div class="jp_best_deals_main_wrapper">
        <BestDeal></BestDeal>
      </div>

      <!-- <nuxt-link
      to="/job/campaign-detail"
      class="
        mx-auto
        lg:mx-0
        hover:underline
        bg-white
        text-gray-800
        font-bold
        rounded-full
        my-6
        py-4
        px-8
        shadow-lg
      "
    >
      Go to Job Page
    </nuxt-link> -->
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
import FilterJob from "~/components/FilterJob.vue";

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
    FilterJob,
  },
};
</script>

<style>
@import url("@/assets/css/campain/style.css");
</style>