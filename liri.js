// Dependencies and References
const dotenv = require("dotenv").config();
const axios = require("axios");
const moment = require("moment");
const Spotify = require("node-spotify-api");
const keys = require("./keys.js");
const spotify = new Spotify(keys.spotify)
let input = process.argv[2]

spotify
  .search({ type: "track", query: input}).then(function (response) {
    // console.log(response.tracks.items[0].external_urls.spotify);
    // console.log(response.tracks.items[0].name);
    // console.log(response.tracks.items[0].album.name);
    // console.log(response.tracks.items[0].artists[0].name);
  }).catch(function (error) {
    console.log(error);
  });

  switch (process.arg[2]) {
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

    