let baseUrl = 'api'
process.env.NODE_ENV === 'development' ? baseUrl = '/api' : baseUrl = 'http://39.96.196.70:3000/api/'

export default baseUrl