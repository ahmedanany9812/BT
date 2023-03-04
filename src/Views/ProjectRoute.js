import { Box, Stack } from "@mui/material";
import { useEffect, useLayoutEffect, useRef } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
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
  const nextProject = () => {
    if (CurrentProject.id === 4) {
      return Projects[0].nam;
    }
    let index = CurrentProject.id + 1;
    return Projects[index - 1].nam;
  };
  const navigate = useNavigate();
  const ScrollContainer = useRef();
  const Size = useWindowSize();
  useEffect(() => {
    document.body.style.height = `${
      ScrollContainer.current.getBoundingClientRect().height
    }px`;
  }, [Size.height, location.pathname]);
  const SkewConfigs = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0,
  };
  const SkewScrolling = () => {
    SkewConfigs.current = window.scrollY;
    SkewConfigs.previous +=
      (SkewConfigs.current - SkewConfigs.previous) * SkewConfigs.ease;
    SkewConfigs.rounded = Math.round(SkewConfigs.previous * 100) / 100;
    const Diff = SkewConfigs.current - SkewConfigs.rounded;
    const acce = Diff / Size.width;
    const Velocity = +acce;
    const skew = Velocity * 7.5;
    if (Size.width > 800) {
      ScrollContainer.current.style.transform = `translateY(-${SkewConfigs.rounded}px) skewY(${skew}deg)`;
    }
    requestAnimationFrame(() => SkewScrolling());
  };
  useEffect(() => {
    requestAnimationFrame(() => SkewScrolling());
  }, []);
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
  useEffect(() => {
    const ctx = gsap.context(() => {
      const project = document.querySelector(".projcv");
      const projecttag = document.querySelector(".projcv1");
      gsap.to(projecttag, {
        yPercent: -100,
        scrollTrigger: {
          trigger: project,
          start: "top 80%",
          end: "top 50%",
          markers: true,
          toggleActions: "play none none reverse",
        },
      });
    });
    return () => ctx.revert();
  }, []);
  return (
    <Box ref={ScrollContainer} className="Scroll">
      <Header />
      <Box
        height={{ xs: "75vh", sm: "85vh" }}
        sx={{ bgcolor: "#FFFFFF" }}
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
          color="black"
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
          fontSize={{ xs: "5vw", sm: "3vw" }}
          fontFamily={fonts.font5}
          fontWeight={400}
          marginTop="1rem"
          color="white"
          width={{ xs: "100%", md: "60%" }}
          sx={{ position: "relative" }}
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
              maxWidth="50px"
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
              maxWidth={"100px"}
            >
              FEATURES
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
              maxWidth="40px"
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
          fontFamily={fonts.font5}
          fontSize={{ xs: "3.7vw", sm: "18px" }}
          position={"relative"}
          width={{ xs: "100%", md: "60%" }}
          marginTop="10rem"
          letterSpacing={"0.4px"}
        >
          {CurrentProject.qt1}.
        </Box>
        <Box
          component={"p"}
          fontWeight={400}
          fontFamily={fonts.font5}
          fontSize={{ xs: "3.7vw", sm: "18px" }}
          position={"relative"}
          width={{ xs: "100%", md: "60%" }}
          marginY="4rem"
          letterSpacing={"0.4px"}
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
              bgcolor="white"
              padding={"20px 60px"}
              borderRadius="50px"
              href={CurrentProject.link !== "" && CurrentProject.link}
              target="_blank"
              sx={{ textDecoration: "none" }}
            >
              <Box
                component={"p"}
                fontWeight={500}
                fontFamily={fonts.font5}
                fontSize={"16px"}
                letterSpacing={"0.4px"}
                color="black"
              >
                {CurrentProject.link === ""
                  ? "Soon"
                  : `${CurrentProject.link.substring(0, 20)}...`}
              </Box>
            </Box>
          </Stack>
        </Stack>
        <Stack alignItems={"center"} justifyContent="center">
          <Stack
            onClick={() =>
              navigate(`/work/${nextProject()}`, { replace: true })
            }
            direction={"column"}
            alignItems="center"
            marginTop={"7rem"}
            position="relative"
            spacing={"1.5rem"}
            marginBottom="5rem"
          >
            <Stack
              direction={"column"}
              alignItems="center"
              className="projcv"
              maxHeight={"20px"}
              overflow="hidden"
            >
              <Box height={"20px"} className="projcv1">
                <Box
                  component={"p"}
                  fontWeight={400}
                  fontFamily={fonts.font5}
                  fontSize={"15px"}
                  color="white"
                  letterSpacing={"1px"}
                >
                  Next project
                </Box>
                <Box
                  component={"p"}
                  fontWeight={400}
                  fontFamily={fonts.font5}
                  fontSize={"15px"}
                  color="white"
                  letterSpacing={"1px"}
                >
                  Click here
                </Box>
              </Box>
            </Stack>
            <Box
              component={"p"}
              fontWeight={300}
              fontFamily={fonts.font5}
              letterSpacing={{ xs: "-1px", md: "-1px" }}
              fontSize={{ xs: "11vw", md: "5vw" }}
              color="white"
            >
              {nextProject()}
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}

export default Project;
