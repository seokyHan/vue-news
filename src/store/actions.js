import { fetchUserInfo,
         fetchItemInfo,
         fetchList } from '../api/index'

export default {
    fetchUser({ commit }, payload) {
      fetchUserInfo(payload)
        .then(({data}) => {
          commit('setUser', data)
        })
        .catch(error => {
          console.log(error)
        })
    },
    fetchItem({ commit }, payload) {
      fetchItemInfo(payload)
        .then(({data}) => {
          commit('setItem', data)
        })
        .catch(error => {
          console.log(error)
        }) 
    },
    FETCH_LIST({commit}, pageName){
      fetchList(pageName)
        .then(({data}) => commit('setList', data))
        .catch(error => console.log(error))
    }
  }