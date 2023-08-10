// Подключение модуля celebrate из пакета celebrate.
const { Joi, celebrate } = require('celebrate');

// Подключение регулярного выражения URL_REGEX
const URL_REGEX = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/;

// Валидатор для проверки данных при входе пользователя в систему.
const loginUserValidator = celebrate({
  body: Joi.object().keys({
    email: Joi.string()
      .required()
      .email({ tlds: { allow: false } }),
    password: Joi.string().required(),
  }),
});

// Валидатор для проверки данных при создании нового пользователя.
const registrationUserValidator = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    email: Joi.string()
      .required()
      .email({ tlds: { allow: false } }),
    password: Joi.string().required(),
  }),
});

// Валидатор для проверки данных при создании нового фильма.
const createMovieFilmValidator = celebrate({
  body: Joi.object().keys({
    country: Joi.string().required(),
    director: Joi.string().required(),
    duration: Joi.number().required(),
    year: Joi.number().required(),
    description: Joi.string().required(),
    image: Joi.string().required().regex(URL_REGEX),
    trailerLink: Joi.string().required().regex(URL_REGEX),
    thumbnail: Joi.string().required().regex(URL_REGEX),
    movieId: Joi.number().required(),
    nameRU: Joi.string().required(),
    nameEN: Joi.string().required(),
  }),
});

// Валидатор для проверки данных при удалении фильма.
const deleteMovieFilmValidator = celebrate({
  params: Joi.object().keys({
    movieId: Joi.string().hex().length(24),
  }),
});

// Валидатор для проверки данных при получении информации о текущем пользователе.
const getCurrentUserInfoValidator = celebrate({
  params: Joi.object().keys({
    userId: Joi.string().hex().length(24),
  }),
});

// Валидатор для проверки данных при обновлении информации о пользователе.
const updateUserInfoValidator = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    email: Joi.string()
      .required()
      .email({ tlds: { allow: false } }),
  }),
});

module.exports = {
  loginUserValidator,
  registrationUserValidator,
  createMovieFilmValidator,
  getCurrentUserInfoValidator,
  deleteMovieFilmValidator,
  updateUserInfoValidator,
};
