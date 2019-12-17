import * as React from 'react';

// import a component we made
import { Clicker } from './Clicker';
import { PowerUps } from './PowerUps';
import { Info } from './Info';

// let typescript know the shape of the state object we will use
interface GameState {user_score: number, click_power: number};

// a class that will store our data and wrap all the other tags and components
export class Game extends React.Component<{}, GameState> {

  /** the constructor like c++ */
  constructor(props: {}) {
    // tell javascript to instantiate the parent class
    super(props);

    // set the state to beginning values
    this.state = {
      user_score: 0,
      click_power: 1,
    }

  }

  /** a basic click handler
   *
   * were using an anonymous function because it will retain context from
   * this component when we pass it in to the Clicker component
   * ask if you dont know what I mean
   */
  handleClickerClick = (): void => {
    // increment the click score by the click power
    const new_total = this.state.user_score + this.state.click_power;

    // set state to the new value, new_total will replace user_score's value
    this.setState({user_score: new_total});
  }

  handlePowerUpClick = (new_power: number): void => {
    const power = this.state.click_power + new_power;

    this.setState({click_power: power});
  }

  /** a function to render these components */
  render(): JSX.Element {
    // to keep everything under 80 chars and more readable
    const user_score = this.state.user_score;
    const click_power = this.state.click_power;

    // render is a function to return out what we want to render
    // wrap the components in a div as react expects render to return only
    // one tag (this pattern of wrapping things in a div is used a lot in react)
    return (
      <div id='game-logic'>
        <Info user_score={user_score} click_power={click_power} />
        <PowerUps handleClick={this.handlePowerUpClick} />
        <Clicker handleClick={this.handleClickerClick} />
      </div>
    );
  }
}
