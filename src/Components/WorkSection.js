import { Box, Stack } from "@mui/material";
import { CustomTheme } from "../Utilities/Theme";
import { Projects } from "../Data/ProjectsData";
import ProjectLink from "./ProjectLink";
const WorkSection = () => {
  const font = CustomTheme.fonts;
  return (
    <Box
      height={"100vh"}
      id="box2"
      sx={{ border: "1px solid transparecrnt" }}
      className="homepanel"
      component={"section"}
    >
      <Stack
        direction={"column"}
        alignItems="flex-start"
        justifyContent={"center"}
        height="100%"
        spacing={"70px"}
      >
        <Box
          component={"p"}
          fontFamily={font.font5}
          fontWeight={500}
          fontSize="70px"
          color={"whitesmoke"}
          className="work"
        >
          Work
        </Box>
        <Stack direction={"column"} spacing="50px" className="projects">
          {Projects.map((pro, i) => {
            return (
              <ProjectLink key={i} nam={pro.nam} id={pro.id} tag={pro.tag} />
            );
          })}
          <Stack direction={"row"} spacing="20px">
            <Box
              component={"p"}
              fontFamily={font.font5}
              fontWeight={500}
              fontSize="50px"
              color={"white"}
            >
              04
            </Box>
            <Box
              component={"p"}
              fontFamily={font.font5}
              fontWeight={500}
              fontSize="50px"
              color={"white"}
              sx={{ opacity: 0.5 }}
            >
              RoadMath
              <Box
                component={"span"}
                sx={{
                  fontSize: "12px",
                }}
              >
                (soon)
              </Box>
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};
export default WorkSection;
