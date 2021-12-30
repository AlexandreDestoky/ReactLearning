import React, { useState } from "react";

export default function App() {
  const masseMaigre = 60;
  const [poids, setPoids] = useState(masseMaigre);

  const calcBodyFat = () => {
    return ((poids - masseMaigre) / poids) * 100;
  };
  return (
    <div>
      <label htmlFor="">Poids</label>
      <input
        type="number"
        placeholder="kg"
        min={masseMaigre}
        onChange={e => setPoids(e.target.value)}
      />
      <p>Pourcentage Bodyfat : {calcBodyFat().toFixed(2)}%</p>
    </div>
  );
}
