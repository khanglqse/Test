export const state = () => ({
    filterItem: {
        keyword: "",
        location: 0,
        experience: 0
    }
})

export const actions = {
    filterWork({ commit }, data) {
        commit("getFilter", data)
    }
}

export const mutations = {
    getFilter: (state, data) => state.filterItem = {...data}
}