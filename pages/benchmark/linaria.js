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
    const [clicked, setClicked] = useState(false);
    const [startTime, setStartTime] = useState(new Date());
    const buttonColors = ['Brown', 'CornflowerBlue', 'DarkGoldenRod', 'DarkOliveGreen', 'DarkSalmon', 'DarkSlateGray', 'IndianRed', 'MidnightBlue', 'Sienna', 'Teal', 'YellowGreen']

    if (clicked)
    {
        if (((new Date()) - startTime) < 60000)
        {
            if (forceRerender > 10)
                setForceRerender(1);
            else
                setForceRerender(forceRerender + 1);
        }
        else
            setClicked(false)
    }
  return (
    <div>
        <button onClick={function(){
            setForceRerender(1);
            setClicked(true);
            }}>Start Benchmark</button>
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