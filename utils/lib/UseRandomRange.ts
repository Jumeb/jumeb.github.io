import { useEffect, useState } from 'react';

export const UseRandomRange = (number: number) => {
  const [randonRange, setRandonRange] = useState<number>(0);

  useEffect(() => {
    const floatRandom = Math.random()
    const random = Math.round(number * floatRandom)
    const updatePosition = () => {
      setRandonRange(random);
    };


    updatePosition();

    // clean-up function
    return () => setRandonRange(0);
  }, [number]);

  return randonRange;
};
