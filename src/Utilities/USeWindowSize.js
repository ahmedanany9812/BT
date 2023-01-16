import { useEffect, useState } from "react";

const UseWindowSize = () => {
  const GetSize = () => {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  };
  const [windowsize, setwindowsize] = useState(GetSize);
  useEffect(() => {
    const handelresize = () => {
      setwindowsize(GetSize());
    };
    window.addEventListener("resize", handelresize);
    return () => window.removeEventListener("resize", handelresize);
  });
  return windowsize;
};
export default UseWindowSize;
