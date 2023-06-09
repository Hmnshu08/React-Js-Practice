import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseState from './component/UseStateExample'
import UseStateArrayExample from './component/UseStateArrayExample'
import UseStateObject from './component/UseStateObject'
import UseEffectBasics from './component/useEffectExample/UseEffectBasics'
import UseEffectFetchExample from './component/useEffectExample/useEffectFetchExample'
import ConditionalRender from './component/useEffectExample/ConditionalRender'
import MultipleReturns from './component/conditionalRendering/MultipleReturns'
import ToggleChallenge from './component/conditionalRendering/ToggleChallenge'
import LoginChallenge from './component/conditionalRendering/LoginChallenge'
import ControlledInputs from './component/forms/ControlledInputs'
import ControlledInputChallenge from './component/forms/ControlledInputChallenge'
import MultipleInputs from './component/forms/MultipleInputs'

function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>

      {/* <UseState/> */}
      {/* <UseStateArrayExample/> */} 
      {/* <UseStateObject/>  */}
      {/* <UseEffectBasics/> */}
      {/* <UseEffectFetchExample/> */}
      {/* <ConditionalRender/> */}
      {/* <MultipleReturns/>  */}
      {/* Multiple fetching example */}
      {/* <ToggleChallenge/> */}
      {/* <LoginChallenge/> */}
      {/* <ControlledInputs/> */}
      {/* <ControlledInputChallenge/> */}
      <MultipleInputs/>

      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
