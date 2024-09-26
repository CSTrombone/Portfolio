import React from "react";
import styles from "./Skills.module.css";
import skills from "../../data/skills.json";
import { getImageUrl } from "../../utils";

export const Skills = () => {
  return (
    <>
    <div id = "skills"/>
    <section className = {styles.invistext1}> Invisible </section>
    <section className = {styles.invistext2}> Text </section>
    <section className = {styles.container}>
      <h2 className = {styles.title}> Skills </h2>
      <h1 className = {styles.subtitle}> Languages and libraries I'm familiar with </h1>
      <div className = {styles.content}>
        <div className = {styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
    </>
  );
};