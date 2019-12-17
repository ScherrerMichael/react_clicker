import * as React from 'react';

// import a component we made
import { Clicker } from './Clicker';
import { PowerUps } from './PowerUps';

// interface's are what the typescript compiler uses to check objects
export interface GameProps { compiler: string; framework: string; }

// let typescript know the shape of the state object we will use
interface GameState {user_score: number, click_power: number};

// a class that will store our data and wrap all the other tags and components
export class Game extends React.Component<GameProps, GameState> {

  /** the constructor like c++ */
  constructor(props: GameProps) {
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
  handleClickerClick = () => {
    // increment the click score by the click power
    const new_total = this.state.user_score + this.state.click_power;

    // set state to the new value, this takes a new object keyed by what you
    // want to change with the new value to replace the old
    this.setState({user_score: new_total});
  }

  handlePowerClick = (new_power: number) => {
    const power = this.state.click_power + new_power;

    this.setState({click_power: power});
  }

  /** a function to render these components */
  render() {
    const user_score = this.state.user_score;
    const click_power = this.state.click_power;

    // render is a function to we return out what to render
    // wrap the components in div (this pattern is used a lot in react)
    // react expects render to only return one tag
    return (
      <div id='main-game-div'>
        <p>you have {user_score} points with {click_power} click power</p>
        <PowerUps handleClick={this.handlePowerClick} />
        <Clicker handleClick={this.handleClickerClick} />
      </div>
    );
  }
}
