import { Box, Stack } from "@mui/material";
import Header from "../Global/Header";
import Lottie from "lottie-react";
import scrolldown from "../../Utilities/scroll_down.json";
import { CustomTheme } from "../../Utilities/Theme";
import { useEffect, useRef } from "react";
import gsap from "gsap";
const HeadSection = () => {
  const { fonts } = CustomTheme;
  const elm = useRef();
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(elm.current, {
        yPercent: 100,
        duration: 1.3,
      });
    });
    return () => ctx.revert();
  });
  return (
    <Box minHeight={"100vh"} position="relative">
      <Header />
      <Box width="100%" marginTop={{ xs: "4rem", sm: "5rem" }}>
        <Stack
          direction={"row"}
          alignItems="center"
          spacing={{ xs: "5px", sm: "22px" }}
          lineHeight={{ xs: "70px", sm: "170px" }}
          ref={elm}
        >
          <Box
            fontSize={"11.5vw"}
            fontFamily={fonts.font5}
            fontWeight={300}
            letterSpacing={{ sm: "-8px", xs: "-3px" }}
          >
            FULL
          </Box>
          <Box
            sx={{
              backgroundColor: "#e2e0e0",
              height: { xs: "9px", sm: "30px" },
              width: "100%",
            }}
          />
          <Box
            fontSize={"11.5vw"}
            fontFamily={fonts.font5}
            fontWeight={300}
            letterSpacing={{ sm: "-8px", xs: "-3px" }}
          >
            STACK
          </Box>
        </Stack>
        <Box
          fontSize={"11.5vw"}
          fontFamily={fonts.font5}
          fontWeight={300}
          letterSpacing={{ sm: "-10px", xs: "-3px" }}
          lineHeight={{ xs: "70px", sm: "170px" }}
          sx={{ overflow: "hidden" }}
        >
          JS
        </Box>
        <Stack direction={"row"} alignItems="center" flexWrap={"nowrap"}>
          <Box
            fontSize={"11.5vw"}
            fontFamily={fonts.font5}
            fontWeight={300}
            letterSpacing={{ sm: "-10px", xs: "-3px" }}
            lineHeight={{ xs: "70px", sm: "170px" }}
            sx={{ overflow: "hidden" }}
          >
            DEVELOPER
          </Box>
          <Box
            component={Lottie}
            animationData={scrolldown}
            style={{ width: "160px" }}
            display={{ xs: "none", md: "block" }}
          />
        </Stack>
        <Box
          component={Lottie}
          animationData={scrolldown}
          style={{ width: "135px" }}
          display={{ xs: "block", md: "none" }}
        />
      </Box>
      <Box
        fontSize={"14px"}
        fontFamily={fonts.font5}
        fontWeight={300}
        sx={{
          position: "absolute",
          bottom: { xs: 75, md: 90 },
          overflow: "hidden",
        }}
      >
        Selected Projects
      </Box>
    </Box>
  );
};
export default HeadSection;
