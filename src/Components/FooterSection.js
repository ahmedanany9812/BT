import { Box, Stack } from "@mui/material";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import SplitType from "split-type";
import { CustomTheme } from "../Utilities/Theme";
gsap.registerPlugin(ScrollTrigger);
const FooterSection = () => {
  const font = CustomTheme.fonts;
  const container = useRef();
  useLayoutEffect(() => {
    const foot1 = document.querySelector(".emailfoot");
    const foot2 = document.querySelector(".contafoot");
    const tag1 = new SplitType(foot1, { types: "chars, words" });
    const tag2 = new SplitType(foot2, { types: "chars, words" });
    const crx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from(tag1.chars, {
        yPercent: 100,
        opacity: 0,
        stagger: {
          amount: 1.7,
          from: "random",
        },
      }).from(
        tag2.chars,
        {
          yPercent: 100,
          opacity: 0,
          stagger: {
            amount: 1.7,
            from: "random",
          },
        },
        "<"
      );
      ScrollTrigger.create({
        trigger: container.current,
        start: "top 80%",
        end: "80% bottom",
        scrub: true,
        animation: tl,
      });
    }, container);
    return () => crx.revert();
  });
  useLayoutEffect(() => {
    const projects = document.querySelector(".projects");
    const crx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.fromTo(
        projects.children,
        {
          yPercent: 0,
          opacity: 1,
        },
        {
          yPercent: -100,
          stagger: {
            amount: 0.4,
          },
          opacity: 0,
        }
      );
      ScrollTrigger.create({
        trigger: container.current,
        animation: tl,
        start: "5% bottom",
        end: "40% 90%",
        scrub: 1,
      });
    });
    return () => crx.revert();
  });
  return (
    <Box height={"100vh"} id="box3" className="panel" ref={container}>
      <Stack
        direction={"column"}
        alignItems="flex-start"
        height="100%"
        paddingTop={"10rem"}
      >
        <Box
          component={"p"}
          fontFamily={font.font5}
          fontWeight={500}
          fontSize="50px"
          color={"white"}
          className="emailfoot"
        >
          Feel free to say Hi! - <br />
          <Box component={"span"} sx={{ opacity: 0.6 }}>
            ahmedenany9812@gamil.com
          </Box>
        </Box>
        <Box
          component={"p"}
          fontFamily={font.font5}
          fontWeight={500}
          fontSize="50px"
          color={"white"}
          marginTop={"8rem"}
          className="contafoot"
        >
          If you'd like to chew the fat Catch me on{" "}
          <Box component={"span"}>
            <Box component={"a"} sx={{ opacity: 0.6 }}>
              Facebook
            </Box>
          </Box>{" "}
          <Box component={"span"}>
            <Box component={"a"} sx={{ opacity: 0.6 }}>
              Twitter
            </Box>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};
export default FooterSection;
