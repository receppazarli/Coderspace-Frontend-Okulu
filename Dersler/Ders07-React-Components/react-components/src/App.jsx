import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ListItem from './components/ListItem'
import './App.css'

function App() {
  const students = ["Ali","Veli","Ayşe","Fatma"];

  return (
    <>
      <h1>Merhaba Dünya :)</h1>
      <ul>
        {students.map((student, index) =>{
          // her li ye uniq id verilmeli ilerleyen zamanlarda projelerde 
          // return <li key={index}>{student}</li> 

          return <ListItem key={index} student={student}/>
        })}
      </ul>
    </>
  )
}

export default App
