import { Box, Stack } from "@mui/material";
import { CustomTheme } from "../Utilities/Theme";
import { Projects } from "../Data/ProjectsData";
import WorkLink from "./WorkLink";
const WorkSection = () => {
  const { fonts } = CustomTheme;
  return (
    <Box>
      <Stack direction={"column"}>
        {Projects.map((pro, i) => {
          return (
            <WorkLink
              key={i}
              cate={pro.cate}
              tag={pro.tag}
              id={pro.id}
              dat={pro.date}
            />
          );
        })}
        <Stack
          direction={"row"}
          alignItems="center"
          spacing={"20px"}
          paddingY={{ xs: "2rem", sm: "5rem" }}
          sx={{ position: "relative" }}
        >
          <Box
            fontFamily={fonts.font5}
            fontSize={{ xs: "2vw", sm: "1vw" }}
            fontWeight={500}
          >
            03
          </Box>
          <Stack direction={"column"}>
            <Box
              fontFamily={fonts.font5}
              fontSize="9.5vw"
              fontWeight={700}
              letterSpacing={{ xs: "-3px", sm: "-10px" }}
            >
              ROADMATH
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default WorkSection;
