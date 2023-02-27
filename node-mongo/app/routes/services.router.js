module.exports = function ( app ) {
  var services = require( '../controllers/services.controller.js' );

  app.post( '/api/service', services.createService );
  app.get( '/api/service/:id', services.getService );
  app.get( '/api/services', services.services );
  app.put( '/api/service', services.updateService );
  app.delete( '/api/service/:id', services.deleteService );
}