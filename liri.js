//Read and set environment variables with the .env package
require("dotenv").config();

//All of the required vars
var keys = require("./keys.js");
var fs = require("fs");
var request = require("request");
var axios = require("axios");

//Require Spotify
var Spotify = require('node-spotify-api');


//Declare the right commands. 
//argv[2] = user's actions
//argv[3] = input parameter(s)
var userAction = process.argv[2];
var inputParameter = process.argv[3];

myChoices(userAction);

//What if the inputParameter has multiple words?
//We surely do not want this parameter to have a process.arg[4] or even a process.argv[15]
for(var baba = 4; baba < process.argv.length; baba++){
    inputParameter += '+' + process.argv[baba];
}

//Get the Spotify keys

//console.log(spotify);

//Create a switch statement
function myChoices(userAction){
    switch(userAction){

        case "concert-this":
        getBandsInTown();
        break;

        case "spotify-this-song":
        getSpotify(inputParameter);
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
    var bandName = inputParameter;
    var query = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

}

function getSpotify(songName){
    if(songName === undefined){
        songName = "The Ace";
    }
   
    //console.log(songName)
    var spotify = new Spotify(keys.spotify);
    spotify.search(
        {
            type: "track", 
            query: songName
        },
        function(err, data){
            if(err){
                console.log("An error occurred: " + err);
                return;
            }

            var songlist = data.tracks.items;
            var artistInfo = songlist.map(val => val.artists.map(name => name.name));
            //console.log(artistInfo)
            
            for(var p = 0; p < songlist.length; p++){
                console.log(p);
                console.log("Artist(s): " + artistInfo[p]);
                console.log("Song Name: " + songlist[p].name);
                console.log("Preview: " + songlist[p].preview_url);
                console.log("Album: " + songlist[p].album.name);
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