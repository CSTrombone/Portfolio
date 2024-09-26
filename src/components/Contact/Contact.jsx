import React from 'react'
import styles from "./Contact.module.css"
import { getImageUrl } from '../../utils'

export const Contact = () => {
  return (
    <>
        <footer className = {styles.container} id = "contact">
            <div className = {styles.text}>
                <h2> Contact Me!</h2>
                <p> I prefer my Gmail </p>
            </div>
            <ul className = {styles.links}>
                <li className = {styles.link}>
                    <img src = {getImageUrl("contact/emailIcon.png")} alt ="email"/>
                    <a href = "mailto:tboneoden@gmail.com"> tboneoden@gmail.com</a>
                </li>
                <li className = {styles.link}>
                    <img src = {getImageUrl("contact/linkedinIcon.png")} alt ="linkedin"/>
                    <a href = "https://www.linkedin.com/in/austin-oden/"> LinkedIn </a>
                </li>
                <li className = {styles.link}>
                    <img src = {getImageUrl("contact/githubIcon.png")} alt ="github"/>
                    <a href = "https://github.com/CSTrombone"> CSTrombone on GitHub </a>
                </li>
            </ul>
        </footer>
    
    </>
  )
}
