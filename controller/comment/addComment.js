const Blog = require('../../Model/Blog')
const Comment = require('../../Model/Comment')

module.exports = async (req, res) => {
  const comment = new Comment({
    text: req.body.text,
    post: req.params.id,
    postedBy: req.user.fullname,
  })

  const savedComment = await comment.save()
  const data = {
    text: savedComment.text,
    postedBy: savedComment.postedBy,
  }

  await Blog.findOneAndUpdate(
    { _id: req.params.id },
    { $push: { comments: savedComment } }
  )

  return res.status(200).json({ message: 'comment added', data })
}
