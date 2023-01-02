import { Box, Button, Stack } from "@mui/material";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SplitType from "split-type";
import { loaded } from "../LoaderSlice";
import { OpenMenuList } from "../NavSlice";
import { CustomTheme } from "../Utilities/Theme";
gsap.registerPlugin(ScrollTrigger);
const Header = () => {
  const completed = useSelector(loaded);
  useLayoutEffect(() => {
    const navi = document.getElementById("navi");
    const mainhah = document.getElementsByClassName("headOutlet");
    if (completed) {
      gsap.timeline({
        scrollTrigger: {
          trigger: mainhah,
          start: "15% top",
          end: "bottom bottom",
          onEnter: () => {
            navi.classList.add("scrollednav");
          },
          onLeaveBack: () => {
            navi.classList.remove("scrollednav");
          },
        },
      });
    }
  });
  const dispatch = useDispatch();
  const openmenu = () => {
    dispatch(OpenMenuList());
    const tag1 = document.getElementsByClassName("tag1");
    const tag2 = document.getElementsByClassName("tag2");
    const num1 = document.getElementsByClassName("num1");
    const num2 = document.getElementsByClassName("num2");
    const country = document.getElementsByClassName("country");
    const region = document.getElementsByClassName("region");
    const contacta = document.getElementsByClassName("contacta");
    const Box1 = document.getElementsByClassName("overlay");
    const close = document.getElementsByClassName("closebtn");
    const socialist = document.getElementsByClassName("socialist");
    const tag1Chars = new SplitType(tag1, {
      types: "chars, words",
    });
    const tag2Chars = new SplitType(tag2, {
      types: "chars, words",
    });
    const tl = gsap.timeline();
    tl.to([num1, num2, country, region, contacta], {
      yPercent: -100,
      opacity: 0,
    })
      .to(
        socialist[0].children,
        {
          yPercent: -100,
          opacity: 0,
        },
        "<"
      )
      .to(
        tag1Chars.chars,
        {
          yPercent: -100,
          opacity: 0,
        },
        "<"
      )
      .to(
        tag2Chars.chars,
        {
          yPercent: -100,
          opacity: 0,
        },
        "<"
      )
      .to(Box1, {
        xPercent: -100,
        duration: 0.8,
      })
      .to([num1, num2, country, region, contacta], {
        yPercent: 0,
        opacity: 1,
      })
      .to(
        socialist[0].children,
        {
          yPercent: 0,
          opacity: 1,
          stagger: {
            amount: 0.8,
          },
        },
        "<"
      )
      .to(
        tag1Chars.chars,
        {
          yPercent: 0,
          opacity: 1,
          stagger: {
            amount: 0.3,
          },
        },
        "<"
      )
      .to(
        tag2Chars.chars,
        {
          yPercent: 0,
          opacity: 1,
          stagger: {
            amount: 0.3,
          },
        },
        "<"
      )
      .to(close, {
        opacity: 1,
      });
  };
  const font = CustomTheme.fonts;
  return (
    <Stack
      justifyContent={"space-between"}
      position="fixed"
      sx={{ top: 0, right: 0, zIndex: 10 }}
      direction="row"
      spacing={"8px"}
      alignItems="center"
      component="div"
      width="100%"
      className="navi"
      id="navi"
    >
      <Box
        component={"p"}
        fontFamily={font.font5}
        fontWeight={700}
        fontSize="40px"
        id="logo"
      >
        BT.
      </Box>
      <Box
        component={Button}
        id="menu"
        onClick={openmenu}
        sx={{
          ":hover": {
            backgroundColor: "transparent",
          },
          color: "black",
        }}
      >
        <Box
          component={"p"}
          fontFamily={font.font5}
          fontWeight={400}
          fontSize="20px"
          className="expandicon"
        >
          menu
        </Box>
      </Box>
    </Stack>
  );
};
export default Header;
