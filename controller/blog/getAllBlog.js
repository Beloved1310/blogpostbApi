const Blog = require('../../Model/Blog')

module.exports = async (req, res) => {
  const result = await Blog.find().populate('comments')
  return res.status(200).json(result)
}
