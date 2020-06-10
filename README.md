# LIRI Bot

LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

## NPM Dependencies
* dotenv
* axios
* moment
* request
* fs
* node-spotify-api

## API Integration
* Spotify
* OMDB
* Bands in Town

**LIRI uses the following commands:**
`<concert-this>`
* Name of the venue
* Venue location
* Date of the Event (use moment to format this as "MM/DD/YYYY")

`<spotify-this-song>`
* Artist(s)
* The song's name
* A preview link of the song from Spotify
* The album that the song is from
**If no song is provided then the program will default to "The Sign" by Ace of Base**

`<movie-this>`
* Title of the movie.
* Year the movie came out.
* IMDB Rating of the movie.
* Country where the movie was released.
* Language of the movie.
* Plot of the movie.
* Actors in the movie.
**If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody'**

`<do-what-it-says>`
* It runs spotify-this-song for "I Want it That Way," as follows the text in random.txt.
