<template>
  <div>
    <SubHeader></SubHeader>

    <div class="jp_adp_main_section_wrapper" id="campaign-posting">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div class="jp_adp_form_heading_wrapper">
              <h2>{{ $t("candidate.detail") }}</h2>
            </div>
            <div class="jp_adp_form_wrapper">
              <p>Họ và Tên <span class="text-red-500">*</span>:</p>
              <input
                type="text"
                placeholder="Họ và Tên"
                v-model="candidate.name"
              />
              <p v-if="formValid && !candidate.name" class="text-red-500">
                {{ $t("message.require") }}
              </p>
            </div>
            <div class="jp_adp_form_wrapper">
              <p>Giới tính:</p>
              <select v-model="candidate.gender">
                <option value="0">Chọn giới tính</option>
                <option value="1">Nam</option>
                <option value="2">Nữ</option>
                <option value="3">Khác</option>
              </select>
            </div>
            <!-- <div class="row">
              <div class="col-lg-6 col-md-6 col-md-6 col-xs-12">
                <div class="jp_adp_form_wrapper">
                  <input type="text" placeholder="Salary Min" />
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-md-6 col-xs-12">
                <div class="jp_adp_form_wrapper">
                  <input type="text" placeholder="Salary Max" />
                </div>
              </div>
            </div> -->
            <div class="jp_adp_form_wrapper">
              <p>Email:</p>
              <input
                type="text"
                placeholder="Email"
                v-model="candidate.email"
              />
              <p v-if="emailValid" class="text-red-500">
                {{ $t("message.emailNotCorrect") }}
              </p>
            </div>
            <div class="jp_adp_form_wrapper">
              <p>Số điện thoại <span class="text-red-500">*</span>:</p>
              <input
                type="text"
                placeholder="Số điện thoại"
                v-model="candidate.phone"
              />
              <p v-if="formValid && !candidate.phone" class="text-red-500">
                {{ $t("message.require") }}
              </p>
            </div>
            <div class="jp_adp_form_wrapper">
              <p>Ngày sinh:</p>
              <input
                type="text"
                placeholder="Ngày tháng năm sinh"
                v-model="candidate.birthday"
              />
            </div>
          </div>
          <!-- <div
            class="col-lg-6 col-md-6 col-sm-12 col-xs-12 bottom_line_Wrapper"
          >
            <div class="jp_adp_form_heading_wrapper">
              <p>{{ $t("candidate.require") }}</p>
            </div>
            <div class="jp_adp_form_wrapper">
              <select>
                <option>Job Category</option>
                <option>Job Category</option>
                <option>Job Category</option>
                <option>Job Category</option>
              </select>
            </div>
            <div class="jp_adp_form_wrapper">
              <select>
                <option>Job Type</option>
                <option>Job Type</option>
                <option>Job Type</option>
                <option>Job Type</option>
              </select>
            </div>
            <div class="jp_adp_form_wrapper">
              <input type="text" placeholder="Skills required" />
            </div>
            <div class="jp_adp_form_wrapper">
              <input type="text" placeholder="Joining facilities" />
            </div>
          </div> -->
          <!-- <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="jp_adp_textarea_main_wrapper">
              <textarea rows="7" placeholder="Job Description"></textarea>
            </div>
          </div> -->
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="jp_adp_choose_resume">
              <!-- <p>{{ $t("candidate.postCV") }}</p> -->
              <div class="custom-input">
                <span
                  ><i class="fa fa-upload"></i> &nbsp;{{
                    $t("candidate.postCV")
                  }}</span
                >
                <input type="file" name="resume" id="resume" />
              </div>
            </div>
          </div>
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="jp_adp_choose_resume_bottom_btn_post">
              <ul>
                <li>
                  <a @click="submitCandidateCV()"
                    ><i class="fa fa-plus-circle"></i>&nbsp;
                    {{ $t("candidate.submitCV") }}</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import { CandidateModel } from "@/model/candidate-model";
import CandidateService from "@/services/candidateService";
import ButtonName from "~/constant/button-name";
import toast from "@/mixins/toast";
import validForm from "@/mixins/validForm";
import SubHeader from "~/components/SubHeader.vue";

export default {
    name: "CampaignPosting",
    props: {
        candidateModel: {
            type: Object,
            default: () => {
                const candidate = new CandidateModel();
                return candidate;
            },
        },
    },
    mixins: [toast, validForm],
    data() {
        return {
            candidate: this.candidateModel,
            formValid: false,
            emailValid: false,
        };
    },
    methods: {
        async submitCandidateCV() {
            this.formValid = false;
            this.emailValid = false;
            const messageResult = {
                true: ButtonName.TOAST_SUCCESS,
                false: ButtonName.TOAST_ERROR,
            };
            if (this.validationForm()) {
                this.formValid = true;
                this.showToastMessage(ButtonName.TOAST_ERROR, this.$i18n.t("message.someFieldRequire"));
            }
            else if (this.validEmail() && this.candidate.email) {
                this.emailValid = true;
                this.showToastMessage(ButtonName.TOAST_ERROR, this.$i18n.t("message.emailNotCorrect"));
            }
            else {
                try {
                    const result = await CandidateService.submitCandidate(this.candidate);
                    if (result.success) {
                        this.candidate = new CandidateModel();
                    }
                    this.showToastMessage(messageResult[result.success], this.$i18n.t("message.submitSuccess"));
                }
                catch (error) {
                    this.showToastMessage(ButtonName.TOAST_ERROR, error?.message);
                }
            }
        },
        validationForm() {
            return !this.candidate.name || !this.candidate.phone;
        },
        validEmail() {
            return !this.validationEmail(this.candidate.email);
        },
    },
    components: { SubHeader }
};
</script>
  
<style scoped>
@import url("../../assets/css/campain/style_II.css");
</style>