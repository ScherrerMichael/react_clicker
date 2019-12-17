// the typescript index file

// our project, the Game.tsx module essentially, will be called from here

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Game } from './components/Game';

// ask react to render the game to the empty div in ./index.html
ReactDOM.render(
  // send the Game component data called; compiler and framework
  <Game compiler='TypeScript' framework='React' />,
  document.getElementById('main-game')
);
