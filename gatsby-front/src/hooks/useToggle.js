import { useState } from 'react';

export const useToggle = initial => {
  const [isToggled, setToggle] = useState(initial);
  const toggle = () => setToggle(prevState => !prevState);
  // return [isToggled, setToggle, toggle];
  return { isToggled, setToggle, toggle };
};
