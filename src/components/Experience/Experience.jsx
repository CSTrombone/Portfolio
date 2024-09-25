import React from 'react'
import styles from "./Experience.module.css"
import { getImageUrl } from "../../utils"
import skills from "../../data/skills.json"
import experience from "../../data/experience.json"

export const Experience = () => {
  return (
    <>
        <section className = {styles.container} id = "skills">
        <div className = {styles.skillTitle}> Skills </div>
            <h2 className = {styles.title}> Languages and libraries I am familiar with </h2>
            <div className = {styles.content}>
                <div className = {styles.skill}>{
                    skills.map((skill, id) => {
                        return(
                            <div key = {id}>
                                <div className = {styles.skillImageContainer}> 
                                    <img src = {getImageUrl(skill.imageSrc)} alt = {skill.title}/>
                                </div>
                                <p className = {styles.skillNames}> {skill.title} </p>
                            </div>
                        )
                    })
                }</div>
            </div>
        </section>
        <section className = {styles.xpContainer} id = "experience">
            <h2> Experience </h2>
            <div>
                <div>
                    <ul>{   
                        experience.map((experienceItem, id) => {
                            return(
                                <li key = {id}>
                                    <img 
                                        src = {getImageUrl(experienceItem.imageSrc)} 
                                        alt = {`${experienceItem.organisation} Logo`}
                                    />
                                </li>
                            )
                        })
                        }
                    </ul>
                </div>
            </div>
        </section>
    </>
  )
}
