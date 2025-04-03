# QA Wolf Take-Home Assignment

## Why is this a web app?

* Creating a web app is just WAY more fun than writing a simple script alone
* I added a resource to my [Nest.JS Mega Backend](https://github.com/JCWoodworker/NestJS_Mega_Backend) to handle web scraping, and that was a blast!!
  * Just the ONE endpoint for now to handle fetching the articles from Hacker News

## How do I run this??

* TACKLE THESE TWO ITEMS FIRST:
* Have you unzipped the file? Go ahead and run ```yarn install```
OR
* Have you cloned the repo from Github? Go ahead and run ```yarn install```

  ### OPTION 1

  * Run ```yarn dev```
  * If it didn't happen automatically, open your browser and go to ```http://localhost:5173```
  * Check out the site!!

  ### OPTION 2

  * ORIGINAL REQUIREMENT !!!
  * From the root directory run ```node QA_WOLF_TAKE_HOME```
  * You'll have the following logged to the console:
    * ```Articles returned: 100```
    * ```Articles are sorted: true``` (hopefully TRUE, lol)
    * ```All articles: []``` A list of all articles and their timestamps IN ORDER !!

  ### OPTION 3

  * Just navigate to the fully deployed webite [HERE](https://qa-wolf-online-assessment.netlify.app/)

## Troubleshooting

* Your node version should auto-update when opening this project.
  * If not, please make sure you are using Node version 20.9.0 or greater.
  * Run ```nvm install 20.9.0``` then ```nvm use 20.9.0``` (or just ```nvm use 20.9.0``` if already installed)
