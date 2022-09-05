<template>
  <div>
    <div class="jp_banner_heading_cont_wrapper">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="jp_job_heading_wrapper">
              <div class="jp_job_heading">
                <h1><span>3,000+</span> {{ $t("jobFilter.title") }}</h1>
                <p>{{ $t("jobFilter.description") }}</p>
              </div>
            </div>
          </div>
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="jp_header_form_wrapper">
              <div class="col-lg-5 col-md-4 col-sm-12 col-xs-12">
                <input
                  type="text"
                  placeholder="Từ khóa ví dụ: (Tiêu đề Công Việc, Nội dung)"
                  v-model="itemFilter.keyword"
                  @keyup.enter="filterWork(itemFilter)"
                />
              </div>
              <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                <div class="jp_form_location_wrapper">
                  <i class="fa fa-dot-circle-o first_icon"></i
                  ><select v-model="itemFilter.budget">
                    <option :value="0">Lựa chọn</option>
                    <option
                      v-for="item in listBudget"
                      :key="item.id"
                      :value="item.id"
                    >
                      {{ item.from }} - {{ item.to }}
                    </option></select
                  ><i class="fa fa-angle-down second_icon"></i>
                </div>
              </div>
              <!-- <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                <div class="jp_form_exper_wrapper">
                  <i class="fa fa-dot-circle-o first_icon"></i
                  ><select v-model="itemFilter.experience">
                    <option :value="0">Kinh nghiệm</option>
                    <option
                      v-for="item in experience"
                      :key="item"
                      :value="item"
                    >
                      {{ item }}
                    </option></select
                  ><i class="fa fa-angle-down second_icon"></i>
                </div>
              </div> -->
              <!-- <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                <div class="jp_form_exper_wrapper">
                  <i class="fa fa-dot-circle-o first_icon"></i
                  ><select :value="locale" @change="onChangeLanguage">
                    <option
                      v-for="(item, index) in locales"
                      :key="index"
                      :label="item.label"
                      :value="item.value"
                    /></select
                  ><i class="fa fa-angle-down second_icon"></i>
                </div>
              </div> -->
              <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                <div class="jp_form_btn_wrapper">
                  <ul>
                    <li>
                      <a href="/#recentJob" @click="filterWork(itemFilter)"
                        ><i class="fa fa-search"></i>
                        {{ $t("button.search") }}</a
                      >
                      <!-- <nuxt-link
                        :to="{
                          path: '/',
                        }"
                        @click="filterWork(itemFilter)"
                        tag="a"
                        ><i class="fa fa-search"></i>
                        {{ $t("button.search") }}</nuxt-link
                      > -->
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                <div class="jp_form_btn_wrapper">
                  <ul>
                    <li>
                      <a href="/#recentJob" @click="resetFilter(itemFilter)"
                        ><i class="fa fa-rotate-right"></i>
                        {{ $t("button.reset") }}</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="jp_banner_main_jobs_wrapper">
              <div class="jp_banner_main_jobs">
                <ul>
                  <li>
                    <i class="fa fa-tags"></i> {{ $t("trendingKeyWords") }} :
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
    <div class="jp_banner_jobs_categories_wrapper">
      <div class="container">
        <div
          class="
            jp_top_jobs_category_wrapper
            jp_job_cate_left_border
            jp_job_cate_left_border_bottom
          "
          v-for="item in pagingCategory.data"
          :key="item.id"
        >
          <div class="jp_top_jobs_category">
            <i class="fa fa-code"></i>
            <h3>
              <a href="#">{{ item.categoryName || "---" }}</a>
            </h3>
            <p>({{ item.count || 0 }} {{ $t("trandingJobs.jobs") }})</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { CampaignGroupCategory } from "@/model/campaign-model";
import { FilterModel } from "@/model/filter-model";
import toast from "@/mixins/toast";
import ButtonName from "@/constant/button-name";
import CampaignService from "@/services/campaignService";

export default {
  setup() {},
  props: {
    pagingModel: {
      type: Object,
      default: () => {
        const page = new CampaignGroupCategory();
        return page;
      },
    },
    filterModel: {
      type: Object,
      default: () => {
        const filter = new FilterModel();
        return filter;
      },
    },
  },
  mixins: [toast],
  data() {
    return {
      itemFilter: this.filterModel,
      location: [
        {
          id: 1,
          name: "Hồ Chí Minh",
        },
        {
          id: 2,
          name: "Hà Nội",
        },
        {
          id: 3,
          name: "Đà Nẵng",
        },
      ],
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
      experience: [1, 2, 3, 4, 5],
      pagingCategory: this.pagingModel,
    };
  },
  methods: {
    async getListCategory() {
      try {
        const result = await CampaignService.getGroupCategory(
          this.pagingCategory.pageNum,
          6
        );
        if (result.isError) {
          this.showToastMessage(ButtonName.TOAST_ERROR, result.errorMessage);
          this.pagingCategory = new CampaignGroupCategory();
        } else {
          this.pagingCategory = result || {};
        }
      } catch (error) {
        this.showToastMessage(ButtonName.TOAST_ERROR, error?.message);
      }
    },

    onChangeLanguage(locale) {
      this.$store.commit("lang/set", locale);
    },

    ...mapActions({
      filterWork: "filter/filterWork",
      resetFilter: "filter/resetFilter",
    }),
  },
  computed: {
    ...mapState(["filter"]),
    ...mapState("lang", ["locales", "locale"]),
  },
  watch: {
    "$store.state.filter.filterItem"(value) {
      this.itemFilter = { ...value };
    },
  },
  created() {
    this.getListCategory();
  },
};
</script>