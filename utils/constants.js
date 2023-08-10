// Ключ для разработки
const SECRET_SIGNING_KEY_DEV = 'dev-secret';

// Адрес для подключению к базе данных монго в каталог bitfilmsdb
const URL = 'mongodb://127.0.0.1:27017/bitfilmsdb';

// Статус создания нового документа
const CREATED_CODE = 201;

module.exports = {
  SECRET_SIGNING_KEY_DEV,
  URL,
  CREATED_CODE,
};
