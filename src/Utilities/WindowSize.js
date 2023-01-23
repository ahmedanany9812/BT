import { useEffect, useState } from "react";
const UseWindowSize = () => {
  const getSize = () => {
    return {
      height: window.innerHeight,
      width: window.innerWidth,
    };
  };
  const [WindowSize, setWindowSize] = useState(getSize);
  useEffect(() => {
    const handelResize = () => {
      setWindowSize(getSize());
    };
    window.addEventListener("resize", handelResize);
    return () => window.removeEventListener("resize", handelResize);
  });
  return WindowSize;
};
export default UseWindowSize;
