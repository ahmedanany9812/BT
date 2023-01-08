import { Box } from "@mui/material";
import { useEffect } from "react";
const AnimatedScrollBar = () => {
  useEffect(() => {
    const updatePercent = () => {
      var winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      var height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      var scrolled = (winScroll / height) * 100;
      document.getElementById("scrollPoint").style.top = scrolled + "%";
    };
    window.addEventListener("scroll", updatePercent);
    return () => {
      window.removeEventListener("scroll", updatePercent);
    };
  }, []);
  return (
    <Box
      sx={{
        position: "fixed",
        top: "35%",
        right: "3%",
        width: "2px",
        height: "180px",
        borderRadius: "5%",
        backgroundColor: "#dfd9d9",
        // display: { xs: "none", sm: "block" },
      }}
    >
      <Box
        position={"absolute"}
        sx={{
          top: 0,
          width: "8px",
          height: "10px",
          backgroundColor: "whitesmoke",
          borderRadius: "5px 5px 1px 1px",
          right: "50%",
          transform: "translateX(50%)",
        }}
        id="scrollPoint"
      />
    </Box>
  );
};
export default AnimatedScrollBar;
