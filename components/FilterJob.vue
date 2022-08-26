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
              <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <input
                  type="text"
                  placeholder="Từ khóa ví dụ: (Tiêu đề Công Việc, Nội dung)"
                  v-model="itemFilter.keyword"
                />
              </div>
              <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                <div class="jp_form_location_wrapper">
                  <i class="fa fa-dot-circle-o first_icon"></i
                  ><select v-model="itemFilter.location">
                    <option :value="0">Lựa chọn</option>
                    <option
                      v-for="item in location"
                      :key="item.id"
                      :value="item.id"
                    >
                      {{ item.name }}
                    </option></select
                  ><i class="fa fa-angle-down second_icon"></i>
                </div>
              </div>
              <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
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
              </div>
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
                      <a href="#" @click="filterWork(itemFilter)"
                        ><i class="fa fa-search"></i>
                        {{ $t("button.search") }}</a
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
          v-for="item in pagingCategory.items"
          :key="item.id"
        >
          <div class="jp_top_jobs_category">
            <i class="fa fa-code"></i>
            <h3>
              <a href="#">{{ item.title }}</a>
            </h3>
            <p>(240 {{ $t("trandingJobs.jobs") }})</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { PagingModel } from "@/model/paging-model";
import toast from "@/mixins/toast";
import ButtonName from "@/constant/button-name";
import CategoryService from "@/services/categoryService";

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
  mixins: [toast],
  data() {
    return {
      itemFilter: {
        keyword: "",
        location: 0,
        experience: 0,
      },
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
      experience: [1, 2, 3, 4, 5],
      pagingCategory: this.pagingModel,
    };
  },
  methods: {
    async getListCategory() {
      try {
        const result = await CategoryService.getListCategory(
          this.pagingCategory.pageNum,
          6
        );
        if (result.isError) {
          this.showToastMessage(ButtonName.TOAST_ERROR, result.errorMessage);
          this.pagingCategory = new PagingModel();
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
    }),
  },
  computed: {
    ...mapState(["filter"]),
    ...mapState("lang", ["locales", "locale"]),
  },
  created() {
    this.getListCategory();
  },
};
</script>