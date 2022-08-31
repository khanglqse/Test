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
    }
}