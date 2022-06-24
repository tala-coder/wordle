import React from "react"
import DataContext from '../context/DataContext'
import { useContext } from 'react'

const SlovoTabela = ({red, kolona}) => {
  let { tabela  } = useContext(DataContext);
  let slovo = tabela[red][kolona];

  return (
    <div className="slovo"> {slovo}  </div>
  )
}

export default SlovoTabela