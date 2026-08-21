import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './CSS/Header.css'
import Header from './components/Header.jsx'
import CenterMain from './components/CenterMain.jsx'

function App() {
  

  return (
    <div className="OverallView">

    <Header/>
    <CenterMain/>
    </div>
  )
}

export default App
