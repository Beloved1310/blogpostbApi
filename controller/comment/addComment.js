const mongoose = require('mongoose')
const Blog = require('../../Model/Blog')

module.exports = async (req, res) => {
  const comment = {
    _id: mongoose.Types.ObjectId(),
    text: req.body.text,
    postedBy: req.user.fullname,
  }
  await Blog.findOneAndUpdate(
    { _id: req.params.id },
    { $push: { comments: comment } }
  )
  return res.status(200).json({ message: 'comment added' })
}
