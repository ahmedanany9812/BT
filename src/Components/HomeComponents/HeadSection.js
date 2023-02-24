import { Box, Stack } from "@mui/material";
import Header from "../Global/Header";
import Lottie from "lottie-react";
import scrolldown from "../../Utilities/scroll_down.json";
import { CustomTheme } from "../../Utilities/Theme";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const HeadSection = () => {
  const { fonts } = CustomTheme;
  useEffect(() => {
    const trigger = document.querySelector(".worksectiontrigger");
    const word1 = document.querySelector(".word1");
    const word2 = document.querySelector(".word2");
    let mm = gsap.matchMedia();
    mm.add("(min-width:800px)", () => {
      const tl = gsap.timeline();
      tl.to(word1, {
        xPercent: -100,
        ease: "expo.inOut",
      }).to(
        word2,
        {
          xPercent: 100,
          ease: "expo.inOut",
        },
        "<"
      );
      ScrollTrigger.create({
        animation: tl,
        scrub: 1,
        trigger: trigger,
        start: "top top",
        end: "55% top",
      });
    });
    mm.add("(max-width:799px)", () => {
      const tl = gsap.timeline();
      tl.to(word1, {
        xPercent: -50,
        ease: "expo.inOut",
      }).to(
        word2,
        {
          xPercent: 50,
          ease: "expo.inOut",
        },
        "<"
      );
      ScrollTrigger.create({
        animation: tl,
        scrub: 1,
        trigger: trigger,
        start: "top top",
        end: "25% top",
      });
    });
    return () => mm.revert();
  }, []);
  useEffect(() => {
    const trigger = document.querySelector(".worksectiontrigger");
    const item = document.querySelector("#projects-tag");
    let mm = gsap.matchMedia();
    //large screen
    mm.add("(min-width:800px)", () => {
      gsap.to(item, {
        y: 100,
        ease: "circ.in",
        scrollTrigger: {
          trigger: trigger,
          start: "top top",
          end: "25% top",
          toggleActions: "play none none reverse",
        },
      });
    });
    //mobile screen
    // mm.add("(max-width:799px)", () => {
    //   gsap.to(item, {
    //     y: 40,
    //     ease: "circ.in",
    //     scrollTrigger: {
    //       trigger: trigger,
    //       start: "top top",
    //       end: "20% top",
    //       toggleActions: "play none none reverse",
    //     },
    //   });
    // });
    return () => mm.revert();
  }, []);
  return (
    <Box minHeight={"100vh"} position="relative" className="worksectiontrigger">
      <Header />
      <Box width="100%" marginTop={{ xs: "4rem", sm: "5rem" }}>
        <Box overflow={"hidden"}>
          <Stack
            direction={"row"}
            alignItems="center"
            justifyContent={"space-between"}
            lineHeight={{ xs: "70px", sm: "170px" }}
            className="HeadTrr"
            position={"relative"}
          >
            <Box
              fontSize={"11.5vw"}
              fontFamily={fonts.font5}
              fontWeight={400}
              letterSpacing={{ sm: "-8px", xs: "-3px" }}
              className="word1"
              bgcolor={"black"}
              zIndex="1"
            >
              FULL
            </Box>
            <Box
              sx={{
                backgroundColor: "#e2e0e0",
                height: { xs: "9px", sm: "30px" },
                width: "100%",
                position: "absolute",
              }}
            />
            <Box
              fontSize={"11.5vw"}
              fontFamily={fonts.font5}
              fontWeight={400}
              letterSpacing={{ sm: "-8px", xs: "-3px" }}
              className="word2"
              bgcolor={"black"}
            >
              STACK
            </Box>
          </Stack>
        </Box>
        <Box
          fontSize={"11.5vw"}
          fontFamily={fonts.font5}
          fontWeight={400}
          letterSpacing={{ sm: "-10px", xs: "-3px" }}
          lineHeight={{ xs: "70px", sm: "170px" }}
          sx={{ overflow: "hidden" }}
        >
          <Box component={"span"} display="inline-block" className="HeadTrr">
            JS
          </Box>
        </Box>
        <Box overflow={"hidden"}>
          <Stack
            direction={"row"}
            alignItems="center"
            flexWrap={"nowrap"}
            className="HeadTrr"
          >
            <Box
              fontSize={"11.5vw"}
              fontFamily={fonts.font5}
              fontWeight={400}
              letterSpacing={{ sm: "-10px", xs: "-3px" }}
              lineHeight={{ xs: "70px", sm: "170px" }}
              sx={{ overflow: "hidden" }}
            >
              DEVELOPER
            </Box>
            <Box
              component={Lottie}
              animationData={scrolldown}
              style={{ width: "160px" }}
              display={{ xs: "none", md: "block" }}
            />
          </Stack>
        </Box>
        <Box overflow={"hidden"}>
          <Box
            component={Lottie}
            animationData={scrolldown}
            style={{ width: "135px" }}
            display={{ xs: "block", md: "none" }}
            className="HeadTrr"
          />
        </Box>
      </Box>
      <Box
        fontSize={"14px"}
        fontFamily={fonts.font5}
        fontWeight={300}
        sx={{
          position: "absolute",
          bottom: { xs: 75, md: 90 },
          overflow: "hidden",
          backgroundColor: "black",
          zIndex:1
        }}
        id="projects-tag"
      >
        <Box component={"span"} display="inline-block" className="HeadTrr" bgcolor={"black"}>
          Selected Projects
        </Box>
      </Box>
    </Box>
  );
};
export default HeadSection;
