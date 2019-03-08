import axios from 'axios'
import baseUrlcw from '@/api'

const api = {
  // 验证码接口数据请求
 requestData (aphone) {
   console.log(aphone)
  return new Promise((resolve, reject) => {
    axios.get(baseUrlcw + '/users/sendCode?tel=' + aphone)
    .then(data => {
      resolve(data.data)
      console.log(data)
    })
    .catch(err => {
      reject(err)
    })
  })
 },
 // 注册接口数据请求
 resData (data) {
   console.log(data)
   return new Promise((resolve, reject) => {
     axios({
       method:'post',
       url:baseUrlcw + '/users/register', 
       data})
     .then (data => {
       resolve(data.data)
       console.log(data)
     })
     .catch(err => {
       reject(err)
     })
   })
 },
//  登入接口数据请求
 loginData (obj) {
   console.log(obj)
   return new Promise((resolve, reject) => {
     axios.post(baseUrlcw + '/users/login', obj)
     .then(data => {
       resolve(data.data)
     })
     .catch(err => {
       reject(err)
     })
   })
 }
}

export default api