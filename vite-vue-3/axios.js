import axios from 'axios'
// import store from '@/vuex/store'
// import router from '@/router/index'

// axios 配置
axios.defaults.timeout = 55000
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
// POST传参序列化
axios.interceptors.request.use((config) => {
  // 将token统一放到head里
  // config.headers.common['Ltd-Company'] = 68
  return config
}, (err) => {
  return Promise.reject(err)
})
// 返回状态判断
axios.interceptors.response.use((res) => {
  const response = res.data
  if (response.msg) {
    if (response.code === 0) {
    } else {
    }
  }
  return response
}, (err) => {
  if (err && err.response) {
    switch (err.response.status) {
      case 401:
        break
      case 404:
        break
      default:
    }
  }
  return Promise.reject(err)
})
export default function request (method, url, data) {
  // 处理请求的url和数据
  data = method === 'get' ? { params: data } : data
  // 发送请求
  return new Promise((resolve, reject) => {
    axios[method](url, data)
      .then(response => {
        resolve(response)
      }, error => {
        reject(error)
      })
      .catch(error => {
        reject(error)
      })
      // .finally(() => {
      // })
  })
    .catch(error => {
      console.log(error)
    })
}
