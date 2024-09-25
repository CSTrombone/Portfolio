import React from 'react'
import styles from "./About.module.css"
import { getImageUrl } from "../../utils"

export const About = () => {
  return (
    <>
        <section className = {styles.container} id = "about">
            <h2 className = {styles.title}> About Me </h2>
            <ul className = {styles.aboutItems}>
                <li className = {styles.aboutItem}>
                    <div className = {styles.aboutItemText}>
                        <h3> Something Helpful </h3>
                        <p> I swear I'm not a waste of time </p>
                    </div>
                </li>
            </ul>

        </section>
    </>
  )
}
