var querystring = require('querystring'),
    request = require('../services/request');

module.exports = function(config) {
    var credentials = config.credentials;
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
