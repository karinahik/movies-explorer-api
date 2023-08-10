# movies-explorer-api

## Написания бекенд части для депломного проекта Movies

В данном репозитории хранится бэкенд приложения  Movies Explorer. API роуты:

- POST /signup - регистрация пользователя
- POST /signin - логин пользователя
- GET /users/me - информация о пользователе
- PATCH /users/me - обновляет информацию о пользователе
- GET /movies - возвращает все сохранённые фильмы связанные текущим пользователем
- POST /movies - создаёт новый фильм
- DELETE /movies/:movieId - удаляет сохранённый фильм по его ID

## Установка и запуск проекта:

Клонировать репозиторий: `git clone https://github.com/karinahik/movies-explorer-api.git`

Установить зависимости: `npm install`

Запустить сервер: `npm run start`

Запустить сервер с hot-reload: `npm run dev`

## Ccылка на репозиторий 

- https://karinahik.github.io/movies-explorer-api/

## Ccылка на Pull requests

- https://github.com/karinahik/movies-explorer-api/pull/1

## Автор проекта

Карина Сергеевна
