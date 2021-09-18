const Blog = require('../../Model/Blog')

module.exports = async (req, res) => {
  const result = await Blog.find().exec()
  return res.status(200).json(result)
}
