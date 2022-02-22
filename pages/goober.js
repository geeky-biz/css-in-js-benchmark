import React, { useEffect, useState } from "react";
import { setup, styled } from 'goober';
import { shouldForwardProp } from 'goober/should-forward-prop';

// First, we need to setup goober to use the React's pragma function
setup(React.createElement, undefined, undefined, shouldForwardProp(propName => {
  return !['color', 'primary'].includes(propName)
}));

const Button = styled('button')`
  border-radius: 3px;
  margin: 0.5em 1em;
  padding: 0.25em 1em;

  ${props => props.primary && props.color && `
    background: ${props.color};
    border: 2px solid ${props.color};
    color: white;
  `}

  ${props => !props.primary && props.color && `
  background: transparent;
  border: 2px solid ${props.color};
  color: ${props.color};
`}

`;

const Container = styled('div')`
  text-align: center;
`
const App = () => {
  const [forceRerender, setForceRerender] = useState(0);
  const buttonColors = ['Brown', 'CornflowerBlue', 'DarkGoldenRod', 'DarkOliveGreen', 'DarkSalmon', 'DarkSlateGray', 'IndianRed', 'MidnightBlue', 'Sienna', 'Teal', 'YellowGreen']
  const timer = setTimeout(function(){
    if (forceRerender >= buttonColors.length-1)
      clearTimeout(timer);
    else
      setForceRerender(forceRerender + 1)
  }, 1000);

return (
  <div>
    {
      buttonColors.map(function(btnColor,i){
        return (
          <Container key={i}>
          <Button color={buttonColors[forceRerender]}>Normal Button</Button>
          <Button primary color={buttonColors[forceRerender]}>Primary Button</Button>
          </Container>
        )
      })
    }
  </div>
);

}

export default App;