const bcrypt = require('bcrypt')
const User = require('../../Model/User')
const signUpValidate = require('../../validation/signupValidate')

module.exports = async (req, res) => {
  const { value, error } = signUpValidate(req.body)
  if (error) return res.status(400).send({ error: error.details[0].message })

  const { fullname, email, password, gender } = value

  const createdUser = new User({
    fullname,
    email,
    password,
    gender,
  })

  const user = await User.findOne({ email })
  if (user) return res.status(400).send({ error: 'User already registered' })
  const salt = await bcrypt.genSalt(10)
  createdUser.password = await bcrypt.hash(createdUser.password, salt)
  const savedUser = await createdUser.save()
  if (!savedUser) return res.status(422).send({ error: 'Unsaved User' })
  const data = { fullname, email }
  return res.send({
    data,
  })
}
