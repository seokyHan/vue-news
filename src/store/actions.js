import { fetchNewsList, 
         fetchJobsList, 
         fetchAskList, 
         fetchUserInfo,
         fetchItemInfo } from '../api/index'

export default {
    fetchNews({ commit }) {
      fetchNewsList()
        .then(({ data }) => {
          commit('setNews', data)
        })
        .catch(error => {
          console.log(error)
        })
    },
    fetchJobs({ commit }) {
      fetchJobsList()
        .then(({ data }) => {
          commit('setJobs', data)
        })
        .catch(error => {
          console.log(error);
        })
    },
    fetchAsk({ commit }) {
      fetchAskList()
        .then(({ data }) => {
          commit('setAsk', data)
        })
        .catch(error => {
          console.log(error)
        })
    },
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
    }
  }