# basic react project with typescript

## documentation

[typescript in 5 minutes](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)

[main typescript docs](https://www.typescriptlang.org/docs/home.html)

[react tutorial](https://reactjs.org/tutorial/tutorial.html)

[basic react tutorial from w3schools](https://www.w3schools.com/REACT/default.asp)

[react with type script](https://www.typescriptlang.org/docs/handbook/react-&-webpack.html)

[markdown intro (this file is markdown)](https://www.typescriptlang.org/docs/home.html)

## how to run

Im using yarn instead of npm but you can upload package-lock.json if you want
Were also using webpack to build the file js from all the ts file in src

* install dependency's
  `yarn install` or `npm install`

* run webpack
  `yarn run webpack` or `npm run webpack`

* open the `index.html` file in a browser

## project layout

will be out of date

```
# the root html, the browser will start here
index.html

# the compiled js files from the typescript compiler
dist/main.js

# source files
src/
├── components        # our react components
│   ├── Clicker.tsx   # the main clicker, where the clicker html lives
│   ├── Game.tsx      # the entry point for our game
│   └── PowerUps.tsx  # the main power up logic
└── index.tsx         # the root of the project, Game will be sourced here
```
