const { mongo } = require('mongoose')

const mongoose = requiere('mongoose')
const { Schema } = mongoose

//Colocar opção para inserir imagem no projeto mobile

const TicketSchema = new Schema(
  {
    userId: mongoose.ObjectId,
    name: String,
    checked: false
  },
  {
    timestamps: true
  }
)

const Photo = mongoose.model('Photo', photoSchema)

module.exports = Photo
