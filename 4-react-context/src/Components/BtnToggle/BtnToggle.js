import React from "react";import "./BtnToggle.css";
import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";

export default function BtnToggle() {
const {toggleTheme,theme} = useContext(ThemeContext);
  return (
    <button onClick={toggleTheme} className="btn-toggle">
      Mode {theme ? "Jour":"Nuit"}
    </button>
  )
}
