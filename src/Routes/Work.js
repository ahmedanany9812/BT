import { Box, Container, Stack } from "@mui/material";
import { CustomTheme } from "../Utilities/Theme";
import { Projects } from "../Data/ProjectsData";
const Work = () => {
  const { fonts } = CustomTheme;
  return (
    <Container maxWidth="xl">
      <Box
        height={"100vh"}
        padding={{ xs: "1rem", md: "3rem" }}
        overflow={{ xs: "scroll", md: "hidden" }}
      >
        <Box component={"header"} height={{ xs: "17%", md: "20%" }}>
          <Box
            component={"p"}
            letterSpacing="5px"
            fontSize={"15px"}
            fontFamily={fonts.hom}
            fontWeight={300}
          >
            HOME
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
            maxWidth={{ xs: "100%", md: "30%" }}
            spacing={"20px"}
          >
            <Box
              component={"p"}
              fontWeight={500}
              fontFamily={fonts.hom}
              fontSize="15px"
              letterSpacing="2px"
            >
              WORK
            </Box>
            <Box
              component={"p"}
              fontWeight={400}
              fontFamily={fonts.hom}
              fontSize="14px"
              lineHeight={"1.9em"}
              letterSpacing="0.5px"
            >
              That’s all i’ve done on this shortime journey starting from Web
              design templates to fullstack applications
            </Box>
            <Box
              component={"p"}
              fontWeight={400}
              fontFamily={fonts.hom}
              fontSize="14px"
              lineHeight={"1.9em"}
              letterSpacing="0.5px"
            >
              I’m learning and gaining new skills every day Keeping up with the
              extreme envolving of the digital design
            </Box>
          </Stack>
          <Stack direction={"column"} marginLeft={{ xs: "0px", md: "12%" }}>
            {Projects.map((pro, i) => {
              return (
                <Stack direction={"column"} key={i}>
                  <Box
                    component={"p"}
                    fontWeight={300}
                    fontFamily={fonts.font5}
                    fontSize={{ xs: "11vw", md: "5vw" }}
                    letterSpacing={{ xs: "-1px", md: "-5px" }}
                  >
                    {pro.tag}
                  </Box>
                  <Box
                    component={"p"}
                    fontWeight={300}
                    fontFamily={fonts.font5}
                    fontSize={{ xs: "2vw", md: "1vw" }}
                    letterSpacing={{ xs: "-1px", md: "0px" }}
                    sx={{ color: "whitesmoke", opacity: 0.7 }}
                  >
                    ------- {pro.date}
                  </Box>
                </Stack>
              );
            })}

            <Stack direction={"column"}>
              <Box
                component={"p"}
                fontWeight={300}
                fontFamily={fonts.font5}
                fontSize={{ xs: "11vw", md: "5vw" }}
                letterSpacing={{ xs: "-1px", md: "-5px" }}
                sx={{ opacity: "0.2" }}
              >
                ROADMATH
              </Box>
              <Box
                component={"p"}
                fontWeight={300}
                fontFamily={fonts.font5}
                fontSize={{ xs: "2vw", md: "1vw" }}
                letterSpacing={{ xs: "-1px", md: "0px" }}
                sx={{ color: "whitesmoke", opacity: 0.7 }}
              >
                ------- SOON
              </Box>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </Container>
  );
};
export default Work;
