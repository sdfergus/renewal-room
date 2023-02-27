const mongoose = require( 'mongoose' );

const TeamDataSchema = new mongoose.Schema( {
  id: Number,
  name: String,
  img: String,
  alt: String,
  bio: String,
  services: mongoose.Schema.Types.Mixed,
  bookings: Array,
  ratings: String,
  reviews: Array
} );

module.exports = mongoose.model( 'TeamData', TeamDataSchema );