const { body } = require('express-validator')
const Ticket = require('../models/Ticket')

const ticketInsertValidation = () => {
  return [
    body('title')
      .not()
      .equals('undefined')
      .withMessage('O nome é obrigatório')
      .isString()
      .withMessage('O nome é obrigatório')
      .isLength({ min: 3 })
      .withMessage('O nome precisa ter no minimo 3 caracteres'),
    body('image').custom((value, { req }) => {
      if (!req.file) {
        throw new Error('A imagem é obrigatória')
      }

      return true
    })
  ]
}

const photoUpdateValidation = () => {
  return [
    body('title')
      .isString()
      .withMessage('O nome é obrigatório')
      .isLength({ min: 3 })
      .withMessage('O nome precisa ter no minimo 3 caracteres')
  ]
}

module.exports = {
  ticketInsertValidation,
  photoUpdateValidation
}
