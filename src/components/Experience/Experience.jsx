import React from "react";
import styles from "./Experience.module.css";
import experience from "../../data/experience.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <>
    <div id = "experience"/>
    <section className = {styles.invistext1}> Invisible </section>
    <section className = {styles.invistext2}> Text </section>
    <section className = {styles.container}>
        <ul className = {styles.experience}>
          {experience.map((experienceItem, id) => {
            return (
              <li key = {id} className = {styles.experienceItem}>
                <img
                  src = {getImageUrl(experienceItem.imageSrc)}
                  alt = {`${experienceItem.organisation} Logo`}
                />
                <div className = {styles.experienceItemDetails}>
                  <h3>{`${experienceItem.role} ${experienceItem.organisation}`}</h3>
                  <p>{`${experienceItem.startDate}`}</p>
                  <ul>
                    {experienceItem.experiences.map((experience, id) => {
                      return <li key = {id}> {experience} </li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
    </section>
    </>
  )
};