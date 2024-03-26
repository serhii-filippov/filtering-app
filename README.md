## Simple filtering app

Steps to run this project:

1. Run `docker build -t filter-app .`
2. Run `docker-compose up`
3. Reach the API at 'localhost:8080'

## Seed the DB
By default in the 'dev' environment the every app launch will lead to DB seed for 100 entries.
To prevent that either set another value for the NODE_ENV var or goto .env and update
DONT_SEED with 'true' value.

## Security
To disable noisy 403s simply comment out @Auth decorator in the corresponding controller.