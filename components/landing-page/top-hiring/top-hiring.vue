<template>
  <div class="jp_hiring_slider_wrapper">
    <div class="carousel theme flex">
      <div class="item flex-1" v-for="item in listHiring" :key="item.title">
        <div class="jp_hiring_content_main_wrapper">
          <div class="jp_hiring_content_wrapper">
            <img
              :src="'~/assets/css/images/content/' + item.img"
              alt="hiring_img"
            />
            <!-- <img
                              src="~/assets/css/images/content/hiring_img2.png"
                              alt="hiring_img"
                            /> -->
            <h4>{{ item.title }}</h4>
            <p>{{ item.city }}</p>
            <ul>
              <li>
                <a href="#">{{ item.open }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {},
  data() {
    return {
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
};
</script>