import './App.css'; 
import Keyboard from './components/Keyboard';
import Nav from './components/Nav';
import Tabela from './components/Tabela';

function App() {
  return (
    <div className="App">
      <Nav />
      <div className='game'> 
      <Tabela />
      <Keyboard /> 
      </div>   
    </div>
  );
}

export default App;
