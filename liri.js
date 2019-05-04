//Read and set environment variables with the .env package
require("dotenv").config();

//All of the required vars
var keys = require("./keys.js");
var fs = require("fs");
var request = require("request");
var axios = require("axios");

//Require Spotify
var spotify = require('node-spotify-api');


//Declare the right commands. 
//argv[2] = user's actions
//argv[3] = input parameter(s)
var userAction = process.argv[2];
var inputParameter = process.argv[3];

//Get the Spotify keys
var spotify = new Spotify(keys.spotify);


//Create a switch statement
function myChoices(userAction){

    switch(userAction){

        case "concert-this":
        break;
        case "spotify-this-song":
        break;
        case "movie-this":
        break;
        case "do-what-it-says":
        break;
    }
}