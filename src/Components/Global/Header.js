import { Box, Stack } from "@mui/material";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { CustomTheme } from "../../Utilities/Theme";
const Header = () => {
  const { fonts } = CustomTheme;
  const elm = useRef();
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(elm.current, {
        yPercent: 100,
        duration: 1,
      });
    });
    return () => ctx.revert();
  });
  return (
    <Stack
      direction={"row"}
      justifyContent="space-between"
      alignItems={"flex-start"}
      marginY="1rem"
    >
      <Box
        fontSize={"13px"}
        fontFamily={fonts.font5}
        sx={{ opacity: 0.9, overflow: "hidden" }}
      >
        AHMED
        <br />
        ANANY
      </Box>
      <Box
        fontSize={"13px"}
        fontFamily={fonts.font5}
        display={{ xs: "none", md: "block" }}
        sx={{ opacity: 0.7, overflow: "hidden" }}
      >
        TWITTER
      </Box>
      <Box
        fontSize={"13px"}
        fontFamily={fonts.font5}
        display={{ xs: "none", md: "block" }}
        sx={{ opacity: 0.7, overflow: "hidden" }}
      >
        AVALIBLE FOR HIRE
      </Box>
      <Stack direction={"row"} spacing="6px" alignItems={"center"}>
        <Box
          fontSize={"13px"}
          fontFamily={fonts.font5}
          sx={{ opacity: 0.9, overflow: "hidden" }}
        >
          ABOUTME
        </Box>
        <Box
          sx={{
            backgroundColor: "#ff5908",
            borderRadius: "50%",
            height: "20px",
            width: "20px",
          }}
        />
      </Stack>
    </Stack>
  );
};
export default Header;
