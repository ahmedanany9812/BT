import { Box, Stack } from "@mui/material";
import { CustomTheme } from "../../Utilities/Theme";
import { Projects } from "../../Data/ProjectsData";
import WorkLink from "./WorkLink";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const WorkSection = () => {
  const { fonts } = CustomTheme;
  useEffect(() => {
    const boxes = gsap.utils.toArray(".work");
    const ctx = gsap.context(() => {
      boxes.forEach((box) => {
        gsap.from(box.children[0], {
          yPercent: 100,
          duration: 0.8,
          scrollTrigger: {
            trigger: box,
            start: "top 70%",
          },
        });
      });
    });
    return () => ctx.revert();
  });
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
        <Box overflow={"hidden"} className="work">
          <Stack
            direction={"row"}
            alignItems="center"
            spacing={"20px"}
            paddingY={{ xs: "1rem", sm: "5rem" }}
            sx={{ position: "relative" }}
          >
            <Box
              fontFamily={fonts.font5}
              fontSize={{ xs: "2vw", sm: "1vw" }}
              fontWeight={500}
            >
              003
            </Box>
            <Stack direction={"column"}>
              <Box
                fontFamily={fonts.font5}
                fontSize="9.5vw"
                fontWeight={300}
                letterSpacing={{ xs: "-3px", sm: "-10px" }}
              >
                ROADMATH
              </Box>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default WorkSection;
