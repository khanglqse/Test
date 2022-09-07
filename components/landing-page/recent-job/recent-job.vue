<template>
  <div>
    <div class="cc_featured_product_main_wrapper" id="recentJob">
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
          <div class="carousel theme" v-if="paging.items.length">
            <div class="state-outer">
              <div class="state state-transform-1">
                <div class="state-item">
                  <div
                    class="item"
                    v-for="(item, index) in paging.items"
                    :key="item.id"
                  >
                    <!-- data-hash="zero" -->
                    <div
                      @click="goToDetailPage(item)"
                      class="jp_job_post_main_wrapper_cont"
                      :class="index > 0 ? 'jp_job_post_main_wrapper_cont2' : ''"
                    >
                      <div class="jp_job_post_main_wrapper">
                        <div class="row">
                          <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                            <div class="jp_job_post_side_img">
                              <nuxt-img :src="item.imageUrl || '~/assets/css/images/job_post_img1.jpg'" alt="rent-job"/>
                            </div>
                            <div class="jp_job_post_right_cont">
                              <h4>{{ item.title }}</h4>
                              <p>{{ item.categoryName }}</p>
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
                                  <nuxt-link
                                    :to="{
                                      path: `/job/${item.id}#campaign-detail`,
                                      param: item.id,
                                    }"
                                    >{{ $t("button.apply") }}</nuxt-link
                                  >
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="jp_job_post_keyword_wrapper">
                        <ul>
                          <li>
                            <i class="fa fa-tags"></i>{{ $t("keywords") }} :
                          </li>
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
            <h4>{{ $t("message.noItemFound") }}</h4>
          </div>
        </div>
        <div
          class="video_nav_img_wrapper flex justify-between items-center"
          v-if="paging.items.length"
        >
          <button
            class="btn btn-default"
            @click="paging.hasPreviousPage && actionPaging('prev')"
          >
            {{ $t("button.prev") }}
          </button>

          <div class="video_nav_img">
            <ul>
              <li v-for="(pageNum, index) in paging.totalPages" :key="pageNum">
                <button
                  :class="
                    paging.pageIndex === index + 1 ? 'btn-info' : 'btn-default'
                  "
                  class="btn"
                  @click="getCurrentPage(index + 1)"
                >
                  {{ index + 1 }}
                </button>
              </li>
            </ul>
          </div>

          <button
            class="btn btn-default"
            @click="paging.hasNextPage && actionPaging('next')"
          >
            {{ $t("button.next") }}
          </button>
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
      listBudget: [
        {
          id: 1,
          from: 0,
          to: 5000000,
        },
        {
          id: 2,
          from: 5000000,
          to: 10000000,
        },
        {
          id: 3,
          from: 10000000,
          to: 20000000,
        },
      ],
    };
  },
  mixins: [toast],
  methods: {
    async getListCampaign() {
      try {
        const result = await CampaignService.getListCampaign(this.paging);
        if (!result.success) {
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
      this.paging.keyword = this.$store.state.filter.filterItem.keyword;
      this.paging.budget = this.listBudget.find(
        (value) => value.id == this.$store.state.filter.filterItem.budget
      );
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

    goToDetailPage(item) {
      this.$router.push({ path: `/job/${item.id}#campaign-detail` });
    },
  },
  computed: {
    ...mapState(["filter"]),
  },
  watch: {
    "$store.state.filter.filterItem"(value) {
      this.paging = new PagingModel();

      this.paging.keyword = value.keyword;
      this.paging.budget = this.listBudget.find(
        (value) => value.id == this.filter.filterItem.budget
      );

      this.getListCampaign();
    },
  },
  created() {
    this.getListCampaign();
  },
};
</script>