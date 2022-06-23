import React, {useState} from 'react'
import SlovoTabela from './SlovoTabela'

const Tabela = () => {
  const [tabela, setTabela] = useState([
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
  ]);
    
  return (
    <div className="board">
      <br/>
      <div className="row"> 
        <SlovoTabela tabela={tabela} red={0} pozicija={0} />
        <SlovoTabela tabela={tabela} red={0} pozicija={1} />
        <SlovoTabela tabela={tabela} red={0} pozicija={2} />
        <SlovoTabela tabela={tabela} red={0} pozicija={3} />
        <SlovoTabela tabela={tabela} red={0} pozicija={4} />
      </div>
      <div className="row">
        <SlovoTabela tabela={tabela} red={1} pozicija={0} />
        <SlovoTabela tabela={tabela} red={1} pozicija={1} />
        <SlovoTabela tabela={tabela} red={1} pozicija={2} />
        <SlovoTabela tabela={tabela} red={1} pozicija={3} />
        <SlovoTabela tabela={tabela} red={1} pozicija={4} />
      </div>
      <div className="row">
        <SlovoTabela tabela={tabela} red={2} pozicija={0} />
        <SlovoTabela tabela={tabela} red={2} pozicija={1} />
        <SlovoTabela tabela={tabela} red={2} pozicija={2} />
        <SlovoTabela tabela={tabela} red={2} pozicija={3} />
        <SlovoTabela tabela={tabela} red={2} pozicija={4} />
      </div>
      <div className="row">
        <SlovoTabela tabela={tabela} red={3} pozicija={0} />
        <SlovoTabela tabela={tabela} red={3} pozicija={1} />
        <SlovoTabela tabela={tabela} red={3} pozicija={2} />
        <SlovoTabela tabela={tabela} red={3} pozicija={3} />
        <SlovoTabela tabela={tabela} red={3} pozicija={4} />
      </div>
      <div className="row">
        <SlovoTabela tabela={tabela} red={4} pozicija={0} />
        <SlovoTabela tabela={tabela} red={4} pozicija={1} />
        <SlovoTabela tabela={tabela} red={4} pozicija={2} />
        <SlovoTabela tabela={tabela} red={4} pozicija={3} />
        <SlovoTabela tabela={tabela} red={4} pozicija={4} />
      </div>
      <div className="row">
        <SlovoTabela tabela={tabela} red={5} pozicija={0} />
        <SlovoTabela tabela={tabela} red={5} pozicija={1} />
        <SlovoTabela tabela={tabela} red={5} pozicija={2} />
        <SlovoTabela tabela={tabela} red={5} pozicija={3} />
        <SlovoTabela tabela={tabela} red={5} pozicija={4} />
      </div>
    </div>
  )
}

export default Tabela