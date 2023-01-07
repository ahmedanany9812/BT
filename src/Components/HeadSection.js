import { Box, Stack } from "@mui/material";
import { CustomTheme } from "../Utilities/Theme";
import { BsArrow90DegDown } from "react-icons/bs";
import { useLayoutEffect, useRef } from "react";
import SplitType from "split-type";
import { useSelector } from "react-redux";
import { loaded } from "../LoaderSlice";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const HeadSection = () => {
  const completed = useSelector(loaded);
  const font = CustomTheme.fonts;
  const container = useRef();
  const text1 = useRef();
  const text2 = useRef();
  const conta = useRef();
  useLayoutEffect(() => {
    const crx = gsap.context(() => {
      if (completed) {
        gsap.from([text1.current, conta.current], {
          autoAlpha: 0,
          stagger: {
            each: 0.5,
          },
          delay: 0.2,
        });
      }
    }, container);
    return () => crx.revert();
  });
  useLayoutEffect(() => {
    const Head = new SplitType(text1.current, { types: "words" });
    const caption = new SplitType(text2.current, { types: "words" });
    const ctx = gsap.context(() => {
      gsap
        .timeline()
        .to(Head.words, {
          yPercent: -100,
          opacity: 0,
          stagger: {
            from: "random",
            amount: 0.5,
          },
          scrollTrigger: {
            trigger: container.current,
            start: "10% 5%",
            end: "bottom top",
            scrub: true,
          },
        })
        .to(
          caption.words,
          {
            yPercent: -100,
            opacity: 0,
            stagger: {
              from: "random",
              amount: 0.5,
            },
            scrollTrigger: {
              trigger: container.current,
              start: "10% 5%",
              end: "bottom top",
              scrub: true,
            },
          },
          "<"
        );
    }, container);
    return () => ctx.revert();
  });
  useLayoutEffect(() => {
    const crx = gsap.context(() => {
      const navbar = document.getElementById("navi");
      const logo = document.getElementById("logo");
      const menu = document.getElementById("menu");
      const scrollPoint = document.getElementById("scrollPoint");
      const tl = gsap.timeline();
      tl.to(document.body, {
        backgroundColor: "black",
      })
        .to(
          navbar,
          {
            padding: "20px 50px",
          },
          "<"
        )
        .to(
          [logo, menu],
          {
            color: "white",
          },
          "<"
        )
        .to(
          scrollPoint,
          {
            backgroundColor: "white",
          },
          "<"
        );
      ScrollTrigger.create({
        trigger: container.current,
        start: "88% 50%",
        end: "bottom 35%",
        scrub: true,
        animation: tl,
      });
    }, container);
    return () => crx.revert();
  });
  return (
    <Box
      height={"100vh"}
      sx={{ border: "1px solid transparent" }}
      position="relative"
      className="panel"
      ref={container}
    >
      <Stack direction="column" position={"relative"} marginTop="11rem">
        <Box
          component={"p"}
          fontFamily={font.font5}
          fontWeight={400}
          fontSize={{ xs: "49px", sm: "70px" }}
          maxWidth={"80%"}
          lineHeight={{ xs: "56px", md: "80px" }}
          ref={text1}
        >
          Hey,It's Ahmed.
          <br />I Am a fullstack JS Developer since 2022.
        </Box>
        <Stack direction={"row"} ref={conta}>
          <BsArrow90DegDown size={"16px"} />
          <Box
            component={"p"}
            fontFamily={font.font5}
            fontWeight={400}
            fontSize={{ xs: "16px", sm: "22px" }}
            ref={text2}
          >
            Just{" "}
            <Box component={"span"} fontWeight={600}>
              Snap
            </Box>{" "}
            Down
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};
export default HeadSection;
