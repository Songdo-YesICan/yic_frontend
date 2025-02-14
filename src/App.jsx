import { useState } from 'react'
import image from './assets/image.png'
import './App.css'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div>
        <a href="https://www.naver.com" target="_blank">
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
export default App;
