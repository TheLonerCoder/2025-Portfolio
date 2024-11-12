import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Bio from './components/Bio'
import Portfolio from './components/Portfolio'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <h1>The Loner Coder</h1> */}
      <Bio />

      <Portfolio />
    </>
  )
}

export default App
