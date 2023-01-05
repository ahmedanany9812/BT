import { useEffect, useState } from "react";
const GetBarHeight = () => {
  const [percent, setPercent] = useState(0);
  useEffect(() => {
    const updatePercent = () => {
      const scrollprogress = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      if (scrollHeight) {
        setPercent((prev) => {
          return Number((scrollprogress / scrollHeight) * 100);
        });
      }
    };
    window.addEventListener("scroll", updatePercent);
    return () => {
      window.removeEventListener("scroll", updatePercent);
    };
  }, []);
  return percent;
};
export default GetBarHeight;
