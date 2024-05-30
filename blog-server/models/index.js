const {Blog} = require('./blogSchema')
const User = require('./user')

Blog.sync()
User.sync()


module.exports = {
  Blog,
  User
}