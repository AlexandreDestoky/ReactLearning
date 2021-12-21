import React from 'react'

 function SubList(props) {

  console.log(`sublist prénom : ${props.prenom} à ${Date.now()}` );
  return (
    <li>{props.prenom}</li>
  )
}

export default  React.memo(SubList)
