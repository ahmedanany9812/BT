import { Box, Container, Stack } from "@mui/material";
import { CustomTheme } from "../Utilities/Theme";
import Lottie from "lottie-react";
import scrolldown from "../Utilities/scroll_down.json";
import Header from "./Header";
function Home() {
  const { fonts } = CustomTheme;
  return (
    <Container maxWidth="xl">
      <Box>
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
              fontWeight={700}
              letterSpacing={{ sm: "-8px", xs: "-3px" }}
            >
              FULL
            </Box>
            <Box
              sx={{
                backgroundColor: "#434242",
                height: { xs: "9px", sm: "30px" },
                width: "200px",
              }}
            />
            <Box
              fontSize={"11.5vw"}
              fontFamily={fonts.font5}
              fontWeight={500}
              letterSpacing={{ sm: "-8px", xs: "-3px" }}
            >
              STACK
            </Box>
          </Stack>
          <Stack direction={"column"} flexWrap="wrap">
            <Box
              fontSize={"11.5vw"}
              fontFamily={fonts.font5}
              fontWeight={700}
              letterSpacing={{ sm: "-10px", xs: "-3px" }}
              lineHeight={{ xs: "70px", sm: "170px" }}
            >
              JS
            </Box>
            <Stack direction={"row"} alignItems="center" flexWrap={"nowrap"}>
              <Box
                fontSize={"11.5vw"}
                fontFamily={fonts.font5}
                fontWeight={700}
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
            style={{ width: "160px" }}
            display={{ xs: "block", md: "none" }}
          />
        </Box>
      </Box>
    </Container>
  );
}

export default Home;
