import axios from 'axios'
import baseUrl from '@/api'

const api = {
 requestData (aphone) {
   console.log(aphone)
  return new Promise((resolve, reject) => {
    axios.get(baseUrl + '/users/sendCode?let=' + aphone)
    .then(data => {
      resolve(data.data)
      console.log(data)
    })
    .catch(err => {
      reject(err)
    })
  })
 }
}

export default api