<template>
  <div class="jp_cp_profile_main_wrapper" id="campaign-detail">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
          <div class="jp_cp_left_side_wrapper">
            <div class="jp_cp_left_pro_wallpaper">
              {{ campaign.imageUrl }}
              <nuxt-img
                :src="
                  campaign.imageUrl ||
                  '~/assets/css/images/content/career_img1.jpg'
                "
                alt="campaign-detail"
                width="300"
                height="auto"
                :key="campaign.imageUrl"
                format="webp"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
          <div class="jp_cp_right_side_wrapper">
            <div class="jp_cp_right_side_inner_wrapper">
              <h2>{{ $t("campaign.campaignDetail") }}</h2>
              <table>
                <tbody>
                  <tr>
                    <td class="td-w25">{{ $t("campaign.title") }}</td>
                    <td class="td-w10">:</td>
                    <td class="td-w65">{{ campaign.title || "---" }}</td>
                  </tr>
                  <tr>
                    <td class="td-w25">{{ $t("campaign.category") }}</td>
                    <td class="td-w10">:</td>
                    <td class="td-w65">{{ campaign.categoryName || "---" }}</td>
                  </tr>
                  <tr>
                    <td class="td-w25">{{ $t("campaign.location") }}</td>
                    <td class="td-w10">:</td>
                    <td class="td-w65">
                      {{ campaign.location || "---" }}
                    </td>
                  </tr>
                  <tr>
                    <td class="td-w25">{{ $t("campaign.company") }}</td>
                    <td class="td-w10">:</td>
                    <td class="td-w65">
                      {{ campaign.companyName || "---" }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12">
              <div class="jp_cp_accor_heading_wrapper">
                <h2>{{ $t("campaign.description") }}</h2>
                <p>
                  {{ campaign.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { CampaignModel } from "@/model/campaign-model";
import CampaignService from "@/services/campaignService";
import toast from "@/mixins/toast";
import ButtonName from "@/constant/button-name";

export default {
  name: "CampaignDetail",
  props: {
    campaignValue: {
      type: Object,
      default: () => {
        const item = new CampaignModel();
        return item;
      },
    },
  },
  data() {
    return {
      id: this.$route.query.campaign,
      campaign: this.campaignValue,
    };
  },
  mixins: [toast],
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
  },
  created() {
    this.getDetailCampaign();
    this.$refs["myid"];
  },
};
</script>

<style scoped>
@import url("../../assets/css/campain/style_II.css");
</style>