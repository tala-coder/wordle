import React from "react"
import DataContext from '../context/DataContext'
import { useContext } from 'react'

const SlovoTabela = ({ red, kolona }) => {
  let { tabela, rijec, pozicija } = useContext(DataContext);
  let slovo = tabela[red][kolona]; 
 // console.log('random rijec -> ', rijec);
  

  const pogodeno = rijec.toUpperCase()[kolona] === slovo;
  const postoji = !pogodeno && slovo !== "" && rijec.toUpperCase().includes(slovo);
  const id =
    pozicija.red > red &&
    (pogodeno ? "pogodeno" : postoji ? "postoji" : "error");
    
  
  return (
    <div className="slovo" id={id}> {slovo}  </div>
  )
}

export default SlovoTabela;