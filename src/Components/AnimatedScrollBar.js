import { Box } from "@mui/material";
import GetBarHeight from "../hooks/GetBarHeight";
const AnimatedScrollBar = () => {
  const Percent = GetBarHeight();
  return (
    <Box
      sx={{
        position: "fixed",
        top: "40%",
        right: "3%",
        width: "2px",
        height: "180px",
        borderRadius: "5%",
        backgroundColor: "#e4ebec",
      }}
    >
      <Box
        position={"absolute"}
        sx={{
          top: `${Percent}%`,
          width: "8px",
          height: "10px",
          backgroundColor: "black",
          borderRadius: "5px 5px 1px 1px",
          right: "50%",
          transform: "translateX(50%)",
        }}
        className="scrollPoint"
      />
    </Box>
  );
};
export default AnimatedScrollBar;
