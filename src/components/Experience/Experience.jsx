import React from 'react'
import styles from "./Experience.module.css"
import { getImageUrl } from "../../utils"
import skills from "../../data/skills.json"
import experience from "../../data/experience.json"

export const Experience = () => {
  return (
    <>
        <section className = {styles.container} id = "skills">
            <h2> Skills </h2>
            <div className = {styles.content}>
                <div>{
                    skills.map((skill, id) => {
                        return(
                            <div key = {id}>
                                <div> 
                                    <img src = {getImageUrl(skill.imageSrc)} alt = {skill.title}/>
                                </div>
                                <p> {skill.title} </p>
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
