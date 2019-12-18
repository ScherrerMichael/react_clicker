import * as React from 'react';

// this describes the props being passed in from Game
export interface InfoProps { user_score: number, click_power: number };

/** basic info
 *
 * in javascript anonymous functions will return if there is only one thing
 * javascript is NOT white space dependent so a new line dose not mater
 * its there for readability
 *
 * this can be refactored into a class when we want more things
 */

export const Info = (props: InfoProps) =>
  <p>you have {props.user_score} with {props.click_power} click power</p>;
