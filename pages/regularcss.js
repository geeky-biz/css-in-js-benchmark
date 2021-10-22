import React, { useState } from "react";
import styles from "../regularcss.module.css";


const App = () => {
  const [forceRerender, setForceRerender] = useState(0);
  const buttonColors = ['Brown', 'CornflowerBlue', 'DarkGoldenRod', 'DarkOliveGreen', 'DarkSalmon', 'DarkSlateGray', 'IndianRed', 'MidnightBlue', 'Sienna', 'Teal', 'YellowGreen']
  const timer = setTimeout(function(){
    if (forceRerender >= buttonColors.length-1)
      clearTimeout(timer);
    else
      setForceRerender(forceRerender + 1)
  }, 1000);

  console.log(forceRerender)
  console.log('rendering regularcss component')
  return (
    <div>
      {
        buttonColors.map(function(btnColor,i){
            let btnClasses = [styles.btn, styles.bgTransparent, styles["border" + buttonColors[forceRerender]], styles["color" + buttonColors[forceRerender]]]
            let btnPrimaryClasses = [styles.btn, styles.colorWhite, styles["bg" + buttonColors[forceRerender]], styles["border" + buttonColors[forceRerender]]]
          return (
            <div className={styles.container}>
            <button className={btnClasses.join(' ')}>Normal Button</button>
            <button className={btnPrimaryClasses.join(' ')}>Primary Button</button>
            </div>
          )
        })
      }
    </div>
  );

}

export default App;