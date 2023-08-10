const movieRouter = require('express').Router();

const {
  getMoviesFilms,
  createMovieFilm,
  deleteMovieFilm,
} = require('../controllers/movies');

const {
  createMovieFilmValidator,
  deleteMovieFilmValidator,
} = require('../middlewares/validation');

// Маршрут GET для получения списка фильмов
movieRouter.get('/movies', getMoviesFilms);

// Маршрут POST для создания нового фильма
movieRouter.post('/movies', createMovieFilmValidator, createMovieFilm);

// Маршрут DELETE для удаления фильма
movieRouter.delete(
  '/movies/:movieId',
  deleteMovieFilmValidator,
  deleteMovieFilm,
);

module.exports = movieRouter;
