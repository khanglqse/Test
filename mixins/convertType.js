export default {
    data() {
        return {
            title: "Convert Type",
        }
    },
    methods: {
        covertCurrency(item) {
            const val = (item / 1).toFixed(0).replace(",", "");
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        },
    }
}