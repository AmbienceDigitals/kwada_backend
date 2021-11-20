const mongoose = require('mongoose')

const PaymentSchema = new mongoose.Schema({
  status: {
    type: String,
    required: [true, 'must provide name'],
    trim: true,
  },
  amount: {
    type: Number,
    required: [true]
  },
  earning: {
    type: Number,
    required: [true]
  },
  repaymentPlan: {
    type: String,
    required: [true],
    trim: true
  },
  monthlyPayment: {
    type: Number,
  }
})

module.exports = mongoose.model('Payment', PaymentSchema)
