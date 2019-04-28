const env = process.env.NODE_ENV || 'dev'
const port = process.env.PORT || 4000
const dbURI = process.env.DB_URI || `mongodb://localhost/supplier-app-${env}`

module.exports = { env, dbURI, port }