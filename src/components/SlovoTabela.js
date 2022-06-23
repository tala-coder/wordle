import React from "react"

const SlovoTabela = ({tabela, red, pozicija}) => {
  let slovo = tabela[red][pozicija];  

  return (
    <div className="slovo"> {slovo}  </div>
  )
}

export default SlovoTabela