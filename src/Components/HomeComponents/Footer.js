import { Box } from "@mui/material";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { CustomTheme } from "../../Utilities/Theme";
gsap.registerPlugin(ScrollTrigger);
const Footer = () => {
  const { fonts } = CustomTheme;
  useEffect(() => {
    const footelm = document.querySelector(".foot-main");
    const foot1elm = document.querySelector(".foot1");
    const foot2elm = document.querySelector(".foot2");
    const foot3elm = document.querySelector(".foot3");
    const foot4elm = document.querySelector(".foot4");
    const foot5elm = document.querySelector(".foot5");
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from(foot1elm, {
        yPercent: 200,
        ease: "expo.inOut",
        duration: 1.5,
      })
        .from(
          foot2elm,
          {
            yPercent: 200,
            ease: "expo.inOut",
            duration: 1.5,
          },
          "<"
        )
        .from(
          foot3elm,
          {
            yPercent: 200,
            ease: "expo.inOut",
            duration: 1.5,
          },
          "<"
        )
        .from(
          foot4elm,
          {
            yPercent: 200,
            ease: "expo.inOut",
            duration: 1.5,
          },
          "<"
        )
        .from(
          foot5elm,
          {
            yPercent: 200,
            ease: "expo.inOut",
            duration: 1.5,
          },
          "<"
        );
      ScrollTrigger.create({
        trigger: footelm,
        start: "10% 90%",
        animation: tl,
      });
    });
    return () => ctx.revert();
  }, []);
  return (
    <Box marginTop={"8rem"} className="foot-main" paddingY="2rem">
      <Box
        fontSize={{ xs: "8vw", sm: "4.5vw" }}
        fontFamily={fonts.font5}
        fontWeight={300}
        overflow={"hidden"}
      >
        <Box component={"span"} display="inline-block" className="foot1">
          Feel free to say Hi!
        </Box>
      </Box>
      <Box
        fontSize={{ xs: "8vw", sm: "4.5vw" }}
        fontFamily={fonts.font5}
        fontWeight={300}
        overflow={"hidden"}
      >
        <Box
          component={"span"}
          sx={{ opacity: 0.6 }}
          display="inline-block"
          className="foot2"
        >
          Email-me
        </Box>
      </Box>
      <Box
        fontSize={{ xs: "8vw", sm: "4.5vw" }}
        fontFamily={fonts.font5}
        fontWeight={300}
        marginTop="4rem"
        overflow={"hidden"}
      >
        <Box component={"span"} display="inline-block" className="foot3">
          If you`d like to chew the fat
        </Box>
      </Box>
      <Box
        fontSize={{ xs: "8vw", sm: "4.5vw" }}
        fontFamily={fonts.font5}
        fontWeight={300}
        overflow={"hidden"}
      >
        <Box component={"span"} display="inline-block" className="foot4">
          catch me on{" "}
          <Box component={"span"} sx={{ opacity: 0.6 }}>
            Twitter{" "}
          </Box>
          or you can
        </Box>
      </Box>
      <Box
        fontSize={{ xs: "8vw", sm: "4.5vw" }}
        fontFamily={fonts.font5}
        fontWeight={300}
        overflow={"hidden"}
      >
        <Box component={"span"} display="inline-block" className="foot5">
          check my{" "}
          <Box component={"span"} sx={{ opacity: 0.6 }}>
            Resume
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default Footer;
