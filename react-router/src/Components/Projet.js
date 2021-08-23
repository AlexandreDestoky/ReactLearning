import React from 'react'
import { useHistory } from 'react-router'

export default function Projet() {
  const history = useHistory()
  return (
    <div>
      <h1>Section Projet</h1>
      <button onClick={()=> history.push("/")}>Go TO Home</button>
    </div>
  )
}
