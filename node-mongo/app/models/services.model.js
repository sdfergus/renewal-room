const mongoose = require( 'mongoose' );

const ServicesSchema = new mongoose.Schema( {
  id: Number,
  service: String,
  image: String,
  alt: String,
  quantity: Number,
  price: Number,
  info: String,
  offerings: String,
  prices: [ mongoose.Schema.Types.Mixed ]
} );

module.exports = mongoose.model( 'Services', ServicesSchema );