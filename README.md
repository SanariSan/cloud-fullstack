#### Heroku disabled free tier, so I had to move project hosting to private vps and wrap parts into containers.
#### This repo is not used anymore and left here for archive and overall description.
#### CI/CD implemented using github actions right within each of [frontend](https://github.com/SanariSan/cloud-front) and [backend](https://github.com/SanariSan/cloud-backend) repos, check it out!

---

# Deployment repo

This repository is meant to be one-click-deployment to heroku solution for separate parts of project.
In this case, front and back parts of project are different repos.
Using git submodule and package.json scripts we are able to easily compile and deploy the project.

---

## ![Server](https://github.com/SanariSan/cloud-backend)

1. Express
2. PostgreSQL
3. TypeORM
4. Winston
5. Typescript

## ![Front-end](https://github.com/SanariSan/cloud-front)

1. React
2. SASS
3. Bootstrap
4. Semantic-UI
5. HTML
6. CSS
7. Typescript

## Deployment repo

1. Heroku

## Database:

![erd](https://github.com/SanariSan/cloud-fullstack/blob/assets/db.png?raw=true)

---

## How to use:

0. clone repo with

`git clone url`

1. Type

`git submodule init`

to initialize directories

2. Get content with

`git submodule update --remote`

3. Initialize heroku with these commands

`heroku login`

`heroku create <app_name>`

`heroku git:remote -a <project_name>`

4. Set heroku db config vars. If you don't have db ready - get one using

`heroku addons:create heroku-postgresql`

then type

`heroku config`

to get db connection string and set config vars this way

`heroku config:set PGSSLMODE=no-verify`

`heroku config:set DB_HOST=`

`heroku config:set DB_PORT=`

`heroku config:set DB_USERNAME=`

`heroku config:set DB_PASSWORD=`

`heroku config:set DB_DATABASE=`

5. Now you can run it on linux

`yarn deploy-linux`

Or on windows

`yarn deploy-win`

---

All futher deploys you just repeat step 2 + step 5

---

The script will get all the modules for front part, compile the bundle and copy it to the directory of this repo.
Then it will push build and backend part to heroku/

\*Note that branch which is being pushed named master (could be changed in package.json)
\*Names of submodules branches are master for both front and backend (could be changed in .gitmodules)

After files being pushed, heroku will download all backend modules into THIS directory with yarn install and then COPY them to backend directory during launch stage
\*Unfortunately I couldn't find the way to install modules inside submodule directory during push process, so we are getting it here, in deploy repo, then copying to submodule repo

---

Finally, after modules done installing and copying, backend part will start on randomly assigned port, static front going to be hosted.

To check server status just run

`heroku logs --tail -a <app_name>`

To stop app run

`heroku ps:scale web=0 -a <app_name>`

To run it again(to build againg)

`heroku ps:scale web=1 -a <app_name>`

\*IMPORTANT

In backend part, `.env` file contains db initialize parameter, where you define either drop db on app start or not, please take that into account
