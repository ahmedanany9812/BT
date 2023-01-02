import { Box, Container, Stack } from "@mui/material";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useParams } from "react-router-dom";
import { Projects } from "../Data/ProjectsData";
import { CustomTheme } from "../Utilities/Theme";
import SmoothScroll from "../Components/scroll";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import Header from "../Components/Header";
import { useEffect, useState } from "react";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
function Project() {
  const font = CustomTheme.fonts;
  const { project } = useParams();
  const [CurrentProject, SetCurrentProject] = useState(
    Projects.find((pro) => pro.nam === project)
  );
  const [NextProject, setNextProject] = useState(null);
  useEffect(() => {
    setNextProject((prev) => {
      return CurrentProject.id === 3
        ? Projects.find((pro) => pro.id === 1)
        : Projects.find((pro) => pro.id === CurrentProject.id + 1);
    });
  }, [CurrentProject.id]);
  return (
    <Box position={"relative"}>
      <Header />
      <SmoothScroll>
        <Container>
          <Box marginTop={"15rem"} marginBottom="3rem">
            <Stack
              direction={"row"}
              alignItems="flex-start"
              justifyContent={"center"}
            >
              <Box
                component={"p"}
                fontSize="64px"
                fontFamily={font.font5}
                fontWeight={500}
              >
                {CurrentProject.tag}
              </Box>
              <Box
                component={"p"}
                fontSize="12px"
                fontFamily={font.body}
                sx={{ opacity: 0.5 }}
              >
                {CurrentProject.date}
              </Box>
            </Stack>
            <Stack
              alignItems={"center"}
              justifyContent={"center"}
              marginTop="7rem"
            >
              <Box
                component={"img"}
                className="image"
                width="100%"
                src={require(`../Utilities/Images/Projects/${CurrentProject.img}`)}
              />
            </Stack>
            <Stack
              direction={"row"}
              alignItems="flex-start"
              justifyContent={"space-between"}
              marginY="11rem"
            >
              <Box
                component={"p"}
                fontSize="20px"
                fontFamily={font.font5}
                fontWeight="600"
              >
                {CurrentProject.title}
              </Box>
              <Box
                component={"p"}
                fontSize="20px"
                fontFamily={font.font5}
                width={"50%"}
                fontWeight="300"
                sx={{ opacity: 0.8 }}
              >
                {CurrentProject.desc}
              </Box>
            </Stack>
            <Stack direction={"column"} spacing="10px" marginY="7rem">
              <Box
                component={"p"}
                fontSize="20px"
                fontFamily={font.font5}
                fontWeight="600"
              >
                Built in
              </Box>
              <Box component={"ul"} margin="0">
                {CurrentProject.skills.map((skill, i) => {
                  return (
                    <Box
                      component={"li"}
                      key={i}
                      marginY="12px"
                      fontSize="16px"
                      fontFamily={font.font5}
                      fontWeight="300"
                      sx={{ opacity: 0.8 }}
                    >
                      {skill}
                    </Box>
                  );
                })}
              </Box>
            </Stack>
            <Stack direction={"column"} spacing="20px">
              <Box
                component={"a"}
                href={CurrentProject.github}
                fontSize="17px"
                fontFamily={font.font5}
                target="_blank"
                sx={{
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                View Github Repo
              </Box>
              <Box
                component={"a"}
                href={CurrentProject.link}
                fontSize="17px"
                fontFamily={font.font5}
                target="_blank"
                sx={{
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                Visit Website
              </Box>
            </Stack>
            {NextProject && (
              <Stack
                direction={"column"}
                alignItems="center"
                marginTop={"15rem"}
              >
                <Box
                  component={"p"}
                  fontSize="18px"
                  fontFamily={font.font5}
                  fontWeight="300"
                >
                  Next Project
                </Box>
                <Box
                  component={"p"}
                  fontSize="40px"
                  fontFamily={font.font5}
                  fontWeight="400"
                  marginY={"2rem"}
                >
                  {NextProject.tag}
                </Box>
                <Stack alignItems={"center"} justifyContent={"center"}>
                  <Box
                    component={"img"}
                    onClick={() => {
                      SetCurrentProject((prev) => {
                        return Projects.find(
                          (pro) => pro.id === NextProject.id
                        );
                      });
                    }}
                    className="image"
                    width="40%"
                    src={require(`../Utilities/Images/Projects/${NextProject.img}`)}
                  />
                </Stack>
              </Stack>
            )}
          </Box>
        </Container>
      </SmoothScroll>
    </Box>
  );
}

export default Project;
