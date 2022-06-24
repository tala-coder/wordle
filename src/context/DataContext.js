import { createContext, useState, useEffect } from 'react';
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


    return (
        <DataContext.Provider value={{
            tabela, setTabela,
            pozicija, setPozicija,

        }}>
            {children}
        </DataContext.Provider>
    )
}
export default DataContext;