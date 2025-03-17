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

function App() {
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
      </div>
    </>
  )
}

export default App
