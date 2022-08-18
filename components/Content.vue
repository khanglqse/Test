<template src="./Content.html"></template>

<script lang="ts">
import Vue from "vue";
import CampaignService from "../services/campaignService";

export default Vue.extend({
  props: {},
  data() {
    return {
      listCampain: [
        {
          img: "job_post_img1.jpg",
          title: "HTML Developer (1 - 2 Yrs Exp.)",
          description: "Webstrot Technology Pvt. Ltd.",
          salaryDescription: "$12K - 15k P.A.",
          address: "Caliphonia, PO 455001",
        },
        {
          img: "job_post_img2.jpg",
          title: "HTML Developer (1 - 2 Yrs Exp.)",
          description: "Webstrot Technology Pvt. Ltd.",
          salaryDescription: "$12K - 15k P.A.",
          address: "Caliphonia, PO 455001",
        },
        {
          img: "job_post_img3.jpg",
          title: "HTML Developer (1 - 2 Yrs Exp.)",
          description: "Webstrot Technology Pvt. Ltd.",
          salaryDescription: "$12K - 15k P.A.",
          address: "Caliphonia, PO 455001",
        },
        {
          img: "job_post_img4.jpg",
          title: "HTML Developer (1 - 2 Yrs Exp.)",
          description: "Webstrot Technology Pvt. Ltd.",
          salaryDescription: "$12K - 15k P.A.",
          address: "Caliphonia, PO 455001",
        },
      ],
      listHiring: [
        {
          img: "hiring_img1.png",
          title: "Akshay INC.",
          city: "(NewYork)",
          open: "4 Opening",
        },
        {
          img: "hiring_img2.png",
          title: "Akshay INC.",
          city: "(NewYork)",
          open: "4 Opening",
        },
        {
          img: "hiring_img3.png",
          title: "Akshay INC.",
          city: "(NewYork)",
          open: "4 Opening",
        },
        {
          img: "hiring_img4.png",
          title: "Akshay INC.",
          city: "(NewYork)",
          open: "4 Opening",
        },
      ],
    };
  },
  methods: {
    async getListCampaign() {
      const result = CampaignService.getListCampaign();
      console.log(result);
    },
  },
  created() {
    // this.getListCampaign();
  },
});
</script>
