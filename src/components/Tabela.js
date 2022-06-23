import React from 'react'
import Slovo from './Slovo'

const Tabela = () => {
  const [tabela, setTabela] = ([
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],] )
    
  return (
    <div className="board">
      {" "}
      <div className="row"> 
        <Slovo pozicija={0} red={0} />
        <Slovo pozicija={1} red={0} />
        <Slovo pozicija={2} red={0} />
        <Slovo pozicija={3} red={0} />
        <Slovo pozicija={4} red={0} />
      </div>
      <div className="row">
        <Slovo pozicija={0} red={1} />
        <Slovo pozicija={1} red={1} />
        <Slovo pozicija={2} red={1} />
        <Slovo pozicija={3} red={1} />
        <Slovo pozicija={4} red={1} />
      </div>
      <div className="row">
        <Slovo pozicija={0} red={2} />
        <Slovo pozicija={1} red={2} />
        <Slovo pozicija={2} red={2} />
        <Slovo pozicija={3} red={2} />
        <Slovo pozicija={4} red={2} />
      </div>
      <div className="row">
        <Slovo pozicija={0} red={3} />
        <Slovo pozicija={1} red={3} />
        <Slovo pozicija={2} red={3} />
        <Slovo pozicija={3} red={3} />
        <Slovo pozicija={4} red={3} />
      </div>
      <div className="row">
        <Slovo pozicija={0} red={4} />
        <Slovo pozicija={1} red={4} />
        <Slovo pozicija={2} red={4} />
        <Slovo pozicija={3} red={4} />
        <Slovo pozicija={4} red={4} />
      </div>
      <div className="row">
        <Slovo pozicija={0} red={5} />
        <Slovo pozicija={1} red={5} />
        <Slovo pozicija={2} red={5} />
        <Slovo pozicija={3} red={5} />
        <Slovo pozicija={4} red={5} />
      </div>
    </div>
  )
}

export default Tabela