import { Box, Container, Stack } from "@mui/material";
import { CustomTheme } from "../Utilities/Theme";
import RoutesLink from "../Data/RoutesLink.json";
function Home() {
  const { fonts } = CustomTheme;
  return (
    <Box
      position={"relative"}
      padding="1rem"
      height={"100vh"}
      overflow={{ xs: "hidden", md: "auto" }}
    >
      <Container maxWidth="xl" sx={{ height: "100%" }}>
        <Box
          letterSpacing="5px"
          component={"p"}
          fontWeight={300}
          fontFamily={fonts.body}
          fontSize="15px"
          padding={{ xs: "0", md: "2rem" }}
        >
          BT.
        </Box>
        <Box
          height={"85vh"}
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "flex-end",
          }}
          paddingBottom={{ xs: "0", md: "2rem" }}
          paddingTop={"0"}
        >
          <Stack
            direction={{ xs: "column", md: "row" }}
            alignItems={{ xs: "flex-start", md: "flex-end" }}
            justifyContent={"center"}
          >
            <Stack
              direction={"column"}
              spacing="20px"
              maxWidth={{ xs: "100%", md: "25%" }}
              marginBottom={"20px"}
            >
              <Box
                component={"p"}
                fontWeight={500}
                fontFamily={fonts.hom}
                fontSize="15px"
                letterSpacing="2px"
              >
                AHMED ANANY
              </Box>
              <Box
                component={"p"}
                fontWeight={300}
                fontFamily={fonts.hom}
                fontSize="15px"
                lineHeight={"1.9em"}
              >
                A junior fullstack JS developer since 2022 and Data Science
                Student
              </Box>
              <Box
                component={"p"}
                fontWeight={300}
                fontFamily={fonts.hom}
                fontSize="15px"
                lineHeight={"1.9em"}
              >
                Working As freelancer and Looking for a new apportunity
              </Box>
              <Stack
                direction={"row"}
                spacing="20px"
                alignItems={"center"}
                display={{ xs: "none", md: "flex" }}
              >
                <Box
                  component={"p"}
                  fontWeight={200}
                  fontFamily={fonts.body}
                  fontSize="14px"
                  letterSpacing={"2px"}
                >
                  TW
                </Box>
                <Box
                  component={"p"}
                  fontWeight={200}
                  fontFamily={fonts.body}
                  fontSize="14px"
                  letterSpacing={"2px"}
                >
                  FB
                </Box>
                <Box
                  component={"p"}
                  fontWeight={200}
                  fontFamily={fonts.body}
                  fontSize="14px"
                  letterSpacing={"2px"}
                >
                  LI
                </Box>
              </Stack>
            </Stack>
            <Stack direction={"column"} marginLeft={{ xs: "0px", md: "6%" }}>
              {RoutesLink.map((ro, i) => {
                return (
                  <Box
                    component={"p"}
                    fontWeight={300}
                    fontFamily={fonts.font5}
                    fontSize={{ xs: "15vw", md: "12vw" }}
                    key={i}
                    lineHeight="0.95em"
                    letterSpacing={{ xs: "-1px", md: "-5px" }}
                  >
                    {ro.tag}
                  </Box>
                );
              })}
            </Stack>
          </Stack>
        </Box>
        <Stack
          direction={"column"}
          spacing="20px"
          maxWidth={{ xs: "100%", md: "25%" }}
          marginBottom={"20px"}
          marginTop="5rem"
        >
          <Box
            component={"p"}
            fontWeight={500}
            fontFamily={fonts.hom}
            fontSize="15px"
            letterSpacing="2px"
          >
            AHMED ANANY
          </Box>
          <Box
            component={"p"}
            fontWeight={300}
            fontFamily={fonts.hom}
            fontSize="15px"
            lineHeight={"1.9em"}
          >
            A junior fullstack JS developer since 2022 and Data Science Student
          </Box>
          <Box
            component={"p"}
            fontWeight={300}
            fontFamily={fonts.hom}
            fontSize="15px"
            lineHeight={"1.9em"}
          >
            Working As freelancer and Looking for a new apportunity
          </Box>
          <Stack
            direction={"row"}
            spacing="20px"
            alignItems={"center"}
            display={{ xs: "none", md: "flex" }}
          >
            <Box
              component={"p"}
              fontWeight={200}
              fontFamily={fonts.body}
              fontSize="14px"
              letterSpacing={"2px"}
            >
              TW
            </Box>
            <Box
              component={"p"}
              fontWeight={200}
              fontFamily={fonts.body}
              fontSize="14px"
              letterSpacing={"2px"}
            >
              FB
            </Box>
            <Box
              component={"p"}
              fontWeight={200}
              fontFamily={fonts.body}
              fontSize="14px"
              letterSpacing={"2px"}
            >
              LI
            </Box>
          </Stack>
        </Stack>
        <Stack direction={"column"} marginLeft={{ xs: "0px", md: "6%" }}>
          {RoutesLink.map((ro, i) => {
            return (
              <Box
                component={"p"}
                fontWeight={300}
                fontFamily={fonts.font5}
                fontSize={{ xs: "15vw", md: "12vw" }}
                key={i}
                lineHeight="0.95em"
                letterSpacing={{ xs: "-1px", md: "-5px" }}
              >
                {ro.tag}
              </Box>
            );
          })}
        </Stack>
        <Stack
          direction={"row"}
          spacing="20px"
          alignItems={"center"}
          display={{ xs: "flex", md: "none" }}
          sx={{ position: "absolute", bottom: "10%" }}
        >
          <Box
            component={"p"}
            fontWeight={200}
            fontFamily={fonts.body}
            fontSize="14px"
            letterSpacing={"2px"}
          >
            TW
          </Box>
          <Box
            component={"p"}
            fontWeight={200}
            fontFamily={fonts.body}
            fontSize="14px"
            letterSpacing={"2px"}
          >
            FB
          </Box>
          <Box
            component={"p"}
            fontWeight={200}
            fontFamily={fonts.body}
            fontSize="14px"
            letterSpacing={"2px"}
          >
            LI
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

export default Home;
