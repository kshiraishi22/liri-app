// Dependencies and References
const axios = require("axios");
const moment = require("moment");
const Spotify = require("node-spotify-api");
const keys = require("./keys.js");
const spotify = new Spotify(keys.spotify)
let input = process.argv[3]

let spotifyFunction = spotify
  .search({ type: "track", query: input}).then(function (response) {
    if( response.tracks.items.length ){
      console.log(response.tracks.items[0].external_urls.spotify);
      console.log(response.tracks.items[0].name);
      console.log(response.tracks.items[0].album.name);
      console.log(response.tracks.items[0].artists[0].name);
    } else {
      console.log("No matches for " + input);
    }
  }).catch(function (error) {
    console.log(error);
  });

  switch (process.argv[2]) {
    case "concert-this":
      concertFunction;
      break;
    case "spotify-this-song":
      spotifyFunction;
      break;
    case "movie-this":
      movieFunction;
      break;
    case "do-what-it-says":
      liriFunction
      break;
    default:
       console.log("Not working. Try again");

  };

    