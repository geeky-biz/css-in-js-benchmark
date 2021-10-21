import React, { useState } from "react";
import { styled } from 'linaria/react'

const Button = styled.button`
  border-radius: 3px;
  margin: 0.5em 1em;
  padding: 0.25em 1em;


  background: ${props => (props.primary ? props.color : 'transparent')};
  color: ${props => (props.primary ? 'white' : props.color)};
  border-width: 2px;
  border-style: solid;
  border-color: ${props => (props.color)};

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