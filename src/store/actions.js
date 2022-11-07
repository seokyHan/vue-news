import { fetchUserInfo,
         fetchItemInfo,
         fetchList } from '../api/index'

export default {
    async fetchUser({ commit }, payload) {
      const response = await fetchUserInfo(payload)
      commit('setUser', response.data)
      return response
    },
    async fetchItem({ commit }, payload) {
      const response = await fetchItemInfo(payload)
      commit('setItem', response.data)
      return response
    },
    async FETCH_LIST({commit}, pageName){
      const response = await fetchList(pageName)
      commit('setList', response.data)
      return response
    }
  }