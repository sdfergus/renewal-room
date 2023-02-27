const mongoose = require( 'mongoose' );
const TeamData = mongoose.model( 'TeamData' );

exports.createMemberData = ( req, res ) => {
  const teamData = new TeamData( {
    id: req.body.id,
    title: req.body.title,
    author: req.body.author
  } );

  //Save inventory in MongoDB
  teamData.save().then( data => {
    res.status( 200 ).json( data );
  } ).catch( err => {
    res.status( 500 ).json( {
      message: "Fail!",
      error: err.message
    } );
  } );
};

exports.getMemberData = ( req, res ) => {
  TeamData.findById( req.params.id ).select( '-__v' )
    .then( teamData => {
      res.status( 200 ).json( teamData );
    } ).catch( err => {
      if ( err.kind === 'ObjectId' ) {
        return res.status( 404 ).send( {
          message: "TeamData not found with id " + req.params.id,
          error: err
        } );
      }
      return res.status( 500 ).send( {
        message: "Error retrieving TeamData with id " + req.params.id,
        error: err
      } );
    } );
};

exports.teamData = ( req, res ) => {
  TeamData.find().select( '-__v' ).then( teamDataInfos => {
    res.status( 200 ).json( teamDataInfos );
  } ).catch( error => {
    //log on console
    console.log( "Couldn't generate teamData!: ", error );

    res.status( 500 ).json( {
      message: "Error!",
      error: error
    } );
  } );
};

exports.updateMemberData = ( req, res ) => {
  //Find teamData and update it
  TeamData.findByIdAndUpdate( req.body._id,
    {
      id: req.body.id,
      title: req.body.title,
      author: req.body.author
    },
    { new: false }
  ).select( '-__v' )
    .then( teamData => {
      if ( !teamData ) {
        return res.status( 404 ).send( {
          message: "Error -> Can't update a teamData with id = " + req.params.id,
          error: "Not found!"
        } );
      }
      res.status( 200 ).json( teamData );
    } ).catch( err => {
      return res.status( 500 ).send( {
        message: "Error -> Can't update a teamData with id = " + req.params.id,
        error: err.message
      } )
    } )
};

exports.deleteMemberData = ( req, res ) => {
  TeamData.findByIdAndRemove( req.params.id ).select( '-__v-_id' )
    .then( teamData => {
      if ( !teamData ) {
        res.status( 404 ).json( {
          message: "No teamData found with id = " + req.params.id,
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