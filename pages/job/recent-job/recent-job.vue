<template>
  <div>
    <div class="cc_featured_product_main_wrapper">
      <div class="jp_hiring_heading_wrapper jp_job_post_heading_wrapper">
        <h2>Recent Jobs</h2>
      </div>
      <ul class="nav nav-tabs" role="tablist">
        <li role="presentation" class="active">
          <a href="#best" aria-controls="best" role="tab" data-toggle="tab"
            >Featured</a
          >
        </li>
        <li role="presentation">
          <a href="#hot" aria-controls="hot" role="tab" data-toggle="tab"
            >Remotely</a
          >
        </li>
        <li role="presentation">
          <a href="#trand" aria-controls="trand" role="tab" data-toggle="tab"
            >Part Time</a
          >
        </li>
        <li role="presentation">
          <a href="#best" aria-controls="best" role="tab" data-toggle="tab"
            >Full Time
          </a>
        </li>
      </ul>
    </div>
    <div class="tab-content">
      <div role="tabpanel" class="tab-pane fade in active" id="best">
        <div class="ss_featured_products">
          <div class="carousel theme" v-if="paging.items">
            <div
              class="item"
              data-hash="zero"
              v-for="(item, index) in paging.items"
              :key="item.id"
            >
              <div
                class="jp_job_post_main_wrapper_cont"
                :class="index > 0 ? 'jp_job_post_main_wrapper_cont2' : ''"
              >
                <div class="jp_job_post_main_wrapper">
                  <div class="row">
                    <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                      <div class="jp_job_post_side_img">
                        <img
                          :src="'/_nuxt/assets/css/images/content/' + item.img"
                          alt="post_img"
                        />
                      </div>
                      <div class="jp_job_post_right_cont">
                        <h4>{{ item.title }}</h4>
                        <p>{{ item.category }}</p>
                        <ul>
                          <li>
                            <i class="fa fa-cc-paypal"></i>&nbsp;
                            {{ item.description }}
                          </li>
                          <li>
                            <i class="fa fa-map-marker"></i>&nbsp;
                            {{ item.location }}
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                      <div class="jp_job_post_right_btn_wrapper">
                        <ul>
                          <li>
                            <a href="#"><i class="fa fa-heart-o"></i></a>
                          </li>
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

          <div v-else>
            <h4>No item found!</h4>
          </div>
        </div>
        <div class="video_nav_img_wrapper flex justify-between items-center">
          <a
            class="button secondary url ~/assets/css/images/_nav"
            v-if="paging.items"
            @click="paging.hasNextPreviousPage && actionPaging('prev')"
            >PREV</a
          >

          <div class="video_nav_img">
            <ul>
              <li v-for="(pageNum, index) in paging.totalPages" :key="pageNum">
                <a
                  class="button secondary url ~/assets/css/images/_nav"
                  @click="getCurrentPage(index + 1)"
                  >{{ index + 1 }}</a
                >
              </li>
            </ul>
          </div>

          <a
            class="button secondary url ~/assets/css/images/_nav"
            v-if="paging.items"
            @click="paging.hasNextPage && actionPaging('next')"
            >NEXT</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import CampaignService from "@/services/campaignService";
import { PagingModel } from "@/model/paging-model";
import { mapActions, mapGetters, mapState } from "vuex";

export default {
  setup() {},
  props: {
    pagingModel: {
      type: Object,
      default: () => {
        const page = new PagingModel();
        return page;
      },
    },
  },
  data() {
    return {
      paging: this.pagingModel,
    };
  },
  methods: {
    async getListCampaign() {
      try {
        const { result } = CampaignService.getListCampaign(
          this.paging.pageIndex,
          this.paging.pageSize
        );
        this.paging = result || {};
      } catch (error) {
        console.log(error);
      }
    },

    getCurrentPage(page) {
      this.paging.pageIndex = page;
      this.getListCampaign();
    },

    actionPaging(item) {
      const action = {
        prev: -1,
        next: 1,
      };

      this.paging.pageIndex += item[action];

      this.getListCampaign();
    },
  },
  computed: {
    // ...mapState(["filter"]),
  },
  created() {
    this.getListCampaign();
  },
};
</script>