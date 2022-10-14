const Ticket = require('../models/Ticket')
const User = require('../models/User')

const mongoose = require('mongoose')

//Insert a photo, with an user related to it
const insertPhoto = async (req, res) => {
  const { title } = req.body
  const image = req.file.filename

  const reqUser = req.user

  const user = await User.findById(reqUser._id)

  //Create a ticket
  const newTicket = await Ticket.create({
    image,
    title,
    userId: user._id,
    userName: user.name,
    checked: false
  })

  //If tickect was created successfully, return data
  if (!newTicket) {
    res.status(422).json({
      errors: ['Houve um problema, por favor tente novamente mais tarde']
    })
    return
  }

  res.status(201).json(newTicket)
}

//Remove a ticket from DB
const deletePhoto = async (req, res) => {
  const { id } = req.params

  const reqUser = req.user

  try {
    const ticket = await Ticket.findById(mongoose.Types.ObjectId(id))

    //Check if ticket exists

    if (!ticket) {
      res.status(404).json({ errors: ['Ingresso não encontrado!.'] })
      return
    }

    //Check if ticket belongs to user
    if (!ticket.userId.equals(reqUser._id)) {
      res.status(422).json({
        errors: ['Ocorreu um erro, por favor tente novamente mais tarde.']
      })
    }

    await Ticket.findByIdAndDelete(ticket._id)

    res
      .status(200)
      .json({ id: ticket._id, message: 'Ingresso excluido com sucesso.' })
  } catch (error) {
    res.status(404).json({ errors: ['Ingresso não encontrado!.'] })
    return
  }
}

//Get all tickects
const getAllTickets = async (req, res) => {
  const tickets = await Ticket.find({})
    .sort([['createdAt', -1]])
    .exec()

  return res.status(200).json(tickets)
}

module.exports = {
  insertPhoto,
  deletePhoto,
  getAllTickets
}
