import './App.css'

// 2 - css de component
import MyComponent from './components/MyComponent'

// 3 - css modules
import Title from './components/Title';

function App() {
  // 4 - css inline dinamico
  const n = 15;

  // 5 - classes dinâmicas
  const redTtile = true;

  return (
    <>
      {/* CSS global */}
      <h1 className="title">CSS no react</h1>
      {/* 2 - css de component */}
      <MyComponent />
      <p>Pegou o css do component</p>
      {/* 3 - inline style */}
      <p style={{color: "blue", padding: "25px", borderTop: "1px dotted blue"}}>Este elemento tem estilos inline</p>
      {/* 4 - inline style dinamico */}
      <h2 style={n > 0 ? {color: "purple"} : {color: "magenta"}}>
        Css dinâamico
      </h2>
      <h2 style={n > 20 ? {color: "purple"} : {color: "magenta"}}>
        Css dinâamico
      </h2>
      {/* 5 - Classes dinâmicas */}
      <h2 className={redTtile ? "red-title" : "title"}>Este título vai ter uma classe</h2>
      {/* 6 - Css modules */}
      <Title />
    </>
  )
}

export default App
