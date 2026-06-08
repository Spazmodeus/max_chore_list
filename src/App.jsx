import { useState } from 'react'
import ChoreList from './components/ChoreList'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <h2>max's chore chart</h2>
        <ChoreList/>
      </section>
    </>
  )
}

export default App
