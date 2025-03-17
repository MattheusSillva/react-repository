import { useState } from "react"

const Data = () => {
    let someData = 10;
    let someName = "Jojo";

    const [anotherNumber, setAnotherNumber] = useState(15);
    const [anotherName, setAnotherName] = useState("Joseph");

  return (
    <div>
        <div>
            <p>Valor: {someData}</p>
            <p>Nome: {someName}</p>
            <button onClick={() => {someData = 15}}>Mudar variável</button>
        </div>
        <div>
            <p>Valor: {anotherNumber}</p>
            <button onClick={() => {setAnotherNumber(20)}}>Mudar state</button>
            <p>Nome: {anotherName}</p>
            <button onClick={() => {setAnotherName("Dio")}}>Mudar nome</button>
        </div>  
    </div>
  )
}

export default Data