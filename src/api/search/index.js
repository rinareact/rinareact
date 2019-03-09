import axios from 'axios'
import baseUrl from './../index'

const api = {
  requestSearch (name) {
    return new Promise((resolve, reject) => {
      axios.get(baseUrl + '/product/searchK?goodsName=' + name)
        .then(data => resolve(data))
        .catch(err => reject(err))
    })
  }
}

export default api
