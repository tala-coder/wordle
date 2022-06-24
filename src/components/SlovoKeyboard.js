import React from 'react'
import DataContext from '../context/DataContext'
import { useContext } from 'react'

const SlovoKeyboard = ({ value }) => {
  let { pozicija, setPozicija, tabela, setTabela } = useContext(DataContext);

  const odabranoSlovo = () => {
    if (value === "ENTER") { 
      if (pozicija.kolona !== 5) return;
      setPozicija({ red: pozicija.red + 1, kolona: 0 });
    }
    else if( value ==="OBRIŠI"){
      if (pozicija.kolona === 0) return;
      const newTable = [...tabela];
      newTable[pozicija.red][pozicija.kolona-1] = "";
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

  let b = <div className="key" onClick={odabranoSlovo}> {value} </div>;
  if (value === "ENTER" || value === "OBRIŠI") {
    b = <div className="BigKey"  onClick={odabranoSlovo}> {value} </div>
  } 
  return (
    <>
      {b}
    </>
  )
}

export default SlovoKeyboard