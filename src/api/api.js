import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3000/api'

// 数据拦截
axios.interceptors.response.use(function (response) {
  return response.data
}, function (error) {
  return Promise.reject(error)
})

export function getSliders () {
  return axios.get('getSliders')
}
export function getCateList () {
  return axios.get('getCateList')
}
export function getBrand () {
  return axios.get('getBrand')
}
export function getSeckill () {
  return axios.get('getSeckill')
}
export function getLeftcate () {
  return axios.get('getLeftcate')
}
