<template>
  <div class="jp_register_section_main_wrapper">
    <div class="jp_regis_left_side_box_wrapper">
      <div class="jp_regis_left_side_box">
        <img
          src="~/assets/css/images/content/regis_icon.png"
          alt="icon"
          class="inline"
        />
        <h4>{{ $t("userInfo.employer") }}</h4>
        <p>
          Các công ty đã đăng nhập có thể đăng bài mới<br />
          mời làm việc, tìm kiếm ứng viên ...
        </p>
        <ul>
          <li>
            <a href="#"
              ><i class="fa fa-plus-circle"></i> &nbsp;{{
                $t("button.registerAsCompany")
              }}</a
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="jp_regis_right_side_box_wrapper">
      <div class="jp_regis_right_img_overlay"></div>
      <div class="jp_regis_right_side_box">
        <img
          src="~/assets/css/images/content/regis_icon2.png"
          alt="icon"
          class="inline"
        />
        <h4>{{ $t("userInfo.candidate") }}</h4>
        <p>
          Các công ty đã đăng nhập có thể đăng bài mới<br />
          mời làm việc, tìm kiếm ứng viên ...
        </p>
        <ul>
          <li>
            <a href="#"
              ><i class="fa fa-plus-circle"></i> &nbsp;{{
                $t("button.registerAsCompany")
              }}</a
            >
          </li>
        </ul>
      </div>
      <div class="jp_regis_center_tag_wrapper">
        <p>OR</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media (max-width: 767px) {
  .jp_regis_left_side_box_wrapper,
  .jp_regis_right_side_box_wrapper {
    float: none;
    width: 100%;
  }
}
</style>