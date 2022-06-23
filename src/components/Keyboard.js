import React from 'react'
import SlovoKeyboard from './SlovoKeyboard';

const Keyboard = () => {
  const keys1 = ["Q", "W", "E", "R", "T", "Z", "U", "I", "O", "P"];
  const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const keys3 = ["Y", "X", "C", "V", "B", "N", "M"];
  return (
    <div className="keyboard">
      <div className="line1">
        {keys1.map((key) => {
          return <SlovoKeyboard value={key}/*  disabled={disabledLetters.includes(key) }*/ />;
        })}
      </div>
      <div className="line2">
        {keys2.map((key) => {
          return <SlovoKeyboard value={key}/*  disabled={disabledLetters.includes(key) }*/ />;
        })}
      </div>
      <div className="line3"> 
        <div className='key' style={{"width" : "15%"}}> {"ENTER"} </div> 
        {keys3.map((key) => {
          return <SlovoKeyboard value={key}/*  disabled={disabledLetters.includes(key) }*/ />;
        })} 
        <div className='key' style={{"width" : "15%"}}> {"DELETE"} </div> 
      </div>
    </div>
  )
}

export default Keyboard