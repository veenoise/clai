import { useState } from 'react'
import './App.css'
import Hero from './Hero'
import Navigation from './Navigation'
import Education from './Education'
import Leader from './Leader'
import Sidepanel from './Sidepanel'
import Dog from './Dog'
import Model from './Model'
import Contact from './Contact'

function App() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Sidepanel />
        <Education />
        <Leader />
        <Dog />
        <Model />
        <Contact />
      </main>
      
    </>
  )
}

export default App
