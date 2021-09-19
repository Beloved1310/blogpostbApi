const multer = require('multer')
const express = require('express')
const asyncMiddleware = require('../middleware/async')

const router = express.Router()

const auth = require('../middleware/auth')

const storage = require('../utilis/multer')

const upload = multer({ storage })

const createBlog = require('../controller/blog/createBlog')
const updateBlog = require('../controller/blog/updateBlog')
const getBlogId = require('../controller/blog/getBlogId')
const getAllBlog = require('../controller/blog/getAllBlog')
const deleteBlog = require('../controller/blog/deleteBlog')
const blogPagination = require('../controller/blog/blogPagination')
const validateObjectId = require('../middleware/validateObjectId')

router.get('/', asyncMiddleware(getAllBlog))

router.get('/:id', validateObjectId, asyncMiddleware(getBlogId))

router.post('/', auth, upload.single('image'), asyncMiddleware(createBlog))

router.put(
  '/:id',
  auth,
  upload.single('image'),
  validateObjectId,
  asyncMiddleware(updateBlog)
)

router.delete('/:id', auth, validateObjectId, asyncMiddleware(deleteBlog))

router.get('/blog/pagination', auth, asyncMiddleware(blogPagination))

module.exports = router
