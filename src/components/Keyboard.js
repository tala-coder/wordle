import React, { useEffect, useCallback } from 'react'
import SlovoKeyboard from './SlovoKeyboard';
import DataContext from '../context/DataContext'
import { useContext } from 'react'
import { socket } from '../App';

const Keyboard = () => {
  const keys1 = ["Q", "W", "E", "R", "T", "Z", "U", "I", "O", "P"];
  const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const keys3 = ["Y", "X", "C", "V", "B", "N", "M"];
  let { tabela, pozicija, setTabela, setPozicija, jelPobjedio, iskoristenaSlova} = useContext(DataContext);

  const onSelectLetter = (value) => {
    if (pozicija.kolona > 4) return; 
    const newTable = [...tabela];
    newTable[pozicija.red][pozicija.kolona] = value;
    setTabela(newTable);
    setPozicija({
      red: pozicija.red, kolona: pozicija.kolona + 1,
    });
  }; 
  
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const odabranoSlovo = useCallback((event) => {
    if (event.key === "Enter") {
      if (pozicija.kolona !== 5) return;
      jelPobjedio();
      setPozicija({ red: pozicija.red + 1, kolona: 0 });
    } else if (event.key === "Backspace") {
      if (pozicija.kolona === 0) return;
      const newTable = [...tabela];
      newTable[pozicija.red][pozicija.kolona - 1] = "";
      setTabela(newTable);
      setPozicija({ ...pozicija, kolona: pozicija.kolona - 1 });
    } else {
      keys1.forEach((slovo) => {
        if (event.key.toLowerCase() === slovo.toLowerCase()) {
          onSelectLetter(slovo); 
        }
      });
      keys2.forEach((slovo) => {
        if (event.key.toLowerCase() === slovo.toLowerCase()) {
          onSelectLetter(slovo);
        }
      });
      keys3.forEach((slovo) => {
        if (event.key.toLowerCase() === slovo.toLowerCase()) {
          onSelectLetter(slovo);
        }
      });
    }
  },
  );

  useEffect(() => {
    document.addEventListener("keydown", odabranoSlovo);
    return () => {
      document.removeEventListener("keydown", odabranoSlovo);
    };
  }, [odabranoSlovo]);

  return (
    <div className="keyboard">
      <div className="line1">
        {keys1.map((slovo) => {
          return <SlovoKeyboard key={slovo} value={slovo}  iskoristeno={iskoristenaSlova.includes(slovo) } />;
        })}
      </div>
      <div className="line2">
        {keys2.map((slovo) => {
          return <SlovoKeyboard key={slovo} value={slovo}  iskoristeno={iskoristenaSlova.includes(slovo) } />;
        })}
      </div>
      <div className="line3">
        <SlovoKeyboard value={"ENTER"} />
        {keys3.map((slovo) => {
          return <SlovoKeyboard key={slovo} value={slovo}  iskoristeno={iskoristenaSlova.includes(slovo) } />;
        })}
        <SlovoKeyboard value={"OBRIŠI"} />
      </div>
    </div>
  )
}

export default Keyboard