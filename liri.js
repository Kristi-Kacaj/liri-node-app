require("dotenv").config();

//Create variable to access the keys.js file containing the API keys
let keys = require("./keys.js");
//Create variables for the packages
let Spotify = require("node-spotify-api");
let axios = require("axios");
let fs = require("fs");
let moment = require("moment");

//Variables for the arguments to be inputted by the user
let command = process.argv[2];
let userInput = process.argv.slice().join(" ")

//Use switch statement to determine which command is executed
function liriRun (command, userInput) {
    switch (command) {
        case "concert-this":
            getConcert(userInput);
            break;
        case "spotify-this-song":
            getSpotify(userInput);
            break;
        case "movie-this":
            getMovie(userInput);
            break;
        case "do-what-it-says":
            doIt();
            break;
        default:
            console.log("Please try again.")
    }
};

//Function to search Bands in Town API
function getConcert(artist) {
    let concertQueryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

    axios.get(concertQueryURL).then(function (response) {
        console.log("Name of the Venue: " + response.data[0].venue.name + "\r\n");
        console.log("Venue Location: " + response.data[0].venue.city + "\r\n");
        console.log("Date of Event: " + moment(response.data[0].datatime).format("MM-DD-YYYY") + "\r\n");
    })
};

//Function for Spotify API
function getSpotify(song) {
    let spotify = new Spotify(keys.spotify);

    if (!song) {
        song = "The Sign";
    };

    spotify.search({
        type: "track",
        query: song
    }, function (err, data) {
        if (err) {
            return console.log("Error occurred: " + err);
        }

        console.log("Artist Name: " + data.tracks.items[0].album.artists[0].name + "\r\n");
        console.log("Song Name: " + data.tracks.items[0].name + "\r\n");
        console.log("Preview Link: " + data.tracks.items[0].href + "\r\n");
        console.log("Album: " + data.tracks.items[0].album.name + "\r\n");
    });
};