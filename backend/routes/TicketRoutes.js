const express = require('express')
const router = express.Router()

//Controller
const {
  insertPhoto,
  deletePhoto,
  getAllTickets
} = require('../controllers/TicketController')

//Middlewares
const { ticketInsertValidation } = require('../middlewares/TicketValidation')
const authGuard = require('../middlewares/authGuard')
const validate = require('../middlewares/handleValidation')
const { imageUpload } = require('../middlewares/imageUpload')

//Routes
router.post(
  '/',
  authGuard,
  imageUpload.single('image'),
  ticketInsertValidation(),
  validate,
  insertPhoto
)
router.delete('/:id', authGuard, deletePhoto)
router.get('/', authGuard, getAllTickets)

module.exports = router
