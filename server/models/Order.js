const mongoose = require('mongoose');

const { Schema } = mongoose;


const orderSchema = new Schema({
    purchaseDate: {
      type: Date,
      default: Date.now
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
  