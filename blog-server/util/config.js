require('dotenv').config()

const PORT = process.env.PORT || 3001
const URL = process.env.DB_URL

module.exports = {PORT, URL}


