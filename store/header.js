const state = () => ({
    title: "",
    url: "",
    listHeader: [
        {
            name: 'site-map-home',
            title: "Site Map",
            lang: "siteMap"
        },
        {
            name: 'job-id',
            title: "Campaign Detail",
            lang: "campaignDetail"
        }
    ]
});

const actions = {
    getTitle({ commit, state }, data) {
        const value = state.listHeader.find(value => value.name === data);
        commit("showHeaderPage", value)
    }
}

const mutations = {
    showHeaderPage: (state, data) => state.title = data?.lang || ""
}

export default {
    state,
    getters: {},
    actions,
    mutations
}