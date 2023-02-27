const mongoose = require( 'mongoose' );
const Services = mongoose.model( 'Services' );

exports.createService = ( req, res ) => {
  const service = new Services( {
    id: req.body.id,
    service: req.body.service,
    image: req.body.image,
    alt: req.body.alt,
    quantity: req.body.quantity,
    price: req.body.price,
    info: req.body.info,
    offerings: req.body.offerings,
    prices: req.body.prices
  } );

  //Save inventory in MongoDB
  service.save().then( data => {
    res.status( 200 ).json( data );
  } ).catch( err => {
    res.status( 500 ).json( {
      message: "Fail!",
      error: err.message
    } );
  } );
};

exports.getService = ( req, res ) => {
  Services.findById( req.params.id ).select( '-__v' )
    .then( service => {
      res.status( 200 ).json( service );
    } ).catch( err => {
      if ( err.kind === 'ObjectId' ) {
        return res.status( 404 ).send( {
          message: "Services not found with id " + req.params.id,
          error: err
        } );
      }
      return res.status( 500 ).send( {
        message: "Error retrieving Services with id " + req.params.id,
        error: err
      } );
    } );
};

exports.services = ( req, res ) => {
  Services.find().select( '-__v' ).then( serviceInfos => {
    res.status( 200 ).json( serviceInfos );
  } ).catch( error => {
    //log on console
    console.log( "Couldn't generate services!: ", error );

    res.status( 500 ).json( {
      message: "Error!",
      error: error
    } );
  } );
};

exports.updateService = ( req, res ) => {
  //Find service and update it
  Services.findByIdAndUpdate( req.body._id,
    {
      id: req.body.id,
      service: req.body.service,
      image: req.body.image,
      alt: req.body.alt,
      quantity: req.body.quantity,
      price: req.body.price,
      info: req.body.info,
      offerings: req.body.offerings,
      prices: req.body.prices
    },
    { new: false }
  ).select( '-__v' )
    .then( service => {
      if ( !service ) {
        return res.status( 404 ).send( {
          message: "Error -> Can't update a service with id = " + req.params.id,
          error: "Not found!"
        } );
      }
      res.status( 200 ).json( service );
    } ).catch( err => {
      return res.status( 500 ).send( {
        message: "Error -> Can't update a service with id = " + req.params.id,
        error: err.message
      } )
    } )
};

exports.deleteService = ( req, res ) => {
  Services.findByIdAndRemove( req.params.id ).select( '-__v-_id' )
    .then( service => {
      if ( !service ) {
        res.status( 404 ).json( {
          message: "No service found with id = " + req.params.id,
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