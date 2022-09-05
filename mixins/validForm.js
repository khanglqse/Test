import moment from "moment";

export default {
    data() {
        return {
            title: "ValidForm",
        }
    },
    methods: {
        validationEmail(item) {
            const typeItem = item ? item.split("@") : [];
            return typeItem.length > 1;
        },

        convertDate(date) {
            return moment(new Date(date)).format("DD/MM/YYYY");
        },

        checkPhoneNumber(event) {
            if((event.keyCode < 48 || event.keyCode > 57) && event.keyCode !== 46) {
                event.preventDefault();
            }
        }
    }
}