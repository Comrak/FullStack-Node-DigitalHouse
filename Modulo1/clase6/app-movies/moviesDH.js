const MOVIES = require("./movies");

let moviesDH = {
  listMovies: function () {
    MOVIES.forEach((pelicula) => console.log(pelicula.title));
  },
  searchMovie: function (idTitle) {
    let result = MOVIES.filter(
      (pelicula) => pelicula.id === idTitle || pelicula.title === idTitle
    );
    return result;
  },
  searchMoviesByGenre: function (genero) {
    let result = MOVIES.filter((pelicula) => pelicula.genre === genero);
    return result;
  },
  totalPrice: function () {
    let total = MOVIES.reduce((accum, pelicula) => accum + pelicula.price, 0);
    return total;
  }
};

module.exports = moviesDH;