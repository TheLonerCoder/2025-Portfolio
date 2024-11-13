import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Bio from './components/Bio'
import { Portfolio, ProjectSelected } from './components/Portfolio'
import Background from './components/Background'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <h1>The Loner Coder</h1> */}
      <Bio />

      <ProjectSelected />

      <Portfolio />


      <Background />
    </>
  )
}

export default App
