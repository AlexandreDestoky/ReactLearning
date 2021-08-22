import React from 'react'

function Content(props) {
  console.log("MaJ content");
 
  return (
    <div className="content">
      <h1>{props.num}</h1>
      <button onClick={props.num}>clg</button>
    </div>
  )
}

export default React.memo(Content)