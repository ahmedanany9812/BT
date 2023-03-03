import { Box, Stack } from "@mui/material";
import { Projects } from "../../Data/ProjectsData";
import WorkLink from "./WorkLink";
const WorkSection = () => {
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
              nam={pro.nam}
              dat={pro.date}
            />
          );
        })}
      </Stack>
    </Box>
  );
};

export default WorkSection;
