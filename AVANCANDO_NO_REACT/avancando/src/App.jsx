import './App.css'
// 2 - imagem em assets
import night from './assets/night.jpg'
// 3 - useState
import Data from './components/Data'
// 4 - Renderização de lista
import ListRender from './components/ListRender'
// 7 - Render condicional
import ConditionalRender from './components/ConditionalRender'
// 8 - props
import ShowUserName from './components/ShowUserName'
// 9 - Desestruturando props
import CarDetails from './components/CarDetails'
// 11 - Renderização de listas com componentes
const cars = [
  { id: 1, brand: "Ferrari", color: "Amarelo", km: 0 },
  { id: 2, brand: "KIA", color: "Branco", km: 200000 },
  { id: 3, brand: "Renault", color: "Azul", km: 32000 },
]
// 12 - Fragments
import Fragment from './components/Fragment'

// 13 - children
import Container from './components/Container'

// 14 - funcao em prop
import ExecuteFunction from './components/ExecuteFunction'
import { useState } from 'react'

// 15 - State lift
import Message from './components/Message'

import ChangeMessage from './components/ChangeMessage'


function App() {
    // 14 - funcao em prop
    function showMessage() {
      console.log("Evento do componente pai")
    }
    
    // 15 - State lift
    const [message, setMessage] = useState("")

    const handleMessage = (msg) => {
      setMessage(msg);
    }
   return (
    <>
      <div className='App' style={{paddingBottom: "500px"}}>
      <h1>Avançando em react</h1>
      {/* 1 - Imagem em public */}
      <img src="/img.jpg" alt="Alguma imagem" />
      {/* 2 - imagem em assets */}
      <img src={night} alt="Outra imagem" />
      <Data />
      {/* 4 - render da lista */}
      <ListRender />
      {/* render condicional */}
      <ConditionalRender />
      {/* props */}
      <ShowUserName name="Matheus" />
      {/* 9 - desestruturando props */}
      <CarDetails brand="VolksWagen" km={999} color="Vermelho"/>
      {/* 10 - reaproveitamento de componentes */}
      <CarDetails brand="Fiat" km={447} color="Branco"/>
      <CarDetails brand="Audi" km={42345} color="Azul"/>
      {/* 11 - renderização de lista com componentes */}
      {cars.map((car) => (
        <CarDetails key={car.id} brand={car.brand} color={car.color} km={car.km}/>
      ))}
      {/* 12 - Fragment */}
      <Fragment />
      {/* 13 - children */}
      <Container>
        <p>Alguma coisa</p>
      </Container>
      <Container>
        <div>
          <h2>Teste</h2>
          <p>Meu container</p>
        </div>
      </Container>
      {/* 14 - Funcao em prop */}
      <ExecuteFunction myfunction={showMessage}/>
      {/* 15 - state lift */}
      <Message msg={message}/>
      <ChangeMessage handleMessage={handleMessage}/>
      </div>
    </>
  )
}

export default App
