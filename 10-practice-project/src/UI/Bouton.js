import React from 'react'
import styles from "./Bouton.module.css";

export default function Bouton(props) {
  return (
    <button className={styles.button}>
      {props.children}
    </button>
  )
}
