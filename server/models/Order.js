const mongoose = require('mongoose');

const { Schema } = mongoose;


const orderSchema = new Schema({
    purchaseDate: {
      type: Date,
      default: Date.now
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    vinyls: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Vinyl'
      }
    ]
  });
  
  const Order = mongoose.model('Order', orderSchema);
  
  module.exports = Order;
  