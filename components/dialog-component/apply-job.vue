<template>
  <div>
    <md-dialog
      :md-active.sync="dialogModel.isShow"
      class="dialog-notify"
      :md-click-outside-to-close="false"
    >
      <md-dialog-title>{{ dialogModel.title }}</md-dialog-title>

      <md-dialog-content>
        <div class="flex items-center">
          <p v-for="item in listTypeForm" :key="item.name" class="form-option">
            <input
              type="radio"
              :value="item.value"
              v-model="candidateForm.isForm"
            />{{ item.name }}
          </p>
        </div>

        <div v-if="candidateForm.isForm == 1">
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
                  v-model="candidateForm.name"
                  class="form-control"
                />
                <p v-if="formValid && !candidateForm.name" class="text-red-500">
                  {{ $t("message.require") }}
                </p>
              </div>
              <div class="jp_adp_form_wrapper">
                <p>Giới tính <span class="text-red-500">*</span>:</p>
                <select v-model="candidateForm.gender" class="form-control">
                  <option value="">Chọn giới tính</option>
                  <option value="Nam">Nam</option>
                  <option value="Nữ">Nữ</option>
                  <option value="Other">Khác</option>
                </select>

                <p
                  v-if="formValid && !candidateForm.gender"
                  class="text-red-500"
                >
                  {{ $t("message.require") }}
                </p>
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
                <p>Email <span class="text-red-500">*</span>:</p>
                <input
                  type="text"
                  placeholder="Email"
                  v-model="candidateForm.email"
                  class="form-control"
                />
                <p v-if="emailValid" class="text-red-500">
                  {{ $t("message.emailNotCorrect") }}
                </p>
                <p
                  v-if="formValid && !candidateForm.email"
                  class="text-red-500"
                >
                  {{ $t("message.require") }}
                </p>
              </div>
              <div class="jp_adp_form_wrapper">
                <p>Số điện thoại <span class="text-red-500">*</span>:</p>
                <input
                  type="text"
                  placeholder="Số điện thoại"
                  v-model="candidateForm.phone"
                  class="form-control"
                />
                <p
                  v-if="formValid && !candidateForm.phone"
                  class="text-red-500"
                >
                  {{ $t("message.require") }}
                </p>
              </div>
              <div class="jp_adp_form_wrapper">
                <p>Ngày sinh:</p>
                <input
                  type="date"
                  placeholder="Ngày tháng năm sinh"
                  v-model="candidateForm.birthday"
                  class="form-control"
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
          </div>
        </div>

        <div v-else>
          <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div class="jp_adp_form_wrapper">
                <p>Họ và Tên <span class="text-red-500">*</span>:</p>
                <input
                  type="text"
                  placeholder="Họ và Tên"
                  v-model="candidateForm.name"
                  class="form-control"
                />
                <p v-if="formValid && !candidateForm.name" class="text-red-500">
                  {{ $t("message.require") }}
                </p>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div class="jp_adp_form_wrapper">
                <p>Số điện thoại <span class="text-red-500">*</span>:</p>
                <input
                  type="text"
                  placeholder="Số điện thoại"
                  v-model="candidateForm.phone"
                  class="form-control"
                />
                <p
                  v-if="formValid && !candidateForm.phone"
                  class="text-red-500"
                >
                  {{ $t("message.require") }}
                </p>
              </div>
            </div>
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div class="jp_adp_choose_resume">
                <!-- <p>{{ $t("candidate.postCV") }}</p> -->
                <div class="custom-input">
                  <span class="upload-button"
                    ><i class="fa fa-upload"></i> &nbsp;{{
                      $t("candidate.postCV")
                    }}</span
                  >
                  <input
                    type="file"
                    name="resume"
                    id="resume"
                    @change="onFileChange($event)"
                  />
                </div>
              </div>
            </div>
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div class="jp_adp_choose_resume">
                <!-- <p>{{ $t("candidate.postCV") }}</p> -->
                <div class="custom-input flex" v-if="candidateForm.file?.name">
                  <span class="icon-button" @click="removeFile()">
                    <i class="fa fa-close"></i>
                  </span>
                  <p>{{candidateForm.file?.name}}</p>
                </div>
              </div>
            </div>

            {{candidateForm.file}}
          </div>
        </div>
      </md-dialog-content>

      <md-dialog-actions>
        <button class="btn btn-default mr-6" @click="onCancel()">
          {{ $t("button.close") }}
        </button>
        <button class="btn btn-primary mr-6" @click="onConfirm()">
          {{ $t("candidate.submitCV") }}
        </button>
      </md-dialog-actions>
    </md-dialog>
  </div>
</template>
  
<script>
import Vue from "vue";
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import { CandidateModel } from "@/model/candidate-model";
import { DialogModel } from "@/model/dialog-model";
import toast from "@/mixins/toast";
import ButtonName from "@/constant/button-name";
import validForm from "@/mixins/validForm";
import { v4 as uuidv4 } from "uuid";

Vue.use(VueMaterial);

export default {
  name: "ApplyJobDialog",
  props: {
    dialogModel: {
      type: Object,
      default: () => {
        const dialog = new DialogModel();
        return dialog;
      },
    },
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
      candidateForm: this.candidateModel,
      listTypeForm: [
        { name: "Form", value: 1 },
        { name: "Upload CVs", value: 2 },
      ],
      formValid: false,
      emailValid: false,
    };
  },
  methods: {
    onConfirm() {
      if (this.validationForm()) {
        this.formValid = true;
        this.showToastMessage(
          ButtonName.TOAST_ERROR,
          this.$i18n.t("message.someFieldRequire")
        );
      } else if (this.validEmail() && this.candidateForm.email) {
        this.emailValid = true;
        this.showToastMessage(
          ButtonName.TOAST_ERROR,
          this.$i18n.t("message.emailNotCorrect")
        );
      } else {
        this.candidateForm.recordId = this.candidateForm.id = uuidv4();
        this.candidateForm.isSubmit = 1;
        this.$emit("confirm", this.candidateForm);
      }
    },

    onFileChange(event) {
      const data = new FormData();
      const file = event.target.files[0];

      // data.append('name', event.target.files[0].name);
      // data.append('recordId', this.candidateForm.recordId);
      // data.append('type', 'candidate');
      data.append('file', file);

      if (event.target.files[0].size > 52428800) {
        this.showToastMessage(
          ButtonName.TOAST_ERROR,
          this.$i18n.t("candidate.fileSize50")
        );
      } else {
        this.candidateForm.file = data;
      }
    },

    removeFile() {
      this.candidateForm.file = [];
    },

    onCancel() {
      this.candidateForm.isSubmit = 0;
      this.$emit("cancel", this.candidateForm);
    },

    onReset() {
      this.candidateForm = new CandidateModel();
    },

    validationForm() {
      return !this.candidateForm.name || !this.candidateForm.phone;
    },

    validEmail() {
      return !this.validationEmail(this.candidateForm.email);
    },
  },
  watch: {
    "candidateForm.isForm"(value) {
      this.candidateForm = new CandidateModel();
      this.formValid = false,
      this.emailValid = false,
      this.candidateForm.isForm = value;
    },
  },
};
</script>
  
<style>
@import "@/assets/css/custom-css/custom-dialog.css";
@import "@/assets/css/custom-css/custom-button.css";
</style>
  