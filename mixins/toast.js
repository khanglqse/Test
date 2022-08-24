import ButtonName from "@/constant/button-name";

export default {
    data() {
        return {
            title: "Toast",
            buttonName: ButtonName
        }
    },
    methods: {
        /**
         * Show toast message after completed action
         * @param {*} type 
         * @param {*} message 
         * Time create: 22/12/2020
         */
        showToastMessage(type, message) {
            const toastConfig = {
                duration: 3000
            };

            switch (type) {
                case ButtonName.TOAST_INFO:
                    // Show info
                    // this.$toasted.info(message, toastConfig);
                    this.$toasted.info(message, toastConfig);
                    break;
                case ButtonName.TOAST_SUCCESS:
                    // Show success
                    this.$toasted.success(message, toastConfig);
                    break;
                case ButtonName.TOAST_ERROR:
                    // Show error
                    this.$toasted.error(message, toastConfig);
                    break;
                case ButtonName.TOAST_WARNING:
                    // Show error
                    this.$toasted.show(message, toastConfig);
                    break;
                default:
                    break;
            }
        }
    }
}