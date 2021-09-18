/* eslint no-underscore-dangle: "off" */
/* eslint camelcase: "off"  */

const Blog = require('../../Model/Blog')
const User = require('../../Model/User')
const cloudinary = require('../../utilis/cloudinary')
const uploadBlog = require('../../validation/uploadBlog')

module.exports = async (req, res) => {
  const { value, error } = uploadBlog(req.body)
  if (error) return res.status(400).send({ error: error.details[0].message })
  const { title, author, body } = value
  const user = await User.findOne({ _id: req.user._id }).select(
    'fullname email -_id'
  )

  const { secure_url: image, public_id: cloudinary_id } =
    await cloudinary.uploader.upload(req.file.path)
  await Blog.create({
    image,
    cloudinary_id,
    title,
    author,
    body,
    user,
  })
  const data = {
    image,
    title,
    author,
    user,
    body,
  }
  return res.status(200).json({ message: 'Post created', data })
}
