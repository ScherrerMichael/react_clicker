import * as React from 'react';

// import a component we made
import { Clicker } from './Clicker';
import { PowerUps } from './PowerUps';
import { Info } from './Info';

// let typescript know the shape of the state object we will use
interface GameState {userScore: number, clickPower: number};

// a class that will store our data and wrap all the other tags and components
export class Game extends React.Component<{}, GameState> {

  /** the constructor like c++ */
  constructor(props: {}) {
    // tell javascript to instantiate the parent class
    super(props);

    // set the state to beginning values
    this.state = {
      userScore: 0,
      clickPower: 1,
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
    const new_total = this.state.userScore + this.state.clickPower;

    // set state to the new value, new_total will replace user_score's value
    this.setState({userScore: new_total});
  }

  handlePowerUpClick = (newPower: number): void => {
    const power = this.state.clickPower + newPower;

    this.setState({clickPower: power});
  }

  /** a function to render these components */
  render(): JSX.Element {
    // to keep everything under 80 chars and more readable
    const userScore = this.state.userScore;
    const clickPower = this.state.clickPower;

    /** render the game logic
     *
     * the class's are react components,
     * meaning we can use them in jsx like <Game />
     *
     * we can pass data like html property's or rather key=value
     * if we want to include javascript use {}, most often used for variables
     *
     * e.g.
     * <div>
     *   <Info user_score={this.state.user_score} />
     * </div>
     *
     * wrap the components in a div as react expects render to return only
     * one tag (this pattern of wrapping things in a div is used a lot in react)
     *
     */
    return (
      <div id='game-logic'>
        <Info userScore={userScore} clickPower={clickPower} />
        <PowerUps handleClick={this.handlePowerUpClick} />
        <Clicker handleClick={this.handleClickerClick} />
      </div>
    );
  }
}
