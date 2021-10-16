import React from 'react'

export default function NavBar(props) {
  return (
    <nav>
      <ul>
        {props.liste.map(el => <li>{el}</li>)}
      </ul>
    </nav>
  )
}
