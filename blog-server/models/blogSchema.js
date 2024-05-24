const {URL} = require("../util/config")
const { Sequelize, Model, DataTypes } = require('sequelize')

const sequelize = new Sequelize(URL, {
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

module.exports = {Blog}