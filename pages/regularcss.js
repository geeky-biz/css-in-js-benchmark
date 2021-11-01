import React, { useState } from "react";
import styles from "../regularcss.module.css";


const App = () => {
  const [forceRerender, setForceRerender] = useState(1);
  const buttonColors = ['Brown', 'CornflowerBlue', 'DarkGoldenRod', 'DarkOliveGreen', 'DarkSalmon', 'DarkSlateGray', 'IndianRed', 'MidnightBlue', 'Sienna', 'Teal', 'YellowGreen']
  const timer = setTimeout(function(){
    if (forceRerender >= buttonColors.length-1)
      clearTimeout(timer);
    else
      setForceRerender(forceRerender + 1)
  }, 1000);

  const styleContainer = typeof window === "undefined" ? "container" : styles.container;
  
  return (
    <div>
      {
        buttonColors.map(function(btnColor,i){
            let btnClasses = [styles.btn, styles.bgTransparent, styles["border" + buttonColors[forceRerender]], styles["color" + buttonColors[forceRerender]]]
            let btnPrimaryClasses = [styles.btn, styles.colorWhite, styles["bg" + buttonColors[forceRerender]], styles["border" + buttonColors[forceRerender]]]
            const btnClass = typeof window === "undefined" ? "btn bgTransparent borderBrown colorBrown" : btnClasses.join(' ')
            const btnPrimaryClass = typeof window === "undefined" ? "btn bgBrown colorWhite" : btnPrimaryClasses.join(' ')
          return (
            <div className={`${styleContainer}`}>
            <button className={`${btnClass}`}>Normal Button</button>
            <button className={`${btnPrimaryClass}`}>Primary Button</button>
            </div>
          )
        })
      }
    </div>
  );

}

export default App;