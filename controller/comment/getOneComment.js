/* eslint no-underscore-dangle: "off" */

const Blog = require('../../Model/Blog')

// module.exports = async (req, res) => {
//     console.log(req.params.id)
//   const result = await Blog.find({'comments': req.params._id})

//   return res.status(200).json(result);

// }
// // Blog.findOne({comments: { $all: [req.params.id] }})

module.exports = (req, res) => {
  const { postId } = req.params
  const { commentId } = req.params

  Blog.findById(postId, (error, post) => {
    if (error) res.send(error)
    const data = post.comments.find((a) => a._id === commentId)

    return res.status(200).send({ message: data })
  })
}
