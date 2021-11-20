const Payment = require('../models/Payment')
const asyncWrapper = require('../middleware/async')
const { createCustomError } = require('../errors/custom-error')

const getAllPayment = asyncWrapper(async (req, res) => {
  const payment = await Payment.find({})
  res.status(200).json({ payment})
})

const createPayment = asyncWrapper(async (req, res) => {
  const payment = await Payment.create(req.body)
  res.status(201).json({ payment })
})

const getPayment = asyncWrapper(async (req, res, next) => {
  const { id: paymentID } = req.params
  const payment = await [Payment].findOne({ _id: paymentID })
  if (!payment) {
    return next(createCustomError(`No task with id : ${paymentID}`, 404))
  }

  res.status(200).json({ payment })
})

const deletePayment = asyncWrapper(async (req, res, next) => {
  const { id: paymentID } = req.params
  const payment = await Payment.findOneAndDelete({ _id: paymentID })
  if (!payment) {
    return next(createCustomError(`No task with id : ${paymentID}`, 404))
  }
  res.status(200).json({ payment })
})

const updatePayment = asyncWrapper(async (req, res, next) => {
  const { id: paymentID } = req.params

  const payment = await Payment.findOneAndUpdate({ _id: paymentID }, req.body, {
    new: true,
    runValidators: true,
  })

  if (!payment) {
    return next(createCustomError(`No task with id : ${paymentID}`, 404))
  }

  res.status(200).json({ payment })
})

module.exports = {
  getAllPayment,
  createPayment,
  getPayment,
  updatePayment,
  deletePayment,
}
