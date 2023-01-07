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
          fontSize={{ xs: "30px", sm: "50px" }}
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
