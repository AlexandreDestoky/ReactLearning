import useCounter from '../hooks/use-counter';

import Card from './Card';

const ForwardCounter = () => {
  const counter2 = useCounter();

  return <Card>{counter2}</Card>;
};

export default ForwardCounter;
