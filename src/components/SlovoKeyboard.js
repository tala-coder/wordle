import React from 'react'
import DataContext from '../context/DataContext'
import { useContext } from 'react'

const SlovoKeyboard = ({ value, iskoristeno }) => {
  let { pozicija, setPozicija, tabela, setTabela, jelPobjedio, setNerijeseno} = useContext(DataContext);

  const odabranoSlovo = () => { 
    if (value === "ENTER") {
      if (pozicija.kolona !== 5) return;
      jelPobjedio(); 
      if (pozicija.red === 5 && pozicija.kolona === 5) {
        setNerijeseno(true)
      } 
    }
    else if (value === "OBRIŠI") {
      if (pozicija.kolona === 0) return;
      const newTable = [...tabela];
      newTable[pozicija.red][pozicija.kolona - 1] = "";
      setTabela(newTable);
      setPozicija({ ...pozicija, kolona: pozicija.kolona - 1 });
    }
    else {
      if (pozicija.kolona > 4) return;
      const newTable = [...tabela];
      newTable[pozicija.red][pozicija.kolona] = value;
      setTabela(newTable);
      setPozicija({ ...pozicija, kolona: pozicija.kolona + 1 })
    }
  }

  let b = <div className="key" id={iskoristeno ? "disabled" : undefined} onClick={odabranoSlovo}> {value} </div>;
  if (value === "ENTER" || value === "OBRIŠI") {
    b = <div className="BigKey" onClick={odabranoSlovo}> {value} </div>
  }
  return (
    <>
      {b}
    </>
  )
}

export default SlovoKeyboard