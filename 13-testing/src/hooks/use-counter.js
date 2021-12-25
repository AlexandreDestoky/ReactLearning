import { useEffect, useState } from "react";

const useCounter = (augm) => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(prevCounter => augm ? prevCounter + 1: prevCounter - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [augm]);

  return counter;
};

export default useCounter;
