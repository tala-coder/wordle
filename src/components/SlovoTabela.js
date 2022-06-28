import React, { useContext, useEffect } from "react"
import DataContext from '../context/DataContext' 

const SlovoTabela = ({ red, kolona }) => {
  let { tabela, rijec, pozicija, setIskoristenaSlova } = useContext(DataContext);
  let slovo = tabela[red][kolona];   
  

  const pogodeno = rijec.toUpperCase()[kolona] === slovo;
  const postoji = !pogodeno && slovo !== "" && rijec.toUpperCase().includes(slovo);
  const id = pozicija.red > red &&(pogodeno ? "pogodeno" : postoji ? "postoji" : "error");

  console.log(pozicija);

  useEffect(() => {
    if (!pogodeno && slovo !== "" && !postoji) { 
      setIskoristenaSlova((prev) => [...prev, slovo]); 
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pozicija.red]); 
  
  return (
    <div className="slovo" id={id}> {slovo} </div>
  )
}

export default SlovoTabela;