import './ImcCalc.css'

import Button from './Button'

const imcCalc = () => {
  return (
    <div id='calc-container'>
        <h2>Calculadora de IMC</h2>
        <form id="imc-form">
            <div className="form-inputs">
                <div className="form-control">
                    <label htmlFor="heigth">Altura:</label>
                    <input type="text" name='heigth' id='heigth' placeholder='Exemplo: 1,75'/>
                </div>
                <div className="form-control">
                    <label htmlFor="weigth">Peso:</label>
                    <input type="text" name='weigth' id='weigth' placeholder='Exemplo: 70,5'/>
                </div>
            </div>
            <div className="action-control">
                <Button id="calc-btn" text="Calcular"/>
                <Button id="clear-btn" text="Limpar"/>
            </div>
        </form>
    </div>
  )
}

export default imcCalc