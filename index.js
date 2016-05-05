// API Features
var venues = require('./lib/api/venues');

module.exports = function(clientID, clientSecret){
  var foursquare = {
    venues: venues(clientID, clientSecret)
  };
  return foursquare;
};
