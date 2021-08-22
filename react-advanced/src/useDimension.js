import { useState, useEffect } from "react";

export default function useDimension() {
  const [dimension, setDimension] = useState();

  useEffect(() => {
    const resizeFunc = function () {
      setDimension(window.innerWidth);
    };
    resizeFunc();

    window.addEventListener("resize", resizeFunc);
    
    return () => {
      window.addEventListener("resize", resizeFunc);
    };
  }, []);
  return dimension;
}
