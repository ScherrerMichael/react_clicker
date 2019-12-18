import * as React from 'react';

// an object type so we dont have to write it out every time we want to use it
// https://basarat.gitbooks.io/typescript/docs/types/index-signatures.html
type PowerUpObj = {[index: string]: PowerUp};

/** a function to make all the power ups in one go
 *
 * this can be used to load power ups from a file eventually
 */
function makePowerUps(): PowerUpObj {
  // set up a few basic power us to try out
  // typescript can be strict with mixed types
  // so will just pass power as string to keep everything cool
  const power_ups = [
    ['1', 'basic', 'the first power up'],
    ['10', 'more power', 'another power up'],
  ];

  // instantiate an object to return
  let power_up_obj: PowerUpObj = {};

  // loop over the power ups
  for (const power_array of power_ups) {
    // instantiate a PowerUp for each array
    const p_up = new PowerUp(power_array[0], power_array[1], power_array[2]);

    // add it to the return object
    power_up_obj[p_up.name] = p_up;
  }

  return power_up_obj;
}

// a basic power up object
class PowerUp {
  // this is for typescript, like declaring a class or struct in c++
  name: string;
  description: string;
  power: number;

  constructor(power: string, name: string, description: string) {
    this.name = name;
    this.power = Number.parseInt(power);
    this.description = description;
  }
}

/** `(TYPE) => TYPE` is a function type in typescript
 *
 * a function that takes a string and returns a number
 * (var: string) => number
 *
 * a function that takes nothing and returns an array of numbers
 * () => number[]
 *
 * a function thats takes nothing and returns nothing
 * () => void
 *
 */
export interface PowerUpsProps { handleClick: (power: number) => void };

export interface PowerUpsState { powerUpArray: PowerUpObj };

export class PowerUps extends React.Component<PowerUpsProps, PowerUpsState> {
  constructor(props: PowerUpsProps) {
    super(props);

    this.state = {
      powerUpArray: makePowerUps(),
    }
  }

  newLi = (name: string): JSX.Element => {
    // to keep the return line short
    const click = () =>
      this.props.handleClick(this.state.powerUpArray[name].power);

    // give onClick the click the function to call when it gets clicked
    // the key as its a list
    // and the name/list text
    return <li onClick={click} key={name}>{name}</li>
  };

  makePowerUpList(): JSX.Element[] {
    // return an array of <li> tags made from newLi
    return Object.keys(this.state.powerUpArray).map(this.newLi);
  }

  render() {
    // return a ordered list with the li tags made from the makePowerUpList
    return (
      <ol>
        {this.makePowerUpList()}
      </ol>
    );
  }
}
