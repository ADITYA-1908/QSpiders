import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <h1 className='text-bold bg-gray-300 text-black'>Hello</h1>
      </div>
    </>
  )
}

export default App
