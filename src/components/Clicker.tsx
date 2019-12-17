import * as React from 'react';

/** `(TYPE) => TYPE` is a function type in typescript */

/** examples
 *
 * a function that takes a string and return a number
 * (var: string) => number
 *
 * a function that takes nothing and returns an array of numbers
 * () => number[]
 *
 * a function thats taks notyhing and retuns nothing
 * () => void
 *
 */
export interface ClickerProps {handleClick: () => void};

export const Clicker = (props: ClickerProps): JSX.Element => {
  return <div id='main-clicker' onClick={() => props.handleClick()}>
    <p>the main clicker</p>
  </div>;
}

