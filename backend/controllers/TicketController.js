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
  }

  res.status(201).json(newTicket)
}

module.exports = {
  insertPhoto
}
