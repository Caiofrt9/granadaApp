const express = require('express')
const router = express.Router()

//Controller
const {
  insertPhoto,
  deletePhoto,
  getAllTickets,
  getUserTickets,
  getTicketById,
  updateTicket,
  searchTickets,
  ticketChecked
} = require('../controllers/TicketController')

//Middlewares
const {
  ticketInsertValidation,
  photoUpdateValidation
} = require('../middlewares/TicketValidation')
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
router.get('/user/:id', authGuard, getUserTickets)
router.get('/search', authGuard, searchTickets)
router.get('/:id', authGuard, getTicketById)
router.put('/:id', authGuard, photoUpdateValidation(), validate, updateTicket)
router.post('/:id/check', authGuard, validate, ticketChecked)

module.exports = router
