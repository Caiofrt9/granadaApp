const { mongo } = require('mongoose')

const mongoose = require('mongoose')
const { Schema } = mongoose

//Colocar opção para inserir imagem no projeto mobile

const ticketSchema = new Schema(
  {
    image: String,
    userId: mongoose.ObjectId,
    title: String,
    checked: false
  },
  {
    timestamps: true
  }
)

const Ticket = mongoose.model('Ticket', ticketSchema)

module.exports = Ticket
