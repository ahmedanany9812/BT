import { Box, Container, Stack } from "@mui/material";
import { CustomTheme } from "../Utilities/Theme";
import RoutesLink from "../Data/RoutesLink.json";
function Home() {
  const { fonts } = CustomTheme;
  return (
    <Container maxWidth="xl">
      <Box
        height={"100vh"}
        padding="3rem"
        overflow={{ xs: "scroll", md: "hidden" }}
      >
        <Box component={"header"} height="20%">
          <Box
            component={"p"}
            letterSpacing="5px"
            fontSize={"15px"}
            fontFamily={fonts.body}
            fontWeight={300}
          >
            BT.
          </Box>
        </Box>
        <Stack
          height={"80%"}
          direction={{ xs: "column", md: "row" }}
          alignItems={{ xs: "flex-start", md: "flex-end" }}
          paddingBottom={{ xs: "0", md: "2rem" }}
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
          <Stack
            direction={"row"}
            spacing="20px"
            alignItems={"center"}
            display={{ xs: "flex", md: "none" }}
            marginTop="5rem"
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
      </Box>
    </Container>
  );
}

export default Home;
