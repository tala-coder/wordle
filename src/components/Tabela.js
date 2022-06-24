import React from 'react'
import SlovoTabela from './SlovoTabela'

const Tabela = () => { 
  return (
    <div className="board">
      <br/>
      <div className="row"> 
        <SlovoTabela red={0} kolona={0} />
        <SlovoTabela red={0} kolona={1} />
        <SlovoTabela red={0} kolona={2} />
        <SlovoTabela red={0} kolona={3} />
        <SlovoTabela red={0} kolona={4} />
      </div>
      <div className="row">
        <SlovoTabela red={1} kolona={0} />
        <SlovoTabela red={1} kolona={1} />
        <SlovoTabela red={1} kolona={2} />
        <SlovoTabela red={1} kolona={3} />
        <SlovoTabela red={1} kolona={4} />
      </div>
      <div className="row">
        <SlovoTabela red={2} kolona={0} />
        <SlovoTabela red={2} kolona={1} />
        <SlovoTabela red={2} kolona={2} />
        <SlovoTabela red={2} kolona={3} />
        <SlovoTabela red={2} kolona={4} />
      </div>
      <div className="row">
        <SlovoTabela red={3} kolona={0} />
        <SlovoTabela red={3} kolona={1} />
        <SlovoTabela red={3} kolona={2} />
        <SlovoTabela red={3} kolona={3} />
        <SlovoTabela red={3} kolona={4} />
      </div>
      <div className="row">
        <SlovoTabela red={4} kolona={0} />
        <SlovoTabela red={4} kolona={1} />
        <SlovoTabela red={4} kolona={2} />
        <SlovoTabela red={4} kolona={3} />
        <SlovoTabela red={4} kolona={4} />
      </div>
      <div className="row">
        <SlovoTabela red={5} kolona={0} />
        <SlovoTabela red={5} kolona={1} />
        <SlovoTabela red={5} kolona={2} />
        <SlovoTabela red={5} kolona={3} />
        <SlovoTabela red={5} kolona={4} />
      </div>
    </div>
  )
}

export default Tabela