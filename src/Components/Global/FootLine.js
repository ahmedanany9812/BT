import { Box, Stack } from "@mui/material";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { CustomTheme } from "../../Utilities/Theme";
gsap.registerPlugin(ScrollTrigger);
const FootLine = ({ innerHeight }) => {
  const { fonts } = CustomTheme;
  const GetScrollPadd = () => {
    if (innerHeight > 2000) {
      return "0";
    } else {
      return "2rem";
    }
  };
  useEffect(() => {
    const trigger = document.querySelector(".LineFoot");
    const ctx = gsap.context(() => {
      gsap.from(trigger.children[0].children[0], {
        yPercent: 200,
        duration: 1.5,
        ease: "expo.inOut",
        delay: 0.5,
        scrollTrigger: {
          trigger: trigger,
          start: "top bottom",
        },
      });
    });
    return () => ctx.revert();
  }, []);
  return (
    <Box marginTop={"7rem"} paddingBottom={GetScrollPadd} className="LineFoot">
      <Box overflow={"hidden"}>
        <Stack
          alignItems="center"
          justifyContent={"space-between"}
          direction="row"
        >
          <Box
            fontSize={{ xs: "13px", sm: "15px" }}
            fontFamily={fonts.font5}
            fontWeight={300}
          >
            Based in{" "}
            <Box component={"span"} sx={{ opacity: 0.6 }}>
              EGYPT
            </Box>
          </Box>
          <Box
            fontSize={{ xs: "13px", sm: "15px" }}
            fontFamily={fonts.font5}
            fontWeight={300}
          >
            <Box component={"span"} sx={{ opacity: 0.6 }}>
              ©
            </Box>
            2023
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};
export default FootLine;
