export const state = () => ({
  id: 0,
  name: 'Khang',
  price: 0
})

export const actions = {
  updateName({commit}, data) {
    commit('setName', data)
  },
  setNameWithUpperCase({commit}, data) {
    commit('setName', data.toUpperCase())
  },
  fetchName({commit}, data) {
    // api call
    setTimeout(() => {
      commit('setName', `api called with ${data}`)
    }, 1000)
  }
}

export const mutations = {
  setName(state, data) {
    state.name = data
  }
}