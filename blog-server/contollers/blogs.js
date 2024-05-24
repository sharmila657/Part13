const {Blog} = require('../models/blogSchema')
const app = require("express").Router()

app.get('/', async (req, res) => {
    const blogs = await Blog.findAll()
    res.json(blogs)
  })
  
  app.get('/:id', async (req, res) => {
    const blogId = req.params.id
    const blog = await Blog.findByPk(blogId)
    if (blog) {
      res.json(blog)
    } else {
      res.status(404).end()
    }
  })
  
  app.post('/', async(req, res) =>{
  try{
    const blog = await Blog.create(req.body)
    res.json(blog)
  }catch{
    res.status(400).json({error: 'malformatted request'})
  }
  })
  
  app.delete('/:id',(req,res) =>{
    Blog.findByPk(req.params.id)
    .then(blog =>{
    blog.destroy()})
  })

module.exports = app;