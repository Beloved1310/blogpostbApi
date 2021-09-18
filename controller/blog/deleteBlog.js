const Blog = require('../../Model/Blog')

module.exports = async (req, res) => {
  await Blog.deleteOne({ _id: req.params.id })
  res.status(200).json({ message: 'Deleted!' })
}
