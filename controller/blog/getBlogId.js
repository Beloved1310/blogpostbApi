const Blog = require('../../Model/Blog')

module.exports = async (req, res) => {
  const result = await Blog.findById(req.params.id)
  return res.status(200).json(result)
}
