import styles from './App.module.css'
import { Bio } from './components/Bio/Bio'
import { Navbar } from './components/Navbar/Navbar'
import { About } from './components/About/About'
import { Skills } from './components/Skills/Skills'
import { Experience } from './components/Experience/Experience'
import { Contact } from './components/Contact/Contact'
import {useState} from 'react'

function App() {
  return (
    <>
      <div className = {styles.App}>
        <Navbar/>
          <div className = "banner"/>
        <Bio/>
        <About/>
        <Skills/>
        <Experience/>
        <Contact/>
      </div>
    </>
  )
}

export default App
