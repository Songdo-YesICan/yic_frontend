import { useState } from 'react'
import image from './assets/image.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={image} className="img" alt="img" />
        </a>
      </div>
      <h1>CGV APPLICATION</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}
export default App
