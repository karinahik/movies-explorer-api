const router = require('express').Router();
const { registrationUser, loginUser } = require('../controllers/users');
const auth = require('../middlewares/auth');

// Импорт маршрутов для пользователей и фильмов
const userRouter = require('./users');
const movieRouter = require('./movies');

// Импорт валидаторов для проверки данных при регистрации и входе в приложение
const {
  loginUserValidator,
  registrationUserValidator,
} = require('../middlewares/validation');

const NotFoundError = require('../errors/NotFoundError ');

// Маршрут POST для регистрации пользователя
router.post('/signup', registrationUserValidator, registrationUser);

// Маршрут POST для входа пользователя
router.post('/signin', loginUserValidator, loginUser);

router.use(auth);

// Использование маршрутов, связанных с пользователями и фильмами
router.use('/', userRouter);
router.use('/', movieRouter);

router.use('*', (req, res, next) => {
  next(new NotFoundError('Страница не найдена'));
});

module.exports = router;
