import { Box, Stack } from "@mui/material";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";
import { useSelector } from "react-redux";
import SplitType from "split-type";
import { loaded } from "../LoaderSlice";
import { CustomTheme } from "../Utilities/Theme";
gsap.registerPlugin(ScrollTrigger);
const FooterSection = () => {
  const font = CustomTheme.fonts;
  const completed = useSelector(loaded);
  useLayoutEffect(() => {
    const box = document.getElementById("box3");
    const email = document.getElementsByClassName("emailfoot");
    const conta = document.getElementsByClassName("contafoot");
    const shrededEmail = new SplitType(email, {
      types: "chars, words",
    });
    const shrededcontac = new SplitType(conta, {
      types: "chars, words",
    });
    if (completed) {
      const tl3 = gsap.timeline();
      ScrollTrigger.create({
        animation: tl3,
        trigger: box,
        scrub: 1,
        start: "10% bottom",
        end: "bottom bottom",
      });
      tl3
        .from(shrededEmail.words, {
          yPercent: 100,
          autoAlpha: 0,
          stagger: {
            amount: 1,
            from: "random",
          },
        })
        .from(
          shrededcontac.chars,
          {
            yPercent: 100,
            autoAlpha: 0,
            stagger: {
              amount: 1,
              from: "random",
            },
          },
          "<"
        );
    }
  });
  useLayoutEffect(() => {
    const box = document.getElementById("box3");
    const work = document.getElementsByClassName("work");
    const projects = document.getElementsByClassName("projects");
    if (completed) {
      const tl2 = gsap.timeline();
      ScrollTrigger.create({
        animation: tl2,
        trigger: box,
        scrub: 1,
        start: "top bottom",
        end: "bottom bottom",
      });
      tl2
        .to(work, {
          yPercent: -100,
          autoAlpha: 0,
        })
        .to(
          projects[0].children,
          {
            yPercent: -120,
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
    <Box height={"100vh"} id="box3" component={"section"}>
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
