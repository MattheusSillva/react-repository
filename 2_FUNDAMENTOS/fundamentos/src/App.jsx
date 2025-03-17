import './App.css'

// 2 - importando componente
import FirstComponet from './componets/FirstComponent'

// 4 - Template expression
import TemplateExpression from './componets/TemplateExpression'

// 5 - Hierarquia de compoenentes
import MyComponent from './componets/MyComponent'

// 6 - Evento 
import Events from './componets/Events'

function App() {
  // 3 - Comentários
  return (
    <>
    {/* 3 - Comentário em JSX */}
    <h1>Fundamentos do react</h1>
      <FirstComponet />
      <TemplateExpression />
      <MyComponent />
      <Events />
    </>
  )
}

export default App
