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
        marginTop={{ xs: "9rem", sm: "11rem" }}
      >
        <Box
          component={"p"}
          fontFamily={font.font5}
          fontWeight={400}
          fontSize={{ xs: "46px", sm: "70px" }}
          maxWidth={{ xs: "90%", sm: "80%" }}
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
