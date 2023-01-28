import { Box, Stack } from "@mui/material";
import { useEffect, useRef } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Projects } from "../Data/ProjectsData";
import { CustomTheme } from "../Utilities/Theme";
import useWindowSize from "../Utilities/WindowSize";
import Header from "../Components/Global/Header";
import gsap from "gsap";
function Project() {
  const location = useLocation();
  const { fonts } = CustomTheme;
  const { project } = useParams();
  const CurrentProject = Projects.find((pro) => pro.nam === project);
  const nextProject = () => {
    if (CurrentProject.id === 3) {
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
  }, [Size.height, location]);
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
    } else {
      ScrollContainer.current.style.transform = `translateY(-${SkewConfigs.previous}px)`;
    }
    requestAnimationFrame(() => SkewScrolling());
  };
  useEffect(() => {
    requestAnimationFrame(() => SkewScrolling());
  }, []);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.to(
        document.querySelector(".projectHead"),
        {
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          ease: "expo.inOut",
          duration: 1.5,
        }
      ).from(document.querySelector(".projectTag"), {
        yPercent: 100,
        ease: "expo.inOut",
        duration: 1,
      });
    });
    return () => ctx.revert();
  }, [location]);
  return (
    <Box ref={ScrollContainer} className="Scroll">
      <Header />
      <Box
        height={{ xs: "70vh", sm: "85vh" }}
        sx={{ bgcolor: "#ff5908" }}
        position="relative"
        className="projectHead"
      >
        <Box
          component={"p"}
          fontWeight={400}
          fontFamily={fonts.font5}
          fontSize={{ xs: "14vw", md: "12vw" }}
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
          <Box component={"span"} className="projectTag">
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
          fontWeight={300}
          fontFamily={fonts.font5}
          fontSize={{ xs: "5vw", md: "2vw" }}
          letterSpacing={{ xs: "0px", md: "-1px" }}
          color="white"
          width={{ xs: "100%", md: "60%" }}
          sx={{ position: "relative" }}
        >
          {CurrentProject.desc}
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
              URL
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
              {CurrentProject.tag}
            </Box>
          </Stack>
        </Stack>
        <Box
          component={"p"}
          fontWeight={300}
          fontFamily={fonts.font5}
          fontSize={{ xs: "11vw", md: "5vw" }}
          letterSpacing={{ xs: "-1px", md: "-1px" }}
          color="white"
          width={"60%"}
          textAlign="center"
          marginTop={"7rem"}
          onClick={() => navigate(`/work/${nextProject()}`, { replace: true })}
        >
          Next Project
        </Box>
      </Stack>
    </Box>
  );
}

export default Project;
