import React, { useState } from "react";
import styled, { css } from 'styled-components';


const Button = styled.button`
  border-radius: 3px;
  margin: 0.5em 1em;
  padding: 0.25em 1em;

  ${props => props.primary && props.color && css`
    background: ${props.color};
    border: 2px solid ${props.color};
    color: white;
  `}

  ${props => !props.primary && props.color && css`
  background: transparent;
  border: 2px solid ${props.color};
  color: ${props.color};
`}

`;

const Container = styled.div`
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
          <Container>
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