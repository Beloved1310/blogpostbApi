/* eslint camelcase: "off" */

// const multer = require('multer');
// const path = require('path');
// const router = require('express').Router();
// const auth = require('../middleware/auth');

const Blog = require('../../Model/Blog')
const cloudinary = require('../../utilis/cloudinary')

const updateBlog = require('../../validation/updateBlog')

module.exports = async (req, res) => {
  const { value, error } = updateBlog(req.body)
  if (error) return res.status(400).send({ error: error.details[0].message })

  const post = await Blog.findById(req.params.id)
  if (!post) return res.status(404).send({ message: 'Blog post not found' })
  if (req.file) {
    await cloudinary.uploader.destroy(post.cloudinary_id)
    const { secure_url: image, public_id: cloudinary_id } =
      await cloudinary.uploader.upload(req.file.path)
    await Blog.updateOne(
      { _id: req.params.id },
      {
        $set: {
          image,
          cloudinary_id,
        },
      }
    )
  }

  const { title, author, body } = value
  await Blog.updateOne(
    { _id: req.params.id },
    {
      $set: {
        title,
        author,
        body,
      },
    }
  )

  const data = await Blog.find({ _id: req.params.id }).select(
    'image title author body'
  )
  return res.status(200).json({ message: 'Post updated', data })
}
