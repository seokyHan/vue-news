import axios from 'axios'

// HTTP  Request & Response setting
const config = {
    baseUrl: 'https://api.hnpwa.com/v0/'
}

// API Function
function fetchNewsList() {
    return axios.get(`${config.baseUrl}news/1.json`)
}

function fetchAskList() {
    return axios.get(`${config.baseUrl}ask/1.json`)
}

function fetchJobsList() {
    return axios.get(`${config.baseUrl}jobs/1.json`)
}

function fetchList(pageName) {
    return axios.get(`${config.baseUrl}${pageName}/1.json`)
}

function fetchUserInfo(username) {
    return axios.get(`${config.baseUrl}user/${username}.json`)
}

function fetchItemInfo(id) {
    return axios.get(`${config.baseUrl}item/${id}.json`)
}


export {
    fetchNewsList,
    fetchAskList,
    fetchJobsList,
    fetchUserInfo,
    fetchItemInfo,
    fetchList
}