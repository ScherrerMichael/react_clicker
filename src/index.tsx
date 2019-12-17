// the typescript index file

// our project, the Game.tsx module essentially, will be called from here

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Game } from './components/Game';

// call react to render the game to main-game, the empty div in ./index.html
ReactDOM.render(
  <Game />,
  document.getElementById('main-game')
);
