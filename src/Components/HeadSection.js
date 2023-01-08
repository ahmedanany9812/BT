import { Box, Stack } from "@mui/material";
import { CustomTheme } from "../Utilities/Theme";
import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const HeadSection = () => {
  const font = CustomTheme.fonts;
  const container = useRef();
  return (
    <Box
      height={"100vh"}
      sx={{ border: "1px solid transparent" }}
      position="relative"
      className="panel"
      ref={container}
    >
      <Stack
        direction="column"
        position={"relative"}
        marginTop={"11rem"}
        alignItems="center"
      >
        <Box
          component={"p"}
          fontFamily={font.font5}
          fontWeight={800}
          fontSize={{ xs: "40px", sm: "90px" }}
          maxWidth={{ xs: "95%", sm: "80%" }}
          lineHeight={{ xs: "51px", md: "80px" }}
        >
          Junior
        </Box>
        <Box
          component={"p"}
          fontFamily={font.font5}
          fontWeight={800}
          fontSize={{ xs: "40px", sm: "90px" }}
          maxWidth={{ xs: "95%", sm: "80%" }}
          lineHeight={{ xs: "51px", md: "80px" }}
        >
          FullStack
        </Box>
        <Box
          component={"p"}
          fontFamily={font.font5}
          fontWeight={800}
          fontSize={{ xs: "40px", sm: "90px" }}
          maxWidth={{ xs: "95%", sm: "80%" }}
          lineHeight={{ xs: "51px", md: "80px" }}
        >
          JS/TS
        </Box>
        <Box
          component={"p"}
          fontFamily={font.font5}
          fontWeight={800}
          fontSize={{ xs: "40px", sm: "90px" }}
          maxWidth={{ xs: "95%", sm: "80%" }}
          lineHeight={{ xs: "51px", md: "80px" }}
        >
          Developer
        </Box>
      </Stack>
    </Box>
  );
};
export default HeadSection;
