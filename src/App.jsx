import styles from './App.module.css'
import { Bio } from './components/Bio/Bio'
import { Navbar } from './components/Navbar/Navbar'
import { About } from './components/About/About'
import { Experience } from './components/Experience/Experience'
import {useState} from 'react'

function App() {
  return (
    <>
      <div className = {styles.App}>
        <Navbar/>
          <div className = "banner"/>
        <Bio/>
        <About/>
        <Experience/>
      </div>
    </>
  )
}

export default App
