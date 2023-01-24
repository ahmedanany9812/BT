import { Box, Stack } from "@mui/material";
import Header from "./Header";
import Lottie from "lottie-react";
import scrolldown from "../Utilities/scroll_down.json";
import { CustomTheme } from "../Utilities/Theme";
const HeadSection = () => {
  const { fonts } = CustomTheme;
  return (
    <Box minHeight={"100vh"} position="relative">
      <Header />
      <Box width="100%" marginTop={{ xs: "4rem", sm: "5rem" }}>
        <Stack
          direction={"row"}
          alignItems="center"
          spacing={{ xs: "5px", sm: "22px" }}
          lineHeight={{ xs: "70px", sm: "170px" }}
        >
          <Box
            fontSize={"11.5vw"}
            fontFamily={fonts.font5}
            fontWeight={{ xs: 900, sm: 700 }}
            letterSpacing={{ sm: "-8px", xs: "-3px" }}
          >
            FULL
          </Box>
          <Box
            sx={{
              backgroundColor: "#e2e0e0",
              height: { xs: "9px", sm: "30px" },
              width: "200px",
            }}
          />
          <Box
            fontSize={"11.5vw"}
            fontFamily={fonts.font5}
            fontWeight={{ xs: 800, sm: 700 }}
            letterSpacing={{ sm: "-8px", xs: "-3px" }}
          >
            STACK
          </Box>
        </Stack>
        <Stack direction={"column"} flexWrap="wrap">
          <Box
            fontSize={"11.5vw"}
            fontFamily={fonts.font5}
            fontWeight={{ xs: 800, sm: 700 }}
            letterSpacing={{ sm: "-10px", xs: "-3px" }}
            lineHeight={{ xs: "70px", sm: "170px" }}
          >
            JS
          </Box>
          <Stack direction={"row"} alignItems="center" flexWrap={"nowrap"}>
            <Box
              fontSize={"11.5vw"}
              fontFamily={fonts.font5}
              fontWeight={{ xs: 800, sm: 700 }}
              letterSpacing={{ sm: "-10px", xs: "-3px" }}
              lineHeight={{ xs: "70px", sm: "170px" }}
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
        fontWeight={400}
        sx={{
          position: "absolute",
          bottom: { xs: 80, md: 90 },
        }}
      >
        Selected Projects
      </Box>
    </Box>
  );
};
export default HeadSection;
