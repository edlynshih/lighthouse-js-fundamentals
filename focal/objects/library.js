const library = {
       tracks: {
              t01: {
                     id: "t01",
                     name: "Code Monkey",
                     artist: "Jonathan Coulton",
                     album: "Thing a Week Three"
              },
              t02: {
                     id: "t02",
                     name: "Model View Controller",
                     artist: "James Dempsey",
                     album: "WWDC 2003"
              },
              t03: {
                     id: "t03",
                     name: "Four Thirty-Three",
                     artist: "John Cage",
                     album: "Woodstock 1952"
              }
       },
       playlists: {
              p01: {
                     id: "p01",
                     name: "Coding Music",
                     tracks: ["t01", "t02"],
              },
              p02: {
                     id: "p02",
                     name: "Other Playlist",
                     tracks: ["t03"]
              }
       }
};

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

var printPlaylists = function () {
       for (let key in library.playlists) {
         let name = library.playlists[key].name;
         let numberTracks = library.playlists[key].tracks.length;  
         console.log(`${key}: ${name} - ${numberTracks} tracks`);
       }  
   };
 //printPlaylists();  

// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
const printTracks = function () {
       for (let key in library.tracks) {
              let trackName = library.tracks[key].name;
              let artist = library.tracks[key].artist;
              let album = library.tracks[key].album
              console.log(`${key}: ${trackName} by ${artist} (${album})`)
       }
}
//printTracks();

// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

const printPlaylist = function (playlistId) {

       let tTracks = Object.keys(library.tracks); // [ 't01', 't02', 't03' ]
       let pTracks = Object.keys(library.playlists); //[ 'p01', 'p02' ]

       for (let tTrack of tTracks) {
              if(tTrack === playlistId) {
                     let item = library.tracks[playlistId];
                     let songTitle = item['name'];
                     let artist = item['artist'];
                     let album = item['album'];
                     console.log(`${tTrack}: ${songTitle} by ${artist} (${album})`);
              }
       }
       for (let pTrack of pTracks) {
              if(pTrack === playlistId) {
                     let item = library.playlists[playlistId];
                     let songTitle = item['name'];
                     let num = item['tracks'].length;
                     console.log(`${pTrack}: ${songTitle} - ${num} tracks`);
              }
       }
}
//printPlaylist('p02');

// adds an existing track to an existing playlist
const addTrackToPlaylist = function (trackId, playlistId) {
       library[playlistId][trackId] = {};
}

// addTrackToPlaylist("t04", "tracks");
// addTrackToPlaylist("p03", "playlists");
// console.log(library)

// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function () {
       return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

// adds a track to the library
const addTrack = function (name, artist, album) {
       let uniqueId = generateUid();
       library.tracks[uniqueId] = {
           id: uniqueId,
           name: name,
           artist: artist,
           album: album
       }
}
// addTrack("Amazing", "Spencer Smith", "Awesome");



// adds a playlist to the library
const addPlaylist = function (name) {
       let uniqueId = generateUid();
       library.playlists[uniqueId] = {
           id: uniqueId,
           name: name,
           tracks: []
       }
}

//addPlaylist("Messing");



// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function (query) {

}