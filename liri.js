//Read and set environment variables with the .env package
require("dotenv").config();
var momentJS = require("moment");

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
    var query = "https://rest.bandsintown.com/artists/" + bands + "/events?app_id=codingbootcamp";

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
    var axios = require("axios");
    var movieName = inputParameter;
    var movieURL = "http://www.omdbapi.com/?t= " + movieName + "&y=&plot=short&apikey=trilogy";

    axios.get(movieURL).then(
        function(response){
            console.log(response.data);
            console.log("-----Movie Information-----");
            console.log("Movie Title: " + response.data.Title);
            console.log("Release Year: " + response.data.Year);
            console.log("IMDb Rating: " + response.data.imdbRating);
            console.log("Rotten Tomatoes Rating: " + response.data.Ratings[0].Value);
            console.log("Country Produced: " + response.data.Country);
            console.log("Language: " + response.data.Language);
            console.log("Plot: " + response.data.Plot);
            console.log("Actors: " + response.data.Actors);
        }
    )


}

// function getMovies(movie){
//     var movieName = inputParameter;
//     var movieURL = "http://www.omdbapi.com/?i=tt3896198" + movieName + "&y=&plot=short&apikey=feed5952";
    
//     request(movieURL, function(error, response, body){
//         if(!error && response.statusCode === 200){
//             var movieInfo = JSON.parse(body);
//             console.log("-----Movie Information-----");
//             console.log("Movie Title: " + movieInfo.title);
//             console.log("Release Year: " + movieInfo.year);
//             console.log("IMDB Rating: ");
//             console.log("Rotten Tomatoes Rating: ");
//             console.log("Country Produced: " + movieInfo.country);
//             console.log("Language: " + movieInfo.language);
//             console.log("Plot: " + movieInfo.plot);
//             console.log("Actors: " + movieInfo.actors);
//         }
//     })
// }

function getObeyTheRules(obeyOrElse){
    fs.readFile("random.txt", "utf8", function(err, data){

        var txt = data.split(",");
        getSpotify(txt[1]);

    });

}