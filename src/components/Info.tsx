import * as React from 'react';

// this describes the props being passed in from Game
export interface InfoProps { userScore: number, clickPower: number };

/** style takes an object that corresponds to css
 * p {
 *   font-style: bold;
 *   font-color: green;
 * }
 *
 ** corresponds to
 *
 * const fontObj = {
 *   fonWeight: 700,
 *   color: 'green'
 * }
 * <p style={fontObj}>words</p>
 */
const fontStyle = {
  fontWeight: 700,  // bold
  color: '#00ff00', // green
};

/** basic info
 *
 * in javascript anonymous functions will return if there is only one thing
 * javascript is NOT white space dependent so a new line dose not mater
 * its there for readability
 *
 * this can be refactored into a class when we want more things
 */
export const Info = (props: InfoProps) =>
  <p style={fontStyle}>you have {props.userScore} with {props.clickPower} click power</p>;
