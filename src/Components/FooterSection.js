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
    const text1 = new SplitType(document.querySelector(".emailfoot"), {
      types: "chars, words",
    });
    const text2 = new SplitType(document.querySelector(".contafoot"), {
      types: "chars, words",
    });
    const crx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from(text1.chars, {
        stagger: {
          from: "random",
          amount: 0.8,
        },
        yPercent: 100,
        autoAlpha: 0,
      }).from(text2.chars, {
        stagger: {
          from: "random",
          amount: 0.8,
        },
        yPercent: 100,
        autoAlpha: 0,
      });
      ScrollTrigger.create({
        animation: tl,
        trigger: container.current,
        start: "50% bottom",
        end: "bottom bottom",
        scrub: true,
      });
    }, container);
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
          fontSize={{ xs: "30px", sm: "50px" }}
          color={"black"}
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
          fontSize={{ xs: "30px", sm: "50px" }}
          color={"black"}
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
