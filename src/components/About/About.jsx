import React, { useRef } from 'react'
import styles from "./About.module.css"
import { getImageUrl } from "../../utils"

export const About = () => {
  return (
    <>
        <div id = "about"/>
        <section className = {styles.container}>
            <h2 className = {styles.title}> About Me </h2>
            <ul className = {styles.aboutItems}>
                <li className = {styles.aboutItem}>
                    <div className = {styles.aboutItemText}>
                        <p> I'm a Computer Science major and a Jazz Performance minor at UCO. I'm in my senior year and intend to graduate in 2025. I have a passion for technology and I feel like programming is my niche! I put a lot of effort into everything I do, I obsess over learning, and I don't give up.</p>
                        <p2> I learned that discipline from musicianship </p2>
                    </div>
                </li>
            </ul>

        </section>
    </>
  )
}
