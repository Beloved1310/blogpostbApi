/* eslint no-underscore-dangle: "off" */

const Blog = require('../../Model/Blog')

// module.exports = (request, response) => {
//  const {postId} = request.params;
//  const {commentId} = request.params;

//  console.log(Blog.collection("comments").remove())
//  Blog.findById(postId, (error, post) =>{
//   if (error) response.send(error);
//  const u=  post.comments.map(a => a._id);
//  console.log(u)

//   post.comments.id(commentId).remove();
//   post.save((err) =>{
//    if(err) response.send(err);
//    return response.redirect("/posts/" + post._id);
//   });
//  });
// };

module.exports = async (req, res) => {
  const { postId } = req.params
  const { commentId } = req.params
  const { text } = req.body

  await Blog.updateOne(
    { _id: postId },
    { $pull: { comments: [commentId] } },
    {
      $set: {
        text,
      },
    }
  )

  const post = await Blog.findById(postId)
  if (!post) res.send('error')
  const result = post.comments.find((a) => a._id === req.params.commentId)

  delete result._id
}

// module.exports = (request, response) => {
//     const {postId} = request.params;
//     const {commentId} = request.params;
//     console.log(commentId)

//     Blog.findByIdAndDelete(id, function (err) {
//         if(err) console.log(err);
//         console.log("Successful deletion");
//       });

//     Blog.findById(postId, (error, post) =>{
//      if (error) response.send(error);
//     const u=  post.comments.find(a => a._id == request.params.commentId);
//     console.log(u._id)

//      post.save((err) =>{
//       if(err) response.send(err);
//       return response.redirect("/posts/" + post._id);
//      });
//     });
//    };
