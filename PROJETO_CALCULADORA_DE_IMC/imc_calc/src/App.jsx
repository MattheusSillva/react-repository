import './App.css'

import { useState } from 'react'

import {data} from './data/data.js'

import ImcCalc from './components/imcCalc'
import ImcTable from './components/ImcTable.jsx';

function App() {
  const calcImc = (e, heigth, weigth) => {
    e.preventDefault();

    if(!weigth || !heigth) return;

    const heigthFloat = +heigth.replace(",", ".");
    const weigthFloat = +weigth.replace(",", ".");
    
    const imcResult = (weigthFloat / (heigthFloat * heigthFloat)).toFixed(1);

    setImc(imcResult);

    data.forEach((item) => {
      if(imcResult >= item.min && imcResult <= item.max) {
        setInfo(item.info);
        setInfoClass(item.infoClass);
      }
    })

    if(!info) return;
    
  }

  const resetCalc = (e) => {
    e.preventDefault();

    setImc("");
    setInfo("");
    setInfoClass("");
  }

  const [imc, setImc] = useState("");
  const [info, setInfo] = useState("");
  const [infoClass, setInfoClass] = useState("");

  return (
    <div className="container">
      {!imc ? 
      (<ImcCalc calcImc={calcImc}/>) : (<ImcTable data={data} imc={imc} info={info} infoClass={infoClass} resetCalc={resetCalc}/>)
      }
    </div>
  )
}

export default App
