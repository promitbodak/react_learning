import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 class='bg-green-400'>Tailwind test</h1>
      <Card username="promit"/>
      <Card username="bela"/>
    </>
  )
}

export default App
