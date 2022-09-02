<template>
    <div class="jp_tittle_main_wrapper">
        <div class="jp_tittle_img_overlay"></div>
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="jp_tittle_heading_wrapper">
                        <div class="jp_tittle_heading">
                            <h2> {{ $t("contactUs.contactUs") }}</h2>
                        </div>
                        <div class="jp_tittle_breadcrumb_main_wrapper">
                            <div class="jp_tittle_breadcrumb_wrapper">
                                <ul>
                                    <li>
                                        <nuxt-link to="/" tag="a">{{ $t("menuHeader.home") }} </nuxt-link><i
                                            class="fa fa-angle-right"></i>
                                    </li>
                                    <li><a href="#">{{ $t("menuHeader.customerCare") }}</a> <i
                                            class="fa fa-angle-right"></i></li>
                                    <li>{{ $t("contactUs.contactUs") }}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import url("../../../assets/css/campain/style_II.css");
</style>