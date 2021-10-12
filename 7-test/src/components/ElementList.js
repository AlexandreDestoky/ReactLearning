import React from 'react'

export default function ElementList(props) {
  return (
    <li>
      {props.nom} 
      <span onClick={()=>props.suppr(props.id)}>❌</span>
    </li>
  )
}
