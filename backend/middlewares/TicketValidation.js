const { body } = require('express-validator')

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

module.exports = {
  ticketInsertValidation
}
