import { useState } from 'react'
import "../src/index.css";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='text-lg tracking-widest text-blue-200'> food recommedation</h1>
    </>
  )
}

export default App
