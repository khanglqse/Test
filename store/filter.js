const getDefaultState = () => {
    return {
        filterItem: {
            keyword: "",
            location: 0,
            experience: 0
        }
    };
}

const state = () => getDefaultState()

const actions = {
    filterWork({ commit }, data) {
        commit("getFilter", data)
    },

    resetFilter({ commit }) {
        commit("resetFilter")
    }
}

const mutations = {
    getFilter: (state, data) => state.filterItem = { ...data },

    resetFilter: state => Object.assign(state, getDefaultState())
}

export default {
    state,
    getters: {},
    actions,
    mutations
}