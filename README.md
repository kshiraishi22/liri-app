# LIRI Bot

## Problem Description
Instead of going to 3 separate web browsers for movie, song, and band information, LIRI (Language Interpretation Recognition Interface) allows users to conveniently use the command line to take in parameters and give you back data from Spotify, OMDB, and BandsInTown. 

## App Overview
LIRI allows for a user to search for a movie, song, and/or band using the Node.js command line. Based on what the user inputs, the app makes calls to the relevant API and returns selected information.

## Instructions To Run App
1. Right click on the folder, "liri-node-app" and select open terminal to use in the command line.
2. Out of the four commands below, decide which one to use to get the information you want.
  - concert-this
  - spotify-this-song
  - movie-this
  - do-what-it-says
3. Once user selects one of the four commands, type in the command line the following: node          liri.js <command> "". Inside the quote will be the search input that corresponds to one of the    4 commands. 

   For example, typing in "node liri.js concert-this "celine dion" will return the name of the concert venue, location of the concert and the date for the celine dion concert. 
## Screenshot of App

## Technologies Used for this App
- Node.js
- OMDB API
- Node Spotify API
- BandsInTown API
- Axios
- fs
- Moment
- DotEnv

## App Link
https://github.com/kshiraishi22/liri-node-app

