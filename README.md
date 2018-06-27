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
## Project structure
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

---
## Project description
Let's concisely describe some project folders and files:
### Files
+ App.js aggregates all project screens and routes and gives them access to app's store via `provider`.
+ Route.js defines all project navigation routes.
+ Api.js contains functions which help fetch and parse data from api. 
+ Types.js defines descriptions for different data types, which are used in an app.
+ Utils.js contains useful functions such as email validation, text translation, formatting uri strings etc.

### Folders
+ actions folder contains action creators and action types, which we use to get, post, delete data.
+ screens folder contains all projecr screens which user can navigate via routes.
+ enums containes files with data, which is used in different parts of an app.
+ reducers are stores for entire app data.
+ components are mostly reusable and small parts of code, which are used in different screens to render some markup.
+ store provides a way to connect reducers, actions and async storage to work together.
