import { Box, Container, Stack } from "@mui/material";
import { CustomTheme } from "../Utilities/Theme";
import RoutesLink from "../Data/RoutesLink.json";
import { useNavigate } from "react-router-dom";
function Home() {
  const { fonts } = CustomTheme;
  const navigate = useNavigate();
  return (
    <Container maxWidth="xl">
      <Box
        maxHeight={"100vh"}
        paddingX={{ xs: "0rem", md: "2rem" }}
        paddingY="0.5rem"
        overflow={{ xs: "scroll", md: "hidden" }}
      >
        <Box component={"header"} marginBottom="4rem">
          <Box
            component={"p"}
            letterSpacing="5px"
            fontSize={"15px"}
            fontFamily={fonts.hom}
            fontWeight={300}
            paddingY="1rem"
          >
            HOME
          </Box>
        </Box>
        <Box>
          <Stack
            direction={{ xs: "column", md: "row" }}
            alignItems={{ xs: "flex-start", md: "flex-end" }}
            paddingBottom={{ xs: "0", md: "2rem" }}
          >
            <Stack
              direction={"column"}
              spacing="20px"
              maxWidth={{ xs: "100%", md: "25%" }}
              marginBottom={{ xs: "20px", md: "0" }}
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
                    onClick={() => navigate(`${ro.route}`, { replace: true })}
                  >
                    {ro.tag}
                  </Box>
                );
              })}
            </Stack>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
}

export default Home;
