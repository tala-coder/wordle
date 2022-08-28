import './App.css';
import Keyboard from './components/Keyboard';
import Nav from './components/Nav';
import Tabela from './components/Tabela';
import DataContext from './context/DataContext'
import { useContext, useEffect } from 'react'
import Nerijeseno from './components/Nerijeseno';
import Pobjeda from './components/Pobjeda';

function App() {
  let { nerijeseno, pobjeda, igraPocinje } = useContext(DataContext);

  let prikazKorisniku;


  if (igraPocinje) {
    prikazKorisniku = <div className='game' >
      <Tabela />
      {
        nerijeseno ? <Nerijeseno />
          : pobjeda ? <Pobjeda />
            : <Keyboard />
      }
    </div >;
  } else {
    prikazKorisniku = <h1>Loading</h1>;
  } 

  return (
    <div className="App">
      <Nav />
      {prikazKorisniku}
    </div>
  );
}

export default App;
