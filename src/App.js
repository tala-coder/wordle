import './App.css';
import Keyboard from './components/Keyboard';
import Nav from './components/Nav';
import Tabela from './components/Tabela';
import DataContext from './context/DataContext'
import { useContext } from 'react'
import Nerijeseno from './components/Nerijeseno';
import Pobjeda from './components/Pobjeda';

function App() {
  let { nerijeseno, pobjeda } = useContext(DataContext);

  return (
    <div className="App">
      <Nav />
      <div className='game'>
        <Tabela />
        {nerijeseno ? <Nerijeseno />
          : pobjeda ? <Pobjeda />
            : <Keyboard />}
      </div>
    </div>
  );
}

export default App;
