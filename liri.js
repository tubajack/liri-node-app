//Read and set environment variables with the .env package
require("dotenv").config();

//All of the required vars
var keys = require("./keys.js");

var spotify = require('node-spotify-api');

var spotify = new Spotify(keys.spotify);

