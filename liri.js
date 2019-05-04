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

//What if the inputParameter has multiple words?
//We surely do not want this parameter to have a process.arg[4] or even a process.argv[15]
for(var baba = 4; baba < process.argv.length; baba++){
    inputParameter += '+' + process.argv[i];
}

//Get the Spotify keys
//var spotify = new Spotify(keys.spotify);
console.log(keys.spotify);

//Create a switch statement
function myChoices(userAction){

    switch(userAction){

        case "concert-this":
        getBandsInTown();
        break;

        case "spotify-this-song":
        getSpotify();
        break;

        case "movie-this":
        getMovies();
        break;

        case "do-what-it-says":
        getObeyTheRules();
        break;
    }
}

function getBandsInTown(bands){

}

function getSpotify(songName){
    if(songName === undefined){
        songName = "The Ace";
    }

    spotify.search(
        {
            type: "track", 
            query: userAction
        },
        function(err, data){
            if(err){
                console.log("An error occurred");
                return;
            }

            var songlist = data.tracks.items;

            for(var p = 0; p < songlist.length; p++){
                console.log(p);
                console.log("Artist: " + songlist[p].artists.map(getArtistsName));
                console.log("Name" + songlist[p].name);
                console.log("Preview" + songlist.preview_url);
                console.log("Album" + songlist.album.name);
            }
        }
    )

}

function getMovies(movie){

}

function getObeyTheRules(obeyOrElse){
    fs.readFile("random.txt", "utf8", function(err, data){

        var txt = data.split(",");
        getSpotify(txt[1]);

    });

}