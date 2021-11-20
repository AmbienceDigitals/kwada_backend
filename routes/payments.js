const express = require('express')
const router = express.Router()

const {
  getAllPayment,
  createPayment,
  getPayment,
  updatePayment,
  deletePayment,
} = require('../controllers/payments')

router.route('/').get(getAllPayment).post(createPayment)
router.route('/:id').get(getPayment).patch(updatePayment).delete(deletePayment)

module.exports = router
