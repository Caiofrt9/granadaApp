const { mongo } = require('mongoose')

const mongoose = requiere('mongoose')
const { Schema } = mongoose

//Colocar opção para inserir imagem no projeto mobile

const ticketSchema = new Schema(
  {
    userId: mongoose.ObjectId,
    name: String,
    checked: false
  },
  {
    timestamps: true
  }
)

const Ticket = mongoose.model('Ticket', ticketSchema)

module.exports = Ticket
