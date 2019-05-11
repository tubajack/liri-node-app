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
        getMovies(inputParameter);
        break;

        case "do-what-it-says":
        getObeyTheRules();
        break;
    }
}

function getBandsInTown(bands){

    for(var newParameter = 4; newParameter < process.argv.length; newParameter++){
        inputParameter += '+' + process.argv[newParameter];
    }

    var bands = inputParameter;
    var query = "https://rest.bandsintown.com/artists/" + bands + "/events?app_id=codingbootcamp";

    request(query, function(error, response, body){
        if(!error & response.statusCode === 200){
            var brock = JSON.parse(body);
            console.log(brock.length);
            
            for(var chloe = 0; chloe < brock.length; chloe++){
                //This code is giving us the venue of our concert
                console.log("Venue: " + brock[chloe].venue.name);

                //This code gives us the location of our concert
                if(brock[chloe].venue.region == ""){
                    console.log("Location: " + brock[chloe].venue.city + "," + brock[chloe].venue.country);
                }
                else{
                    console.log("Location: " + brock[chloe].venue.city + "," + brock[chloe].venue.region + "," + brock[chloe].venue.country);
                }

                //Finally, we need to get the date of our concert
                //Remember to put the date in moment.JS. 
                var johnBroddaeus = brock[chloe].datetime;
                johnBroddaeus = momentJS(johnBroddaeus).format("MM/DD/YYYY")
                console.log("Date: " + johnBroddaeus);
                console.log("\n");
            }
        }
    });


}



function getSpotify(songName){
    if(songName === undefined){
        songName = "The Ace";
    }

    for(var newParameter = 4; newParameter < process.argv.length; newParameter++){
        inputParameter += '+' + process.argv[newParameter];
    }
    var songName = inputParameter;
   
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

function getMovies(movieURL){

    for(var newMovie = 4; newMovie < process.argv.length; newMovie++){
        inputParameter += '+' + process.argv[newMovie];
    }

    var movieName = inputParameter;
    console.log(movieName);
    var movieURL = "http://www.omdbapi.com/?t= " + movieName + "&y=&plot=short&tomatoes=true&apikey=trilogy";

    if(!movieName){
        var nobody = "http://www.imdb.com/title/tt0485947/"
        console.log("If you haven't watched Mr. Nobody, then you should: " + nobody);
        console.log("It is on Netflix");
    }

    else{
        axios.get(movieURL).then(
            function(response){
                console.log(inputParameter);
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
}

function getObeyTheRules(obeyOrElse){
    fs.readFile("random.txt", "utf8", function(err, data){

        var txt = data.split(",");
        getSpotify(txt[1]);

    });

}