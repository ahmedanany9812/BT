import { Box, Stack } from "@mui/material";
import { useEffect, useRef } from "react";
import { useLocation,useParams } from "react-router-dom";
import { Projects } from "../Data/ProjectsData";
import { CustomTheme } from "../Utilities/Theme";
import useWindowSize from "../Utilities/WindowSize";
import Header from "../Components/Global/Header";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function Project() {
  const location = useLocation();
  const { fonts } = CustomTheme;
  const { project } = useParams();
  const CurrentProject = Projects.find((pro) => pro.nam === project);
  const ScrollContainer = useRef();
  const Size = useWindowSize();
  useEffect(() => {
    if (!ScrollContainer.current) return;
    
    const updateHeight = () => {
      const height = ScrollContainer.current.scrollHeight;
      document.body.style.height = `${height}px`;
    };

    const resizeObserver = new ResizeObserver(updateHeight);
    resizeObserver.observe(ScrollContainer.current);
    
    updateHeight();
    return () => resizeObserver.disconnect();
  }, [location.pathname]);
  const SkewConfigs = useRef({
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0,
  });

  useEffect(() => {
    let requestRef;
    const SkewScrolling = () => {
      SkewConfigs.current.current = window.scrollY;
      SkewConfigs.current.previous +=
        (SkewConfigs.current.current - SkewConfigs.current.previous) * SkewConfigs.current.ease;
      SkewConfigs.current.rounded = Math.round(SkewConfigs.current.previous * 100) / 100;
      
      if (ScrollContainer.current && Size.width >= 600) {
        ScrollContainer.current.style.transform = `translateY(-${SkewConfigs.current.rounded}px)`;
      } else if (ScrollContainer.current) {
        ScrollContainer.current.style.transform = `none`;
      }
      requestRef = requestAnimationFrame(SkewScrolling);
    };
    
    requestRef = requestAnimationFrame(SkewScrolling);
    return () => cancelAnimationFrame(requestRef);
  }, [Size.width]);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.to(document.querySelector(".projectHead"), {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        ease: "expo.inOut",
        duration: 0.8,
      }).from(document.querySelector(".projectTag"), {
        yPercent: 100,
        ease: "expo.inOut",
        duration: 1,
      });
    });
    return () => ctx.revert();
  }, [location]);
  const cursoron = () => {
    var cursor = document.querySelector(".corsa");
    var cursorinner = document.querySelector(".corsadot");
    cursor.classList.add("click");
    cursor.classList.add("cursorLinkoutterhover");
    cursorinner.classList.add("cursorLinkinnerhover");
  };
  const cursorout = () => {
    var cursor = document.querySelector(".corsa");
    var cursorinner = document.querySelector(".corsadot");
    cursor.classList.remove("click");
    cursor.classList.remove("cursorLinkoutterhover");
    cursorinner.classList.remove("cursorLinkinnerhover");
  };
  return (
    <Box
      ref={ScrollContainer}
      className="Scroll"
      sx={{
        display: "flex",
        flexDirection: "column",
        paddingBottom: "2rem",
      }}
    >
      <Header />
      <Box
        height={{ xs: "75vh", sm: "85vh" }}
        sx={{ bgcolor: "#Fe6601" }}
        position="relative"
        className="projectHead"
      >
        <Box
          component={"p"}
          fontWeight={400}
          fontFamily={fonts.font5}
          fontSize={{
            xs: CurrentProject.link === "" ? "12vw" : "15vw",
            md: "12vw",
          }}
          letterSpacing={{ xs: "-1px", md: "-5px" }}
          color="white"
          sx={{
            position: "absolute",
            top: "60%",
            right: "50%",
            transform: "translateX(50%)",
            overflow: "hidden",
          }}
        >
          <Box
            component={"span"}
            className="projectTag"
            display={"inline-block"}
            whiteSpace={"nowrap"}
          >
            {CurrentProject.tag}
          </Box>
        </Box>
      </Box>
      <Stack
        direction={"column"}
        alignItems="center"
        width={"100%"}
        justifyContent="center"
        marginTop={"8rem"}
        paddingBottom={"1rem"}
      >
        <Box
          component={"p"}
          fontSize={{ xs: "35px", sm: "3vw" }}
          fontFamily={fonts.font5}
          fontWeight={400}
          marginTop="1rem"
          color="white"
          width={{ xs: "100%", md: "60%" }}
          sx={{ position: "relative" }}
          lineHeight="1.3em"
        >
          {CurrentProject.desc}.
        </Box>
        <Stack
          direction={{ xs: "column", md: "row" }}
          alignItems="flex-start"
          justifyContent="center"
          spacing={{ xs: "80px", md: "130px" }}
          marginTop="150px"
          width={{ xs: "100%", md: "60%" }}
        >
          <Stack direction={"column"} spacing="20px">
            <Box
              component={"p"}
              fontWeight={500}
              fontFamily={fonts.hom}
              fontSize="15px"
              letterSpacing="2px"
              position={"relative"}
              maxWidth="48px"
            >
              ROLE
              <Box
                position={"absolute"}
                sx={{
                  backgroundColor: "white",
                  height: "1px",
                  width: "100%",
                  bottom: -1,
                  left: 0,
                }}
              />
            </Box>
            <Box
              component={"p"}
              fontWeight={400}
              fontFamily={fonts.hom}
              fontSize="14px"
              lineHeight={"1.9em"}
              letterSpacing="0.5px"
            >
              {CurrentProject.cate}
            </Box>
          </Stack>
          <Stack direction={"column"} spacing="20px">
            <Box
              component={"p"}
              fontWeight={500}
              fontFamily={fonts.hom}
              fontSize="15px"
              letterSpacing="2px"
              position={"relative"}
              maxWidth={"145px"}
            >
              TECHNOLOGIES
              <Box
                position={"absolute"}
                sx={{
                  backgroundColor: "white",
                  height: "1px",
                  width: "100%",
                  bottom: -1,
                  left: 0,
                }}
              />
            </Box>
            <Box
              component={"p"}
              fontWeight={400}
              fontFamily={fonts.hom}
              fontSize="14px"
              lineHeight={"1.9em"}
              letterSpacing="0.5px"
            >
              {CurrentProject.feauters}
            </Box>
          </Stack>
          <Stack direction={"column"} spacing="20px">
            <Box
              component={"p"}
              fontWeight={500}
              fontFamily={fonts.hom}
              fontSize="15px"
              letterSpacing="2px"
              position={"relative"}
              maxWidth="47px"
            >
              DATE
              <Box
                position={"absolute"}
                sx={{
                  backgroundColor: "white",
                  height: "1px",
                  width: "100%",
                  bottom: -1,
                  left: 0,
                }}
              />
            </Box>
            <Box
              component={"p"}
              fontWeight={400}
              fontFamily={fonts.hom}
              fontSize="14px"
              lineHeight={"1.9em"}
              letterSpacing="0.5px"
            >
              {CurrentProject.date}
            </Box>
          </Stack>
        </Stack>
        <Box
          component={"p"}
          fontWeight={400}
          fontFamily={fonts.hom}
          fontSize={{ xs: "14px", sm: "17px" }}
          position={"relative"}
          width={{ xs: "100%", md: "60%" }}
          marginTop="10rem"
          letterSpacing={"0.5px"}
          lineHeight="2em"
        >
          {CurrentProject.qt1}.
        </Box>
        <Box
          marginY="4rem"
          component={"p"}
          fontWeight={400}
          fontFamily={fonts.hom}
          fontSize={{ xs: "14px", sm: "17px" }}
          position={"relative"}
          width={{ xs: "100%", md: "60%" }}
          letterSpacing={"0.5px"}
          lineHeight="2em"
        >
          {CurrentProject.qt2}.
        </Box>
        <Stack alignItems={"center"} justifyContent="center" marginY={"5rem"}>
          <Stack direction={"column"} alignItems="center" spacing={"2rem"}>
            <Box
              component={"p"}
              fontWeight={400}
              fontFamily={fonts.font5}
              fontSize={{ xs: "5vw", sm: "2vw" }}
            >
              Check This Out.
            </Box>
            <Box
              component={"a"}
              bgcolor="#Fe6601"
              padding={"20px 60px"}
              borderRadius="50px"
              href={CurrentProject.link !== "" && CurrentProject.link}
              target="_blank"
              sx={{ textDecoration: "none" }}
              onMouseEnter={cursoron}
              onMouseLeave={cursorout}
            >
              <Box
                component={"p"}
                fontWeight={500}
                fontFamily={fonts.font5}
                fontSize={"16px"}
                letterSpacing={"0.4px"}
                color="white"
              >
                {CurrentProject.link === ""
                  ? "Soon"
                  : `${CurrentProject.link.substring(0, 20)}...`}
              </Box>
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}

export default Project;
