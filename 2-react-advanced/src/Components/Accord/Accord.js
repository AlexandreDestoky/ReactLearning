import React from "react";
import "./Accord.css";
import Chevron from "./chevron.svg";
import { useState, useEffect, useRef } from "react";

export default function Accord() {
  const [toggle, setToggle] = useState(false);
  const toggleState = () => setToggle(!toggle);
  const [heightEl, setHeightEl] = useState();

  const refHeight = useRef();

  useEffect(() => {
    setHeightEl(`${refHeight.current.scrollHeight}px`);
  }, []);

  return (
    <div className="accord">
      <div onClick={toggleState} className="accord-visible">
        <h2>Lorem ipsum dolor sit amet.</h2>
        <img src={Chevron} alt="chevron" />
      </div>
      <div ref={refHeight} className={`accord-toggle ${toggle ? "animated" : ""}`} style={{ height: toggle ? `${heightEl}` : "0px" }}>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam perferendis officiis corrupti animi pariatur praesentium minus
          aspernatur et, tenetur, eveniet minima necessitatibus ea, earum explicabo nostrum incidunt magnam. Dignissimos, ratione!
        </p>
      </div>
    </div>
  );
}
