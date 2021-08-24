import React from 'react'
import { useSelector } from 'react-redux'

export default function Counter() {

  const count = useSelector(state => state.count)

  return (
    <div>
      <h1>Le beau compteur</h1>
      <p>On est à : {count}</p>
    </div>
  )
}
