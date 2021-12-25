import { useState } from "react";
import useCounter from "../hooks/use-counter";

import Card from "./Card";

const BackwardCounter = () => {
  const [augm, setAugm] = useState(false);
  const counter = useCounter(augm);

  return <Card>{counter}</Card>;
};

export default BackwardCounter;
