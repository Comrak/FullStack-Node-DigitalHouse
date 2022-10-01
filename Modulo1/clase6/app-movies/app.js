const MOVIESDH = require("./moviesDH.js");

MOVIESDH.listMovies();
console.log("aca abajo esta el search");
console.log(MOVIESDH.searchMovie(4));
console.log(MOVIESDH.searchMoviesByGenre("drama"));
console.log("esta es la sumatoria");
console.log(MOVIESDH.totalPrice());
