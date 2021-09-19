/* eslint no-underscore-dangle: "off" */
/* eslint eqeqeq: "off" */

const Blog = require('../../Model/Blog')

module.exports = async (req, res) => {
  const { postId, commentId } = req.params

  const post = await Blog.findById(postId).populate('comments')
  if (!post) res.send({ message: 'Invalid id' })

  const data = post.comments.find((a) => a._id == commentId)

  const getOnedata = {
    data,
  }

  return res.status(200).send(getOnedata)
}
