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
    }
}