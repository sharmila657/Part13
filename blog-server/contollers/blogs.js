const { Blog } = require("../models");
const app = require("express").Router();

const blogFinder = async (req, res, next) => {
  req.blog = await Blog.findByPk(req.params.id);
  next();
};

app.get("/", async (req, res) => {
  const blogs = await Blog.findAll();
  res.json(blogs);
});

app.get("/:id", blogFinder, async (req, res) => {
  const blogId = req.params.id;
  const blog = await Blog.findByPk(blogId);
  if (blog) {
    res.json(blog);
  } else {
    res.status(404).end();
  }
});

app.post("/", blogFinder, async (req, res) => {
  try {
    const blog = await Blog.create(req.body);
    res.json(blog);
  } catch (error) {
    next(error);
  }
});

app.delete("/:id", blogFinder, (req, res) => {
  Blog.findByPk(req.params.id).then((blog) => {
    blog.destroy();
  });
});

app.put("/:id", blogFinder, async (req, res, next) => {
  try {
    const blogs = req.blog;
    blogs.likes = blogs.likes;
    await req.blog.save();
    res.json(req.blog);
  } catch (error) {
    next(error);
  }
});

module.exports = app;
