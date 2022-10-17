import { createSignal } from 'solid-js'
import solidLogo from './assets/solid.svg'
import './App.css'

function App() {
  const [count, setCount] = createSignal(0)

  return (
    <div className="App">
      <img src="/vite-deno.svg" alt="Vite with Deno" />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://www.solidjs.com" target="_blank">
          <img src={solidLogo} className="logo solid" alt="Solid logo" />
        </a>
      </div>
      <h1>Vite + Solid</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and Solid logos to learn more
      </p>
    </div>
  )
}

export default App
