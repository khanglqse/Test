<template>
  <div>
    <div class="cc_featured_product_main_wrapper">
      <div class="jp_hiring_heading_wrapper jp_job_post_heading_wrapper">
        <h2>{{ $t("rentJobs") }}</h2>
      </div>
      <ul class="nav nav-tabs" role="tablist">
        <li role="presentation" class="active">
          <a href="#best" aria-controls="best" role="tab" data-toggle="tab">{{
            $t("featured")
          }}</a>
        </li>
        <li role="presentation">
          <a href="#hot" aria-controls="hot" role="tab" data-toggle="tab">{{
            $t("remotely")
          }}</a>
        </li>
        <li role="presentation">
          <a href="#trand" aria-controls="trand" role="tab" data-toggle="tab">{{
            $t("parttime")
          }}</a>
        </li>
        <li role="presentation">
          <a href="#best" aria-controls="best" role="tab" data-toggle="tab"
            >{{ $t("fulltime") }}
          </a>
        </li>
      </ul>
    </div>
    <div class="tab-content">
      <div role="tabpanel" class="tab-pane fade in active" id="best">
        <div class="ss_featured_products">
          <div class="carousel theme" v-if="paging.items">
            <div class="state-outer">
              <div class="state state-transform-1">
                <div class="state-item">
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
                                src="~/assets/css/images/content/job_post_img1.jpg"
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
                                <li>
                                  <a href="#">{{ $t("parttime") }}</a>
                                </li>
                                <li>
                                  <a href="#">{{ $t("button.apply") }}</a>
                                </li>
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

          <div v-else>
            <h4>No item found!</h4>
          </div>
        </div>
        <div
          class="video_nav_img_wrapper flex justify-between items-center"
          v-if="paging.items"
        >
          <a
            class="button secondary url ~/assets/css/images/_nav"
            @click="paging.hasPreviousPage && actionPaging('prev')"
            >{{ $t("button.prev") }}</a
          >

          <div class="video_nav_img">
            <ul>
              <li v-for="(pageNum, index) in paging.totalPages" :key="pageNum">
                <a
                  :class="paging.pageIndex === index + 1 ? 'button-active' : 'button-non-active'"
                  class="button secondary url ~/assets/css/images/_nav"
                  @click="getCurrentPage(index + 1)"
                  >{{ index + 1 }}</a
                >
              </li>
            </ul>
          </div>

          <a
            class="button secondary url ~/assets/css/images/_nav"
            @click="paging.hasNextPage && actionPaging('next')"
            >{{ $t("button.next") }}</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CampaignService from "@/services/campaignService";
import { PagingModel } from "@/model/paging-model";
import toast from "@/mixins/toast";
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";
import ButtonName from "@/constant/button-name";

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
  mixins: [toast],
  methods: {
    async getListCampaign() {
      try {
        const result = await CampaignService.getListCampaign(
          this.paging.pageIndex,
          this.paging.pageSize || 4
        );
        if (result.isError) {
          this.showToastMessage(ButtonName.TOAST_ERROR, result.errorMessage);
          this.paging = new PagingModel();
        } else {
          this.paging = result.data || {};
        }
      } catch (error) {
        this.showToastMessage(ButtonName.TOAST_ERROR, error?.message);
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

      this.paging.pageIndex += action[item];

      this.getListCampaign();
    },
  },
  computed: {
    ...mapState(["filter"]),
  },
  watch: {
    "$store.state.filter.filterItem"(value) {
      console.log(value);
    },
  },
  created() {
    this.getListCampaign();
  },
};
</script>