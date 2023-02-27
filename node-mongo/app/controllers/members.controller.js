const mongoose = require( 'mongoose' );
const Members = mongoose.model( 'Members' );

exports.createMember = ( req, res ) => {
  const members = new Members( {
    id: req.body.id,
    name: req.body.name,
    img: req.body.img,
    alt: req.body.alt,
    bio: req.body.bio,
    services: req.body.services,
    bookings: req.body.bookings,
    ratings: req.body.ratings,
    reviews: req.body.reviews
  } );

  //Save inventory in MongoDB
  members.save().then( data => {
    res.status( 200 ).json( data );
  } ).catch( err => {
    res.status( 500 ).json( {
      message: "Fail!",
      error: err.message
    } );
  } );
};

exports.getMember = ( req, res ) => {
  Members.findById( req.params.id ).select( '-__v' )
    .then( members => {
      res.status( 200 ).json( members );
    } ).catch( err => {
      if ( err.kind === 'ObjectId' ) {
        return res.status( 404 ).send( {
          message: "Members not found with id " + req.params.id,
          error: err
        } );
      }
      return res.status( 500 ).send( {
        message: "Error retrieving Members with id " + req.params.id,
        error: err
      } );
    } );
};

exports.members = ( req, res ) => {
  Members.find().select( '-__v' ).then( membersInfos => {
    res.status( 200 ).json( membersInfos );
  } ).catch( error => {
    //log on console
    console.log( "Couldn't generate members!: ", error );

    res.status( 500 ).json( {
      message: "Error!",
      error: error
    } );
  } );
};

exports.updateMember = ( req, res ) => {
  //Find members and update it
  Members.findByIdAndUpdate( req.body._id,
    {
      id: req.body.id,
      name: req.body.name,
      img: req.body.img,
      alt: req.body.alt,
      bio: req.body.bio,
      services: req.body.services,
      bookings: req.body.bookings,
      ratings: req.body.ratings,
      reviews: req.body.reviews
    },
    { new: false }
  ).select( '-__v' )
    .then( members => {
      if ( !members ) {
        return res.status( 404 ).send( {
          message: "Error -> Can't update a members with id = " + req.params.id,
          error: "Not found!"
        } );
      }
      res.status( 200 ).json( members );
    } ).catch( err => {
      return res.status( 500 ).send( {
        message: "Error -> Can't update a members with id = " + req.params.id,
        error: err.message
      } )
    } )
};

exports.deleteMember = ( req, res ) => {
  Members.findByIdAndRemove( req.params.id ).select( '-__v-_id' )
    .then( members => {
      if ( !members ) {
        res.status( 404 ).json( {
          message: "No members found with id = " + req.params.id,
          error: "404"
        } );
      }
      res.status( 200 ).json( {} );
    } ).catch( err => {
      return res.status( 500 ).send( {
        message: "Error -> Can't delete inventory with id = " + req.params.id,
        error: err.message
      } );
    } );
};