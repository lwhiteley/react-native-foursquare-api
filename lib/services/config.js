var defaultConfig = {
  apiUrl: 'https://api.foursquare.com/v2',
  style: 'foursquare',
  version: '20140806',
  locale: 'en'
}

var service = {}
var buildCreds = function(config){
  var creds = {
    'v': config.version,
    'm': config.style,
    'client_id': config.clientID,
    'client_secret': config.clientSecret,
    'locale': config.locale
  };
  return creds;
}
service.getConfig = function(settings){
  var config = Object.assign({}, defaultConfig, settings);
  config.credentials = buildCreds(config);
  return config;
}

module.exports = service;
