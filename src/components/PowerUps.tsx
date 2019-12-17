import * as React from 'react';

// an object type so we dont have to write it out every time we want to use it
type PowerUpObj = {[index: string]: PowerUp};

/** a function to make all the power ups in one go
 *
 * this can be used to load power ups from a file eventually
 */
function make_power_ups(): PowerUpObj {
  // set up a few basic power us to try out
  const power_ups = [
    ['1', 'basick', 'the first power up'],
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
// export class PowerUp {
class PowerUp {
  // this is for typescript, like declaring a class in c++
  name: string;
  description: string;
  power: number;

  constructor(power: string, name: string, description: string) {
    this.name = name;
    // typescript can be strict with mixed types so will just take in the power
    // as as string to keep everything cool
    this.power = Number.parseInt(power);
    this.description = description;
  }
}

// this describes the props being passed in from Game
export interface PowerUpsProps { handleClick: (power: number) => void };

export interface PowerUpsState { power_ups: PowerUpObj };

export class PowerUps extends React.Component<PowerUpsProps, PowerUpsState> {
  constructor(props: PowerUpsProps) {
    super(props);

    this.state = {
      power_ups: make_power_ups(),
    }
  }

  newLi(name: string): JSX.Element {
    // an anonymous function to keep things short
    const handleOnClick = (name: string) =>
      this.props.handleClick(this.state.power_ups[name].power);

    return <li onClick={() => handleOnClick(name)} key={name} >{name}</li>;
  }

  makePowerUpList() {
    // return an array of <li> tags made from newLi
    return Object.keys(this.state.power_ups).map(this.newLi);
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
