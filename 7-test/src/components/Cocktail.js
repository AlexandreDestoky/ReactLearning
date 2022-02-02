import React, { useEffect } from 'react';

export default function Cocktail() {
  useEffect(() => {
    fetch(`www.thecocktaildb.com/api/json/v1/1`)
    .then(response => response.json())
    .then(data => console.log(data))
  

  }, []);
  
  return <div>
  salut
  </div>;
}
