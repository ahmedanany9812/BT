import { Box } from "@mui/material";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);
const ScrollBar = () => {
  const scrollpoint = useRef();
  useEffect(() => {
    window.onscroll = () => {
      var height = document.body.scrollHeight - window.innerHeight;
      scrollpoint.current.style.top = `${(window.scrollY / height) * 100}%`;
    };
  }, []);
  return (
    <Box
      sx={{
        position: "fixed",
        top: "38%",
        right: "2%",
        backgroundColor: "#777",
        height: "140px",
        width: "1px",
        borderRadius:"1px"
      }}
    >
      <Box
        sx={{
          position: "relative",
          top: 0,
          backgroundColor: "black",
          height: "10px",
          width: "8px",
          transform: "translateX(-50%)",
          left: "50%",
          borderRadius: "4px 4px 2px 2px",
        }}
        className="scrollPoint"
        ref={scrollpoint}
      />
    </Box>
  );
};
export default ScrollBar;
