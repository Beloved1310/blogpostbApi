const Blog = require('../../Model/Blog')

module.exports = async (req, res) => {
  const result = await Blog.findById(req.params.id).select('comments')
  const data = { data: result.comments }
  return res.status(200).json(data)
}
