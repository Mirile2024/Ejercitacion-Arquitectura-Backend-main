// @/models.js
const mongoose = require('mongoose')

const DogSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  breed: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  isGoodBoy: {
    type: Boolean,
    required: false,
    default: true
  }
},{versionKey: false})  

const Dog = mongoose.model('Dog', DogSchema)

module.exports = { Dog }