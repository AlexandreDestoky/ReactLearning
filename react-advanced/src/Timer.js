import React from 'react'
import { useState,useEffect } from 'react';

export default function Timer() {
  const [timer, setTimer] = useState(1)

  useEffect(() => {
    const timeur = setInterval(() => {
      setTimer(timer => timer + 1)
    }, 1000);
    return () => {
      console.log("Composant détruit 🧨💣");
      clearInterval(timeur);
    }
  }, [])

  return (
    <>
      <h1>{timer}</h1>
      <h3>fragment</h3>
    </>
  )
}


