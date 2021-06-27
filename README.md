This repository is meant to be one-click-deployment to heroku solution for separate parts of project.
In this case, front and back parts of project are different repos.
Using git submodule and package.json scripts we are able to easily compile and deploy the project.

---

How to use:

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

`yarn deploy`

Or on windows

`yarn deploy-win`

The script will get all the modules for front part, compile the bundle and copy it to the directory of this repo.
Then it will push build and backend part to heroku/

\*Note that branch which is being pushed named preheroku (could be changed in package.json)
\*Also note the names of submodules branches, which are master for front and preheroku for back

After files being pushed, heroku will get all back modules into THIS directory and then COPY them to back directory during launch stage
\*Unfortunately I couldn't find the way to install modules inside submodule directory during push process, so we are getting it here, in deploy repo, then copying to submodule repo

---

Finally, after modules done installing and copying, back part will start on randomly assigned port, static front going to be hosted.

To check server status just run

`heroku logs --tail -a <app_name>`

To stop app run

`heroku ps:scale web=0 -a <app_name>`

To run it again(to build againg)

`heroku ps:scale web=1 -a <app_name>`

\*IMPORTANT

In backend part, `/src/app.ts` file contains db initialize operation, where you define either drop db on build or not, please take that into account
Later will be moved to env variable, but for now it's like that.
