// Dependencies and References
const axios = require("axios");
const moment = require("moment");
const Spotify = require("node-spotify-api");
const keys = require("./keys.js");
const spotify = new Spotify(keys.spotify);
let input = process.argv[3];
var fs = require("fs");
let command = process.argv[2];

// Spotify function
const spotifyFunction = () => {
  spotify
  .search({ type: "track", query: input}).then(response => {
    if( response.tracks.items.length ){
      console.log("Artist Name: " + response.tracks.items[0].artists[0].name);
      console.log("Song Name: " + response.tracks.items[0].name);
      console.log("Album Name: " + response.tracks.items[0].album.name);
      console.log("Preview Link on Spotify: " + response.tracks.items[0].external_urls.spotify);
    } else {
      console.log("No matches for " + input);
    }
  }).catch(function (error) {
    console.log(error);
  });
}
// Axios OMDB API
const movieFunction = () => {
  axios({
  method: "GET",
  url: `http://www.omdbapi.com/?apikey=trilogy&t=${input}`
})  
  .then(function(response) {
    console.log("Title: " + response.data.Title);  
    console.log("Year Released: " + response.data.Released);  
    console.log("imdbRating: " + response.data.imdbRating);  
    console.log("Rotten Tomatoes rating: " + response.data.Ratings[1].Value);  
    console.log("Country: " + response.data.Country);  
    console.log("Language: " + response.data.Language);  
    console.log("Plot: " + response.data.Plot);  
    console.log("Actors: " + response.data.Actors);  

  }).catch(function (error) {
    console.log(error);
  
  })
}

// Axios BandsInTown API 
const concertFunction = () => {
  axios ({
    method: "Get",
    url: `https://rest.bandsintown.com/artists/` + input + `/events?app_id=codingbootcamp`
  })
  
  .then(function(response) {
    console.log("Name of Venue: " + response.data[0].venue.name);
    console.log("Venue Location: " + response.data[0].venue.city);
    console.log("Date of Event: " + moment(response.data[0].datetime).format("L"));
  })
  .catch(function (error) {
    console.log(error);
  })
}

// LIRI Function
const liriFunction = () => { 
fs.readFile("random.txt", "utf8", function(error, data ) {
  if (error) {
    return console.log(error);
  }
  var dataArr = data.split(",");
  command = dataArr[0];
  input = dataArr[1];
  // console.log(dataArr[0]);
  // console.log(dataArr[1]);
  switch (command) {
    case "do-what-it-says":
    break;
      case "concert-this":
        concertFunction();
        break;
      case "spotify-this-song":
        spotifyFunction();
        break;
      case "movie-this":
        if (input != "") {
          movieFunction();
        }
        else movieFunction("Mr. Nobody");
        break;
  }
})
}

// Switch function for all the commands
  switch (command) {
    case "concert-this":
      concertFunction();
      break;
    case "spotify-this-song":
      spotifyFunction();
      break;
    case "movie-this":
      if (input != "") {
        movieFunction();
      }
      else movieFunction("Mr. Nobody");
      break;
    case "do-what-it-says":
      liriFunction();
      break;
    default:
       console.log("Not working. Try again");

  };