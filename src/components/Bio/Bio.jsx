import React from 'react'
import styles from "./Bio.module.css"
import { getImageUrl } from "../../utils"

export const Bio = () => {
  return (
    <>
        <section className = {styles.container}>
            <div className = {styles.content}>
                <h1 className = {styles.title}>I'm Austin Oden</h1>
                <p className = {styles.description}> I'm a Computer Science student at the University of Central Oklahoma! </p>
                <a href = "mailto:tboneoden@gmail.com" className = {styles.contactBtn}> My Gmail </a>               
            </div>
            <img src = {getImageUrl("bio/bioImage.png")} alt = "Photo of me" className = {styles.bioImg}/>
            <div className = {styles.topBlur}/>
            <div className = {styles.botomBlur}/>
        </section>
    </>
  )
}
