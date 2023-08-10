const Movie = require('../models/movie');
const ForbiddenError = require('../errors/ForbiddenError');
const InaccurateDataError = require('../errors/InaccurateDataError');
const NotFoundError = require('../errors/NotFoundError ');

// Получение списка фильмов
const getMoviesFilms = (req, res, next) => {
  Movie.find({ owner: req.user._id })
    .then((movies) => {
      res.send(movies);
    })
    .catch(next);
};

// Создание нового фильма
const createMovieFilm = (req, res, next) => {
  const {
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    movieId,
    nameRU,
    nameEN,
  } = req.body;

  // Создание нового фильма в базе данных bitfilmsdb
  Movie.create({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    movieId,
    nameRU,
    nameEN,
    owner: req.user._id,
  })
    .then((movie) => res.send(movie))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(
          new InaccurateDataError(
            'Переданы некорректные данные при создании карточки фильма',
          ),
        );
      } else {
        next(err);
      }
    });
};

// Удаление фильма
const deleteMovieFilm = (req, res, next) => {
  Movie.findById(req.params.movieId)
    .orFail(() => {
      throw new NotFoundError('Фильм с указанным _id не найден');
    })
    .then((movie) => {
      const owner = movie.owner.toString();

      // Проверка, является ли текущий пользователь владельцем фильма
      if (req.user._id === owner) {
        Movie.deleteOne(movie)
          .then(() => {
            res.send(movie);
          })
          .catch(next);
      } else {
        throw new ForbiddenError('Невозможно удалить фильм');
      }
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        next(
          new InaccurateDataError('Переданы некорректные данные для удаления'),
        );
      } else {
        next(err);
      }
    });
};

module.exports = {
  getMoviesFilms,
  createMovieFilm,
  deleteMovieFilm,
};
