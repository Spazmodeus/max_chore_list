import { useState } from 'react'
import ChoreList from './components/ChoreList'
import Chart from './components/Chart'
import './App.css'
import { supabase } from './helpers/supabase'

function App() {
  const [earned, setEarned] = useState(500)
  const [owed, setOwed] = useState(600.00)

  return (
    <>
      <section id="center" style={{height: '100svh', width: '100%'}}>
        <Chart earned={earned} owed={owed} />
        <h2>max's chore chart</h2>
        <ChoreList supabase={supabase} setEarned={setEarned}/>
      </section>
    </>
  )
}

export default App
