module.exports = function ( app ) {
  var members = require( '../controllers/members.controller.js' );

  app.post( '/api/member', members.createMember );
  app.get( '/api/member/:id', members.getMember );
  app.get( '/api/members', members.members );
  app.put( '/api/member', members.updateMember );
  app.delete( '/api/member/:id', members.deleteMember );
}