import React from 'react'
import { Link } from 'react-router-dom'

export default function Accueil() {
  return (
    <div>
      <h1>Section Accueil</h1>
      <Link to={{
        pathname:"/Contact",
        state: {
          txt: "Voilà des données"
        }
      }}>
        Aller à Contact
      </Link>
    </div>
  )
}
