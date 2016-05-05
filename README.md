# react-native-foursquare-fetch
react-native wrapper for foursquare api using fetch

This is currently a wrapper on the foursquare v2 API (`https://api.foursquare.com/v2`).

#### Example

```js
var foursquare = require('react-native-foursquare-fetch')({
  clientID: 'YOUR_CLIENTID',
  clientSecret: 'YOUR_CLIENTSECRET',
  style: 'foursquare', // default: 'foursquare'
  version: '20140806' //  default: '20140806'
});

// see respective api documentation for list of params you could pass
var params = {
	"ll": "10.652814,-61.3969835",
  "query": 'Movie Towne'
};

foursquare.venues.getVenues(params)
      .then(function(venues) {
    		console.log(venues);
    	})
      .catch(function(err){
        console.log(err);
      });
```

## Features

#### Venues (` /venues `)

API Documentation: [Venues API](https://developer.foursquare.com/docs/venues/venues)

Implemented Methods: [see wrapper](https://github.com/lwhiteley/react-native-foursquare-fetch/blob/master/lib/api/venues.js)


## Notes
- Pull requests are welcome
- Only venues feature (mostly) built out so far

### Useful Link
- [https://developer.foursquare.com/overview/versioning](https://developer.foursquare.com/overview/versioning)

License: MIT
