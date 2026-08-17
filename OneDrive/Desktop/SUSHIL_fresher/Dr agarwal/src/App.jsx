import './App.css'
import React, { useState } from 'react'
import Header from './Header'
import Hero from './Hero'
import StatsAndFAQ from './StatsAndFAQ'
import Footer from './Footer'
import StatsFAQ from './StatsFAQ'
import WhyDoctors from './WhyDoctors'

function App() {

  return (
    <div className="app-container">
   <Header/>
     <Hero/>
     <WhyDoctors/>
      <StatsAndFAQ/>
     <Footer/>
    </div>
    
  )
}

export default App
