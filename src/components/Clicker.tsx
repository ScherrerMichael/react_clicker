import * as React from 'react';

export interface ClickerProps {handleClick: () => void};

export const Clicker = (props: ClickerProps): JSX.Element => {
  return (
    <div id='main-clicker' onClick={() => props.handleClick()}>
      <p>the main clicker</p>
    </div>
  );
}

