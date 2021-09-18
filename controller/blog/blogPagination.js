const Blog = require('../../Model/Blog')

module.exports = async (req, res) => {
  const page = parseInt(req.query.page, 10)
  const limit = parseInt(req.query.limit, 10)

  const startIndex = (page - 1) * limit
  const endIndex = page * limit

  const results = {}

  if (endIndex < (await Blog.countDocuments().exec()))
    results.next = {
      page: page + 1,
      limit,
    }
  if (startIndex > 0) {
    results.previous = {
      page: page - 1,
      limit,
    }
  }

  results.result = await Blog.find().limit(limit).skip(startIndex).exec()
  if (!results.result)
    return res.status(500).json({ message: 'Cannot get result' })

  return res.status(200).send(results)
}
