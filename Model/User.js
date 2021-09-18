/* eslint no-underscore-dangle: "off" */

const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const { JWT } = require('../config')

const UserSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

UserSchema.methods.generateAuthToken = function generatedToken() {
  const token = jwt.sign(
    {
      _id: this._id,
      fullname: this.fullname,
      email: this.email,
    },
    JWT
  )
  return token
}

module.exports = mongoose.model('User', UserSchema)
