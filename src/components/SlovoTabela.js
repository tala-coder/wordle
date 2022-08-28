import React, { useContext, useEffect } from "react"
import DataContext from '../context/DataContext'

const SlovoTabela = ({ red, kolona }) => {
  let { tabela, trazenaRijec, pozicija, setIskoristenaSlova } = useContext(DataContext);
  let slovo = tabela[red][kolona];


  const pogodeno = trazenaRijec.toUpperCase()[kolona] === slovo;
  const postoji = !pogodeno && slovo !== "" && trazenaRijec.toUpperCase().includes(slovo);
  const id = pozicija.red > red && (pogodeno ? "pogodeno" : postoji ? "postoji" : "error");

  // console.log(pozicija);

  useEffect(() => {
    if (slovo !== "" && !postoji) {
      setIskoristenaSlova((prev) => [...prev, slovo]);
    }
  }, [pozicija.red]);

  return (
    <div className="slovo" id={id}> {slovo} </div>
  )
}

export default SlovoTabela;