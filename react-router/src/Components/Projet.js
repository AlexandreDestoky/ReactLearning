import React from 'react'
import { useHistory, useParams } from 'react-router'

export default function Projet() {
  const {slug} = useParams();



  const history = useHistory();
  const retourAccueil = function() {
    console.log("Retour à l'accueil");
    setTimeout(() => {
      history.push("/")
    }, 1000);
  }
  return (
    <div>
      <h1>Section Projet</h1>
      <p>{slug}</p>
      <button onClick={retourAccueil}>Go TO Home</button>
    </div>
  )
}
