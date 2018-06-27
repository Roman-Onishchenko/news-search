![Imgur](https://i.imgur.com/7xrZxT8.png)

# Kencharts
React Native mobile app for monitoring markets & stocks updates in real-time charts. It helps to keep your investments close, anywhere you go.

---

## Installation

- All the `code` required to get started

### Clone

- Clone this repo to your local machine using `https://github.com/path/to/app`

### Setup

> install npm packages

```shell
$ npm install
```
### Run

```shell
$ npm start
```
---
## Project description
Project's core folder is `src`.
>`src` folder contents:
### Folders
- actions
- components
- enums
- reducers
- screens
- store
### Files
- Api.js
- App.js
- Route.js
- Theme.js
- Types.js
- Utils.js

+ App.js aggregates all project screens and routes and gives them acccess to app's store via `provider`.
+ Route.js defines all project navigation routes.
+ Api.js contains functions which help fetch and parse data from api. 
+ Types.js defines descriptions for different data types, which are used in an app.
+ Utils.js contains useful functions such as email validation, text translation, formatting uri strings etc.
