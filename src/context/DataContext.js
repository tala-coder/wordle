import { createContext, useState } from 'react';
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

    const [pozicija, setPozicija] = useState({ red: 0, kolona: 0 });
    const [iskoristenaSlova, setIskoristenaSlova] = useState([]);
    let rijec = randomRijec; console.log('random rijec -> ', rijec);

    const [pobjeda, setPobjeda] = useState(false);
    const [nerijeseno, setNerijeseno] = useState(false);


    let korisnikovUnos = ''
    const jelPobjedio = () => {
        for (let i = 0; i < 5; i++) {
            korisnikovUnos += tabela[pozicija.red][i];
        }
        if (korisnikovUnos === rijec.toUpperCase()) {
            setPobjeda(true)
        }
        else if (pozicija.red === 5 && pozicija.kolona === 5) {
            setNerijeseno(true)
        }

    }
    return (
        <DataContext.Provider value={{
            tabela, setTabela,
            pozicija, setPozicija,
            rijec, jelPobjedio,
            iskoristenaSlova, setIskoristenaSlova,
            pobjeda, nerijeseno
        }}>
            {children}
        </DataContext.Provider>
    )
}
export default DataContext;