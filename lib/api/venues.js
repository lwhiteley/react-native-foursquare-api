var querystring = require('querystring'),
    request = require('../services/request'),
    config = require('../services/config');

module.exports = function(clientID, clientSecret) {
    var credentials = {
        'v': '20140806',
        'client_id': clientID,
        'client_secret': clientSecret
    };
    config = Object.assign(config, {
        apiFeature: '/venues'
    });

    return {
        categories: function(params) {
            var urlString = config.apiUrl + config.apiFeature + "/categories?" + querystring.stringify(credentials);
            return request(urlString);
        },
        getVenues: function(params) {
            var urlString = config.apiUrl + config.apiFeature + "/search?" +
                querystring.stringify(params) + '&' +
                querystring.stringify(credentials);
            return request(urlString);
        },
        explore: function(params) {
            var urlString = config.apiUrl + config.apiFeature + "/explore?" +
                querystring.stringify(params) + '&' +
                querystring.stringify(credentials);
            return request(urlString);
        },
        getVenue: function(params) {
            var urlString = config.apiUrl + config.apiFeature + "/" +
                params.venue_id + '?' +
                querystring.stringify(credentials);
            return request(urlString);
        },
        getVenueAspect: function(params) {
            var urlString = config.apiUrl + config.apiFeature + "/" +
                params.venue_id + "/" +
                params.aspect_name + '?' +
                querystring.stringify(credentials);
            return request(urlString);
        }
    };
};
