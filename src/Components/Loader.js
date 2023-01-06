import { Box } from "@mui/material";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import SplitType from "split-type";
import { CustomTheme } from "../Utilities/Theme";
import { LoadingFinishd } from "../LoaderSlice";
const Loader = () => {
  const { fonts } = CustomTheme;
  const tl = gsap.timeline();
  const container = useRef(null);
  const dispatch = useDispatch();
  useEffect(() => {
    const text1 = new SplitType(container.current.children[1], {
      types: "words, chars",
    });
    tl.from(container.current.children[0], {
      opacity: 0,
      duration: 1,
      yPercent: -50,
    })
      .from(text1.chars, {
        opacity: 0,
        yPercent: 50,
        stagger: {
          amount: 0.2,
          from: "random",
        },
      })
      .to([container.current.children[0], container.current.children[1]], {
        yPercent: -100,
        stagger: 0.1,
        opacity: 0,
        delay: 0.4,
      })
      .to(container.current, {
        xPercent: -100,
        duration: 0.8,
        ease: "circ.out",
        onStart: () => {
          dispatch(LoadingFinishd());
        },
      });
  });
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "black",
        color: "white",
        position: "fixed",
        left: 0,
        top: 0,
        zIndex: 10000,
      }}
      ref={container}
    >
      <Box
        component={"p"}
        fontFamily={fonts.font5}
        fontWeight={500}
        fontSize="60px"
        sx={{
          position: "absolute",
          top: "45%",
          left: "50%",
          transform: "translateX(-50%)",
          whiteSpace: "nowrap",
        }}
      >
        Hi There !
      </Box>
      <Box
        component={"p"}
        fontFamily={fonts.font5}
        fontWeight={400}
        fontSize="24px"
        sx={{
          position: "absolute",
          top: "53%",
          left: "50%",
          transform: "translateX(-50%)",
          whiteSpace: "nowrap",
        }}
      >
        It's Ahmed Anany
      </Box>
    </Box>
  );
};
export default Loader;
