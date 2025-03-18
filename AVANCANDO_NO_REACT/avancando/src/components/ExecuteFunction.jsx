import React from 'react'

const ExecuteFunction = ({myfunction}) => {
  return (
    <div>
        <button onClick={myfunction}>Clique em mim</button>
    </div>
  )
}

export default ExecuteFunction