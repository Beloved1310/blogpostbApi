const Blog = require('../../Model/Blog')
const Comment = require('../../Model/Comment')

// module.exports =  async (req, res) => {
//   const comment = {
//     _id: mongoose.Types.ObjectId(),
//     text: req.body.text,
//     postedBy: req.user.fullname,
//   };
//  await Blog.findOneAndUpdate({ _id: req.params.id }, {$push:{comments:comment}});
//   return res.status(200).json({message: 'comment added'});
// };

module.exports = async (req, res) => {
  // find out which post you are commenting

  // get the comment text and record post id
  const comment = new Comment({
    text: req.body.text,
    post: req.params.id,
    postedBy: req.user.fullname,
  })
  // save comment
  const savedComment = await comment.save()
  const data = {
    text: savedComment.text,
    postedBy: savedComment.postedBy,
  }

  // get this particular post
  await Blog.findOneAndUpdate(
    { _id: req.params.id },
    { $push: { comments: savedComment } }
  )
  // save and redirect...

  return res.status(200).json({ message: 'comment added', data })
}
