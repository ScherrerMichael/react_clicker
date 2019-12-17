import * as React from 'react';

// interface's are what the typescript compiler uses to check objects
export interface GameProps { compiler: string; framework: string; }

// a function that returns a react h1
export const Game = (props: GameProps) => {
    return <h1>using {props.compiler} with the {props.framework} framework </h1>;
}
