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
const userInput =process.argv.slice().join(" ")

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
    let artist = userInput;
    let concertQueryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"

    axios.get(concertQueryURL).then(function (response) {
        console.log("Name of the Venue: " + response.data[0].venue.name + "\r\n");
        console.log("Venue Location: " + response.data[0].venue.city + "\r\n");
        console.log("Date of Event: " + moment(response.data[0].datatime).format("MM-DD-YYYY") + "\r\n");
    })
};