module.exports = function ( app ) {
  var teamData = require( '../controllers/teamData.controller.js' );

  app.post( '/api/memberData', teamData.createMemberData );
  app.get( '/api/memberData/:id', teamData.getMemberData );
  app.get( '/api/teamData', teamData.teamData );
  app.put( '/api/memberData', teamData.updateMemberData );
  app.delete( '/api/memberData/:id', teamData.deleteMemberData );
}