import React from "react";
import "./Card.css";

export default function Card(props) {
  const rdmColor = () => {
    const rdmRGB = () => Math.floor(Math.random() * 255);
    return `rgb(${rdmRGB()},${rdmRGB()},${rdmRGB()})`;
  };
  return (
    <div className="card" style={{ backgroundColor: rdmColor() }}>
      {props.children}
    </div>
  );
}
