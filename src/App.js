import './App.css'; 
import Keyboard from './components/Keyboard';
import Nav from './components/Nav';
import Tabela from './components/Tabela';

function App() {
  return (
    <div className="App">
      <Nav />
      <Tabela />
      <Keyboard />    
    </div>
  );
}

export default App;
