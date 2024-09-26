import React, {useState, useEffect} from 'react';
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  useEffect( () => {
      const scrollHandler = () => {
        setSticky(window.scrollY > 0)
      }

      window.addEventListener('scroll', scrollHandler)
      return () => window.removeEventListener('scroll', scrollHandler)
  })

  return (
      <nav className = {`${sticky ? styles.sticky : styles.navbar}`}>
        <a className = {styles.title} href = "https://cstrombone.github.io/Portfolio/"> Portfolio </a>
        <div className = {styles.menu}>
          <img 
              className = {styles.menuBtn} 
              src = {menuOpen ? getImageUrl("nav/pizza.png") : getImageUrl("nav/hamburger.png")} 
              alt = "menu-button"
              onClick = {() => setMenuOpen(!menuOpen)}
          />
          <ul className = {`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
              onClick = {() => setMenuOpen(false)}
          >
            <li> <a href = "#about"> About </a> </li>
            <li> <a href = "#skills"> Skills </a> </li>
            <li> <a href = "#experience"> Experience </a> </li>
            <li> <a href = "#contact"> Contact </a> </li>
          </ul>
        </div>
      </nav>
  )
}
