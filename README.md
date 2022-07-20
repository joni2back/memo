# Memo game app

## Backend
1) Start the app containers using docker (nginx, mariadb, php-fpm):
`cd back && docker-compose up -d`
2) Download [composer](https://getcomposer.org/download/) and install Laravel framework and dependencies:
`docker exec -it tst_app_fpm php composer.phar install`
3) Create the environment file using the template
`cp .env.example .env`
2) Create a database with name "tst"
`docker exec -ti tst_mariadb mysql -uroot -proot -e "CREATE DATABASE tst"`
3) Run laravel migrations and seeds to create schemas and data
`docker exec -it tst_app_fpm php artisan migrate --seed`
4) Test the server response
`curl -g 'http://localhost/graphql?query={memotests{id name images {id url}}}'`

## Frontend
1) Install React framework and dependencies
`cd front && npm i`
2) Start the app
`npm start`