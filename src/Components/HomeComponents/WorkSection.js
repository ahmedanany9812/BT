import { Box, Stack } from "@mui/material";
import { CustomTheme } from "../../Utilities/Theme";
import { Projects } from "../../Data/ProjectsData";
import WorkLink from "./WorkLink";
import { BsArrow90DegRight } from "react-icons/bs";
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
        <Box overflow={"hidden"} className="work animatt" position={"relative"}>
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              height: "2px",
              backgroundColor: "#777",
              width: "100%",
            }}
            className="line"
          />
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              height: "2px",
              backgroundColor: "#777",
              width: "100%",
            }}
            className="line"
          />
          <Stack
            direction={"row"}
            alignItems="center"
            paddingY={{ xs: "2.5rem", sm: "5rem" }}
            sx={{ position: "relative" }}
            width="100%"
          >
            <Box
              fontFamily={fonts.font5}
              fontSize={{ xs: "3vw", sm: "1vw" }}
              fontWeight={500}
            >
              003
            </Box>
            <Stack direction={"column"} marginLeft="20px">
              <Box
                fontFamily={fonts.font5}
                fontSize={{ xs: "10vw", sm: "10.3vw" }}
                fontWeight={300}
                letterSpacing={{ xs: "-3px", sm: "-10px" }}
              >
                ROADMATH
              </Box>
            </Stack>
            <Box
              component={BsArrow90DegRight}
              sx={{ marginLeft: "auto",fontSize:"5vw" }}
              color="whitesmoke"
            />
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default WorkSection;
