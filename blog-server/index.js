require('dotenv').config()
const { Sequelize, Model, DataTypes } = require('sequelize')

const express = require('express')
const app = express()
app.use(express.json())


const sequelize = new Sequelize(process.env.DB_URL, {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },
});

class Blog extends Model {}
Blog.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  author: {
    type: DataTypes.TEXT,
  },
  url: {
    type: DataTypes.TEXT
  },
  title: {
    type: DataTypes.TEXT
  },
  likes: {
    type: DataTypes.INTEGER
  }
}, {
  sequelize,
  underscored: true,
  timestamps: false,
  modelName: 'blog'
})

app.get('/api/blogs', async (req, res) => {
  const blogs = await Blog.findAll()
  res.json(blogs)
})

app.get('/api/blogs/:id', async (req, res) => {
  const blogId = req.params.id
  const blog = await Blog.findByPk(blogId)
  if (blog) {
    res.json(blog)
  } else {
    res.status(404).end()
  }
})

app.post('/api/blogs', async(req, res) =>{
try{
  const blog = await Blog.create(req.body)
  res.json(blog)
}catch{
  res.status(400).json({error: 'malformatted request'})
}
})

app.delete('/api/blogs/:id',(req,res) =>{
  Blog.findByPk(req.params.id)
  .then(blog =>{
  blog.destroy()})
})


const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})