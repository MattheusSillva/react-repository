// 4 - Template expression
const TemplateExpression = () => {
    const name = "Matheus"

    const data = {
        age: 31,
        job: "Programador"
    }

  return (
    <div>
        <p>A soma é {2 + 2}</p>
        <h3>Bem vindo {name}</h3>
        <p>Sua idade é {data.age}, e voce é um  {data.job}</p>
    </div>
  )
}

export default TemplateExpression