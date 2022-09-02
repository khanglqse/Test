<template>
    <div class="jp_contact_form_main_wrapper">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="jp_contact_form_heading_wrapper">
                        <h2>{{ $t("contactUs.leaveMessage") }}</h2>
                    </div>
                </div>
                <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                    <div class="jp_contact_form_box">
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div class="jp_contact_inputs_wrapper">
                                <i class="fa fa-user"></i><input type="text" :placeholder="$t('contactUs.name')"
                                    v-model="contact.name">
                                <p v-if="formValid && !contact.name" class="text-red-500">
                                    {{ $t("message.require") }}
                                </p>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <div class="jp_contact_inputs_wrapper jp_contact_inputs3_wrapper">
                                <i class="fa fa-envelope"></i><input type="text" placeholder="Email *"
                                    v-model="contact.email">
                                <p v-if="formValid && !contact.email" class="text-red-500">
                                    {{ $t("message.require") }}
                                </p>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <div class="jp_contact_inputs_wrapper jp_contact_inputs3_wrapper">
                                <i class="fa fa-phone"></i><input type="text" :placeholder="$t('contactUs.phone')"
                                    v-model="contact.phone">
                                <p v-if="formValid && !contact.phone" class="text-red-500">
                                    {{ $t("message.require") }}
                                </p>
                            </div>
                        </div>
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div class="jp_contact_inputs_wrapper jp_contact_inputs3_wrapper">
                                <i class="fa fa-pencil-square-o"></i><input type="text"
                                    :placeholder="$t('contactUs.subject')" v-model="contact.subject">
                                <p v-if="formValid && !contact.subject" class="text-red-500">
                                    {{ $t("message.require") }}
                                </p>
                            </div>
                        </div>
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div class="jp_contact_inputs_wrapper jp_contact_inputs4_wrapper">
                                <i class="fa fa-text-height"></i><textarea rows="6"
                                    :placeholder="$t('contactUs.typeMessage')" v-model="contact.message"></textarea>

                                <p v-if="formValid && !contact.message" class="text-red-500">
                                    {{ $t("message.require") }}
                                </p>
                            </div>
                        </div>
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div class="jp_contact_form_btn_wrapper">
                                <ul>
                                    <li><a @click="submitContactForm()"><i class="fa fa-plus-circle"></i>&nbsp; {{
                                            $t("contactUs.sendBtn")
                                    }}</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <div class="jp_contact_right_box_wrapper">
                        <div class="jp_contact_form_add_heading_wrapper">
                            <h2>{{ $t("contactUs.contactUs") }}</h2>
                        </div>
                        <div class="jp_form_add_wrapper gc_map_add_wrapper1">
                            <div class="jp_map_location_icon_wrapper">
                                <i class="fa fa-map-marker"></i>
                            </div>
                            <div class="gc_map_location_icon_cont_wrapper">
                                <h3>{{ $t("contactUs.address") }}</h3>
                            </div>
                        </div>
                        <div class="jp_form_add_wrapper gc_map_add_wrapper2">
                            <div class="jp_map_location_icon_wrapper">
                                <i class="fa fa-phone"></i>
                            </div>
                            <div class="gc_map_location_icon_cont_wrapper gc_map_location_icon_cont_wrapper3">
                                <h3> +61 3 8376 6284</h3>
                            </div>
                        </div>
                        <div class="jp_form_add_wrapper gc_map_add_wrapper2">
                            <div class="jp_map_location_icon_wrapper">
                                <i class="fa fa-envelope"></i>
                            </div>
                            <div class="gc_map_location_icon_cont_wrapper gc_map_location_icon_cont_wrapper3">
                                <h3> info@yoursite.com</h3>
                            </div>
                        </div>
                        <div class="jp_form_add_wrapper gc_map_add_wrapper2">
                            <div class="jp_map_location_icon_wrapper">
                                <i class="fa fa-globe"></i>
                            </div>
                            <div class="gc_map_location_icon_cont_wrapper gc_map_location_icon_cont_wrapper3">
                                <h3> yoursite.com</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ContactUsModel } from "@/model/contact-us-model";
import CustomerCareService from "@/services/CustomerCareService";
import ButtonName from "~/constant/button-name";
import toast from "@/mixins/toast";
import validForm from "@/mixins/validForm";

export default {
    name: "ContactUs",
    props: {
        contactModel: {
            type: Object,
            default: () => {
                const contact = new ContactUsModel();
                return contact;
            },
        },
    },
    mixins: [toast, validForm],
    data() {
        return {
            contact: this.contactModel,
            formValid: false,
            emailValid: false,
        };
    },
    methods: {
        async submitContactForm() {
            this.formValid = false;
            this.emailValid = false;

            const messageResult = {
                true: ButtonName.TOAST_SUCCESS,
                false: ButtonName.TOAST_ERROR,
            };

            if (this.validationForm()) {
                this.formValid = true;
                this.showToastMessage(
                    ButtonName.TOAST_ERROR,
                    this.$i18n.t("message.someFieldRequire")
                );
            } else if (this.validEmail() && this.contact.email) {
                this.emailValid = true;
                this.showToastMessage(
                    ButtonName.TOAST_ERROR,
                    this.$i18n.t("message.emailNotCorrect")
                );
            } else {
                try {
                    const result = await CustomerCareService.submitContactUs(this.contact);
                    if (result.success) {
                        this.contact = new ContactUsModel();
                    }
                    this.showToastMessage(
                        messageResult[result.success],
                        this.$i18n.t("message.submitSuccess")
                    );
                } catch (error) {
                    this.showToastMessage(ButtonName.TOAST_ERROR, error?.message);
                }
            }
        },

        validationForm() {
            return !this.contact.name || !this.contact.phone || !contact.subject || !contact.message;
        },

        validEmail() {
            return !this.validationEmail(this.contact.email);
        },
    },
};
</script>
<style scoped>
@import url("../../assets/css/campain/style_II.css");
</style>