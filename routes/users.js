const userRouter = require('express').Router();

const { getCurrentUserInfo, updateUserInfo } = require('../controllers/users');
const {
  getCurrentUserInfoValidator,
  updateUserInfoValidator,
} = require('../middlewares/validation');

userRouter.get('/users/me', getCurrentUserInfoValidator, getCurrentUserInfo);

userRouter.patch('/users/me', updateUserInfoValidator, updateUserInfo);

module.exports = userRouter;
