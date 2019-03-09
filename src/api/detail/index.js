import axios from 'axios'
import URL from './../index'

const api = {
    requestDetail (id) {
        return new Promise((resolve, reject) => {
            axios.get(URL.baseUrl + '/product/searchI?postID=' + id)
                .then(data => resolve(data))
                .catch(err => reject(err))
        })
    }
}

export default api
