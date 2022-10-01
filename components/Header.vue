<template>
  <div class="jp_top_header_img_wrapper">
    <div class="jp_slide_img_overlay"></div>
    <div class="gc_main_menu_wrapper">
      <div class="container-fluid">
        <div class="row">
          <div
            class="
              col-lg-1 col-md-1 col-sm-12 col-xs-12
              hidden-xs hidden-sm
              full_width
            "
          >
            <div class="gc_header_wrapper">
              <div class="gc_logo">
                <a href="index-2.html" aria-label="index2">
                  <img
                    src="~/assets/css/images/header/mass-logo.jpg"
                    alt="Logo"
                    title="Job Pro"
                    class="img-responsive"
                  />
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12 center_responsive">
            <div class="header-area hidden-menu-bar stick" id="sticker">
              <!-- mainmenu start -->
              <div class="mainmenu">
                <div class="gc_right_menu">
                  <ul>
                    <li>
                      <div id="search_open" class="gc_search_box">
                        <input type="text" placeholder="Search here" />
                        <button aria-label="search">
                          <i class="fa fa-search" aria-hidden="true"></i>
                        </button>
                      </div>
                    </li>
                  </ul>
                </div>
                <ul class="float_left">
                  <li class="has-mega gc_main_navigation">
                    <a href="#" class="gc_main_navigation">
                      {{ $t("menuHeader.publisher") }}&nbsp;<i
                        class="fa fa-angle-down"
                      ></i
                    ></a>
                    <!-- mega menu start -->
                    <ul>
                      <li class="parent">
                        <!-- <a href="index-2.html">Home1</a> -->
                        <nuxt-link to="/"> Publisher </nuxt-link>
                      </li>
                    </ul>
                  </li>
                  <li class="has-mega gc_main_navigation">
                    <a href="#" class="gc_main_navigation">
                      {{ $t("menuHeader.advertiser") }}&nbsp;<i
                        class="fa fa-angle-down"
                      ></i
                    ></a>
                    <!-- mega menu start -->
                    <ul>
                      <li class="parent">
                        <a href="listing_left.html">Listing-Left</a>
                      </li>
                      <li class="parent">
                        <a href="listing_right.html">Listing-Right</a>
                      </li>
                      <li class="parent">
                        <a href="listing_single.html">Listing-Single</a>
                      </li>
                    </ul>
                  </li>
                  <li class="parent gc_main_navigation">
                    <a href="#" class="gc_main_navigation"
                      >{{ $t("menuHeader.sharedCorner") }} &nbsp;<i
                        class="fa fa-angle-down"
                      ></i
                    ></a>
                    <!-- sub menu start -->
                    <ul>
                      <li class="parent">
                        <a href="company_listing.html">Company-Listing</a>
                      </li>
                      <li class="parent">
                        <a href="company_listing_single.html">Company-Single</a>
                      </li>
                      <li class="parent">
                        <a href="candidate_listing.html">candidate-Listing</a>
                      </li>
                      <li class="parent">
                        <a href="candidate_profile.html">candidate-Profile</a>
                      </li>
                    </ul>
                    <!-- sub menu end -->
                  </li>
                  <li class="has-mega gc_main_navigation">
                    <a href="#" class="gc_main_navigation">
                      {{ $t("menuHeader.companyIntroduction") }}&nbsp;<i
                        class="fa fa-angle-down"
                      ></i
                    ></a>
                    <!-- mega menu start -->
                    <ul>
                      <li class="parent">
                        <nuxt-link to="/site-map/home#site-map-detail">
                          Sơ đồ trang web
                        </nuxt-link>
                      </li>
                    </ul>
                  </li>
                  <li class="gc_main_navigation parent">
                    <a href="#" class="gc_main_navigation"
                      >{{ $t("menuHeader.customerCare") }}&nbsp;<i
                        class="fa fa-angle-down"
                      ></i
                    ></a>
                    <!-- Contact menu start -->
                    <ul>
                      <li class="parent">
                        <a href="qna.html">{{ $t("menu.qna") }}</a>
                      </li>
                      <li class="parent">
                        <nuxt-link to="/customer-care/contact-us"
                          >{{ $t("menu.contactUs") }}
                        </nuxt-link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <!-- mainmenu end -->
              <!-- mobile menu area start -->
              <header class="mobail_menu">
                <div class="container-fluid">
                  <div class="row">
                    <div class="col-xs-6 col-sm-6">
                      <div class="gc_logo">
                        <a href="index-2.html" aria-label="index2">
                          <!-- <img
                            src="images/header/logo.png"
                            alt="Logo"
                            title="Grace Church"
                        /> -->
                        </a>
                      </div>
                    </div>
                    <div class="col-xs-6 col-sm-6">
                      <div class="cd-dropdown-wrapper">
                        <p
                          class="house_toggle"
                          @click="showMenuMobile()"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            version="1.1"
                            id="Capa_1"
                            x="0px"
                            y="0px"
                            viewBox="0 0 31.177 31.177"
                            style="enable-background: new 0 0 31.177 31.177"
                            xml:space="preserve"
                            width="25px"
                            height="25px"
                          >
                            <g>
                              <g>
                                <path
                                  class="menubar"
                                  d="M30.23,1.775H0.946c-0.489,0-0.887-0.398-0.887-0.888S0.457,0,0.946,0H30.23    c0.49,0,0.888,0.398,0.888,0.888S30.72,1.775,30.23,1.775z"
                                  fill="#ffffff"
                                />
                              </g>
                              <g>
                                <path
                                  class="menubar"
                                  d="M30.23,9.126H12.069c-0.49,0-0.888-0.398-0.888-0.888c0-0.49,0.398-0.888,0.888-0.888H30.23    c0.49,0,0.888,0.397,0.888,0.888C31.118,8.729,30.72,9.126,30.23,9.126z"
                                  fill="#ffffff"
                                />
                              </g>
                              <g>
                                <path
                                  class="menubar"
                                  d="M30.23,16.477H0.946c-0.489,0-0.887-0.398-0.887-0.888c0-0.49,0.398-0.888,0.887-0.888H30.23    c0.49,0,0.888,0.397,0.888,0.888C31.118,16.079,30.72,16.477,30.23,16.477z"
                                  fill="#ffffff"
                                />
                              </g>
                              <g>
                                <path
                                  class="menubar"
                                  d="M30.23,23.826H12.069c-0.49,0-0.888-0.396-0.888-0.887c0-0.49,0.398-0.888,0.888-0.888H30.23    c0.49,0,0.888,0.397,0.888,0.888C31.118,23.43,30.72,23.826,30.23,23.826z"
                                  fill="#ffffff"
                                />
                              </g>
                              <g>
                                <path
                                  class="menubar"
                                  d="M30.23,31.177H0.946c-0.489,0-0.887-0.396-0.887-0.887c0-0.49,0.398-0.888,0.887-0.888H30.23    c0.49,0,0.888,0.398,0.888,0.888C31.118,30.78,30.72,31.177,30.23,31.177z"
                                  fill="#ffffff"
                                />
                              </g>
                            </g>
                          </svg>
                        </p>
                        <nav class="cd-dropdown" :class="classShowMenuMobile">
                          <h2>
                            <a href="#">Job<span>Pro</span></a>
                          </h2>
                          <a href="#0" class="cd-close">Close</a>
                          <ul class="cd-dropdown-content">
                            <li>
                              <form class="cd-search">
                                <input type="search" placeholder="Search..." />
                              </form>
                            </li>
                            <li class="has-children">
                              <a href="#">Home</a>

                              <ul class="cd-secondary-dropdown is-hidden">
                                <li class="go-back"><a href="#0">Menu</a></li>
                                <!-- .has-children -->
                              </ul>
                              <!-- .cd-secondary-dropdown -->
                            </li>
                            <!-- .has-children -->

                            <li class="has-children">
                              <a href="#">Listing</a>

                              <ul class="cd-secondary-dropdown is-hidden">
                                <li class="go-back"><a href="#0">Menu</a></li>
                                <li>
                                  <a href="listing_left.html">listing-Left</a>
                                </li>
                                <!-- .has-children -->

                                <li>
                                  <a href="listing_right.html">listing-Right</a>
                                </li>
                                <!-- .has-children -->

                                <li>
                                  <a href="listing_single.html"
                                    >listing-Single</a
                                  >
                                </li>
                                <!-- .has-children -->
                              </ul>
                              <!-- .cd-secondary-dropdown -->
                            </li>
                            <!-- .has-children -->
                            <li class="has-children">
                              <a href="#">candidates</a>

                              <ul class="cd-secondary-dropdown is-hidden">
                                <li class="go-back"><a href="#0">Menu</a></li>
                                <li>
                                  <a href="company_listing.html"
                                    >Company-Listing</a
                                  >
                                </li>
                                <li>
                                  <a href="company_listing_single.html"
                                    >Company-Single</a
                                  >
                                </li>
                                <li>
                                  <a href="candidate_listing.html"
                                    >candidate-Listing</a
                                  >
                                </li>
                                <li>
                                  <a href="candidate_profile.html"
                                    >candidate-Profile</a
                                  >
                                </li>
                                <!-- .has-children -->
                              </ul>
                              <!-- .cd-secondary-dropdown -->
                            </li>
                            <li class="has-children">
                              <a href="#">Pages</a>

                              <ul class="cd-secondary-dropdown is-hidden">
                                <li class="go-back"><a href="#0">Menu</a></li>
                                <li><a href="about.html">About-Us</a></li>
                                <li><a href="404_error.html">404</a></li>
                                <li>
                                  <a href="add_postin.html">Add-Posting</a>
                                </li>
                                <li><a href="login.html">Login</a></li>
                                <li><a href="register.html">Register</a></li>
                                <li><a href="pricing.html">Pricing</a></li>
                                <!-- .has-children -->
                              </ul>
                              <!-- .cd-secondary-dropdown -->
                            </li>
                            <!-- .has-children -->
                            <li class="has-children">
                              <a href="#">Blog</a>

                              <ul class="cd-secondary-dropdown is-hidden">
                                <li class="go-back"><a href="#0">Menu</a></li>
                                <li>
                                  <a href="blog_left.html">Blog-Left</a>
                                </li>
                                <!-- .has-children -->

                                <li>
                                  <a href="blog_right.html">Blog-Right</a>
                                </li>
                                <!-- .has-children -->

                                <li>
                                  <a href="blog_single_left.html"
                                    >Blog-Single-Left</a
                                  >
                                </li>
                                <!-- .has-children -->

                                <li>
                                  <a href="blog_single_right.html"
                                    >Blog-Single-Left</a
                                  >
                                </li>
                                <!-- .has-children -->
                              </ul>
                              <!-- .cd-secondary-dropdown -->
                            </li>
                            <!-- .has-children -->
                            <li>
                              <a href="contact.html">Contact</a>
                            </li>
                            <li>
                              <a href="register.html">Sign Up</a>
                            </li>
                            <li>
                              <a href="login.html">Login</a>
                            </li>
                          </ul>
                          <!-- .cd-dropdown-content -->
                        </nav>
                        <!-- .cd-dropdown -->
                      </div>
                    </div>
                  </div>
                </div>
                <!-- .cd-dropdown-wrapper -->
              </header>
            </div>
          </div>
          <!-- mobile menu area end -->
          <div
            class="col-lg-3 col-md-3 col-sm-12 col-xs-12 hidden-sm hidden-xs"
          >
            <div class="jp_navi_right_btn_wrapper">
              <ul>
                <li>
                  <a
                    href="https://brave-hill-05c371b00.1.azurestaticapps.net/"
                    target="_blank"
                    ><i class="fa fa-user"></i>&nbsp;
                    {{ $t("button.getStart") }}</a
                  >
                </li>
                <li>
                  <!-- <a href="login.html"
                    ><i class="fa fa-sign-in"></i>&nbsp; LOGIN</a
                  > -->

                  <div class="multi-language">
                    <select @change="onChangeLanguage">
                      <option
                        v-for="(item, index) in locales"
                        :key="index"
                        :label="item.label"
                        :value="item.value"
                      />
                    </select>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <FilterJob></FilterJob> -->

    <!-- <HeaderPosting></HeaderPosting> -->
  </div>
</template>

<script>
import Logo from "@/components/Logo";
import { mapActions, mapState } from "vuex";
import FilterJob from "@/components/FilterJob";
import HeaderPosting from "@/components/header-posting/header-posting";

export default {
  components: {
    logo: Logo,
    FilterJob,
  },
  data() {
    return {
      scrollY: 0,
      isOpen: false,
      classShowMenuMobile: "",
    };
  },
  computed: {
    isSticky() {
      return this.scrollY > 10;
    },
    headerClassList() {
      return this.isSticky ? "bg-white shadow" : "";
    },
    navActionClassList() {
      return this.isSticky ? "gradient" : "bg-white text-gray-800";
    },
    navContentClassList() {
      let classList = this.isSticky ? "bg-white" : "bg-gray-100";
      if (!this.isOpen) {
        classList += ` hidden`;
      }
      return classList;
    },

    ...mapState("lang", ["locales", "locale"]),
  },
  methods: {
    onClick() {
      this.isOpen = false;
    },
    onScroll() {
      this.scrollY = window.scrollY;
    },
    onToggleClick() {
      this.isOpen = !this.isOpen;
    },

    showMenuMobile() {
      this.classShowMenuMobile = this.classShowMenuMobile
        ? ""
        : "dropdown-is-active";
    },

    onChangeLanguage(locale) {
      // this.$store.commit("lang/set", locale);
      this.$i18n.locale = locale.target.value;
    },
  },
  mounted() {
    this.scrollY = window.scrollY;
    document.addEventListener("click", this.onClick);
    document.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.onClick, true);
    document.removeEventListener("scroll", this.onScroll, true);
  },
};
</script>