import { Box, Stack } from "@mui/material";
import Header from "../Global/Header";
import Lottie from "lottie-react";
import scrolldown from "../../Utilities/scroll_down.json";
import { CustomTheme } from "../../Utilities/Theme";
const HeadSection = () => {
  const { fonts } = CustomTheme;
  return (
    <Box minHeight={"100vh"} position="relative">
      <Header />
      <Box width="100%" marginTop={{ xs: "4rem", sm: "5rem" }}>
        <Box overflow={"hidden"}>
          <Stack
            direction={"row"}
            alignItems="center"
            spacing={{ xs: "5px", sm: "22px" }}
            lineHeight={{ xs: "70px", sm: "170px" }}
            className="trrra"
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
                width: "100%",
                overflow: "hidden",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#e2e0e0",
                  height: { xs: "9px", sm: "30px" },
                  width: "100%",
                }}
              />
            </Box>
            <Box
              fontSize={"11.5vw"}
              fontFamily={fonts.font5}
              fontWeight={300}
              letterSpacing={{ sm: "-8px", xs: "-3px" }}
            >
              STACK
            </Box>
          </Stack>
        </Box>
        <Box
          fontSize={"11.5vw"}
          fontFamily={fonts.font5}
          fontWeight={300}
          letterSpacing={{ sm: "-10px", xs: "-3px" }}
          lineHeight={{ xs: "70px", sm: "170px" }}
          sx={{ overflow: "hidden" }}
        >
          <Box component={"span"} display="inline-block">
            JS
          </Box>
        </Box>
        <Box overflow={"hidden"}>
          <Stack
            direction={"row"}
            alignItems="center"
            flexWrap={"nowrap"}
          >
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
        </Box>
        <Box overflow={"hidden"}>
          <Box
            component={Lottie}
            animationData={scrolldown}
            style={{ width: "135px" }}
            display={{ xs: "block", md: "none" }}
          />
        </Box>
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
        <Box component={"span"} display="inline-block">
          Selected Projects
        </Box>
      </Box>
    </Box>
  );
};
export default HeadSection;
