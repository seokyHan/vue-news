import { fetchUserInfo,
         fetchItemInfo,
         fetchList } from '../api/index'

export default {
    fetchUser({ commit }, payload) {
      return fetchUserInfo(payload)
        .then(({data}) => {
          commit('setUser', data)
        })
        .catch(error => {
          console.log(error)
        })
    },
    fetchItem({ commit }, payload) {
      return fetchItemInfo(payload)
        .then(({data}) => {
          commit('setItem', data)
        })
        .catch(error => {
          console.log(error)
        }) 
    },
    FETCH_LIST({commit}, pageName){
      return fetchList(pageName)
        .then(response => {
          commit('setList', response.data)
          return response
        })
        .catch(error => console.log(error))
    }
  }