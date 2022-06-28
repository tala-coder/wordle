import { createContext, useState, useEffect } from 'react';
import { randomRijec } from '../utils/Rijeci';
const DataContext = createContext({});

export const DataProvider = ({ children }) => {
     const [tabela, setTabela] = useState([
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
      ]);

      const [pozicija, setPozicija] = useState({red:0, kolona:0}) 
      let rijec = randomRijec; console.log('random rijec -> ', rijec);

    // napraviti fun pobjedio
    let korisnikovUnos =''
    const jelPobjedio = () => {
        for (let i = 0; i < 5; i++) {
        korisnikovUnos += tabela[pozicija.red][i];
    }
    console.log(korisnikovUnos, rijec.toUpperCase());
    if (korisnikovUnos===rijec.toUpperCase()) {
        alert('korisnik je pobijedio')
    }
  } 
    return (
        <DataContext.Provider value={{
            tabela, setTabela,
            pozicija, setPozicija,
            rijec, jelPobjedio,

        }}>
            {children}
        </DataContext.Provider>
    )
}
export default DataContext;