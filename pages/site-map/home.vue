<template>
  <div>
    <SubHeader></SubHeader>

    <div class="jp_listing_single_main_wrapper" id="site-map-detail">
      <div class="container">
        <div class="row">
          <div
            class="col-lg-12 col-md-12 col-sm-12 col-xs-12"
            style="display: flex; justify-content: center"
          >
            <div class="site-parent">
              <p class="home-site">{{ siteMap[0].name }}</p>
            </div>
          </div>
          <div
            class="col-lg-12 col-md-12 col-sm-12 col-xs-12"
            style="padding: 0"
          >
            <div class="site-parent row">
              <div v-for="item in siteMap[0].listChild" :key="item.name">
                <div class="col-lg-2 col-md-5 col-sm-12 col-xs-12 margin-site">
                  <div class="line-row">
                    <p
                      class="site-child flex items-center justify-items-center"
                    >
                      {{ item.name }}
                    </p>
                    <div
                      v-for="subChild in item.listSubChild"
                      :key="subChild.name"
                    >
                      <div class="site-sub-child">
                        <p class="site-line"></p>
                        <p>{{ subChild.name }}</p>
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
  </div>
</template>

<script>
import SubHeader from "~/components/SubHeader.vue";
export default {
  components: { SubHeader },
  props: {},
  data() {
    return {
      siteMap: [
        {
          name: "Home Page",
          listChild: [
            {
              name: "Publisher",
              listSubChild: [
                { name: "Hệ sinh thái publisher" },
                { name: "Cẩm nang cho publisher" },
                { name: "Chính sách publisher" },
              ],
            },
            {
              name: "Advertiser",
              listSubChild: [
                { name: "Hệ sinh thái Advertiser" },
                { name: "Cẩm nang cho Advertiser" },
              ],
            },
            {
              name: "Góc chia sẻ",
              listSubChild: [
                { name: "Blogs" },
                { name: "Tin tức và sự kiện" },
                { name: "Reviews" },
                { name: "FAQs" },
              ],
            },
            {
              name: "Giới thiệu công ty",
              listSubChild: [
                { name: "Giới thiệu chung" },
                { name: "Giới thiệu ban lãnh đạo" },
                { name: "Lịch sử" },
                { name: "Thành tựu" },
                { name: "Tuyển dụng" },
              ],
            },
            {
              name: "Chăm sóc khách hàng",
              listSubChild: [{ name: "Hỏi đáp" }, { name: "Liên hệ" }],
            },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
@import url("../../assets/css/campain/style_II.css");
@import url("../../assets/css/custom-css/site-map.css");

#site-map-detail {
  font-family: Montserrat, sans-serif;
}
</style>
  