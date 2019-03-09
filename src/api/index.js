let baseUrl =  '/api'
process.env.NODE_ENV === 'development' ? baseUrl = '/api' : baseUrl = 'http://39.96.196.70:3000/api'

let baseUrlcw = 'https://www.daxunxun.com'
// process.env.NODE_ENV === 'development' ? baseUrl = '/daxun' : baseUrl = 'https://www.daxunxun.com'
process.env.NODE_ENV === 'development' ? baseUrlcw = '/daxun' : baseUrlcw = 'https://www.daxunxun.com'

export default {baseUrl,baseUrlcw}