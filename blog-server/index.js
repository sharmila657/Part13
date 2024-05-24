const {PORT} = require("./util/config")
const blogController = require("./contollers/blogs")
const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())
app.use("/api/blogs", blogController)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

