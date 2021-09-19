const express = require('express')
const asyncMiddleware = require('../middleware/async')

const router = express.Router()

const auth = require('../middleware/auth')

const addComment = require('../controller/comment/addComment')
const getAllComment = require('../controller/comment/getAllComment')
const getOneComment = require('../controller/comment/getOneComment')
const deleteComment = require('../controller/comment/deleteComment')
const updateComment = require('../controller/comment/updateComment')

router.post('/:id', auth, asyncMiddleware(addComment))
router.get('/:id', auth, asyncMiddleware(getAllComment))
router.get(
  '/:postId/comments/:commentId/getone',
  auth,
  asyncMiddleware(getOneComment)
)
router.delete('/:commentId', auth, asyncMiddleware(deleteComment))

router.put('/putcomment/:commentId', auth, asyncMiddleware(updateComment))

module.exports = router
