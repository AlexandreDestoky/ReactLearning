import React, { useState } from "react";

export default function App() {
  const masseMaigre = 60;
  const [poids, setPoids] = useState(masseMaigre);

  const calcBodyFat = () => {
    return ((poids - masseMaigre) / poids) * 100;
  };
  return <div></div>;
}
