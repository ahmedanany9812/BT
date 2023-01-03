import { Box, Stack } from "@mui/material";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useLayoutEffect } from "react";
import { useSelector } from "react-redux";
import { loaded } from "../LoaderSlice";
import { NavLink } from "react-router-dom";
import { CustomTheme } from "../Utilities/Theme";
gsap.registerPlugin(ScrollTrigger);
const WorkSection = () => {
  const completed = useSelector(loaded);
  const font = CustomTheme.fonts;
  // const projects = useRef();
  useEffect(() => {
    const box = document.getElementById("box2");
    const body = document.body;
    const tl = gsap.timeline();
    let logoitem = document.getElementById("logo");
    let icon = document.getElementsByClassName("expandicon");
    const scrollpoint = document.getElementsByClassName("scrollPoint");
    ScrollTrigger.create({
      animation: tl,
      trigger: box,
      scrub: 1,
      start: "40% bottom",
      end: "50% bottom",
    });
    tl.to(body, {
      backgroundColor: "black",
    })
      .to(
        logoitem,
        {
          color: "white",
        },
        "<"
      )
      .to(
        icon,
        {
          color: "white",
        },
        "<"
      )
      .to(
        scrollpoint,
        {
          backgroundColor: "white",
        },
        "<"
      );
  });
  useLayoutEffect(() => {
    const box = document.getElementById("box2");
    const work = document.getElementsByClassName("work");
    const projects = document.getElementsByClassName("projects");
    if (completed) {
      const tl2 = gsap.timeline();
      ScrollTrigger.create({
        animation: tl2,
        trigger: box,
        scrub: 1,
        start: "50% bottom",
        end: "bottom bottom",
      });
      tl2
        .from(work, {
          yPercent: -100,
          autoAlpha: 0,
        })
        .from(
          projects[0].children,
          {
            yPercent: 120,
            autoAlpha: 0,
            stagger: {
              amount: 0.4,
            },
          },
          "<"
        );
    }
  });
  return (
    <Box
      height={"100vh"}
      id="box2"
      sx={{ border: "1px solid transparecrnt" }}
      className="homepanel"
      component={"section"}
      marginY={"5rem"}
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
          <Stack direction={"row"} spacing="20px">
            <Box
              component={"p"}
              fontFamily={font.font5}
              fontWeight={500}
              fontSize="50px"
              color={"white"}
            >
              01
            </Box>
            <Box
              component={"p"}
              fontFamily={font.font5}
              fontWeight={500}
              fontSize="50px"
              color={"white"}
            >
              Bt Portfolio
            </Box>
          </Stack>
<NavLink to="BT">jhjhhhhhhhh</NavLink>
          <Stack direction={"row"} spacing="20px">
            <Box
              component={"p"}
              fontFamily={font.font5}
              fontWeight={500}
              fontSize="50px"
              color={"white"}
            >
              02
            </Box>
            <Box
              component={"p"}
              fontFamily={font.font5}
              fontWeight={500}
              fontSize="50px"
              color={"white"}
            >
              Ytrouty App
            </Box>
          </Stack>
          <Stack direction={"row"} spacing="20px">
            <Box
              component={"p"}
              fontFamily={font.font5}
              fontWeight={500}
              fontSize="50px"
              color={"white"}
            >
              03
            </Box>
            <Box
              component={"p"}
              fontFamily={font.font5}
              fontWeight={500}
              fontSize="50px"
              color={"white"}
            >
              Relig Store
            </Box>
          </Stack>
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
