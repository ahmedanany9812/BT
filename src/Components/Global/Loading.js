import { Box, Stack } from "@mui/material";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { LoadingFinishd } from "../../LoaderSlice";
import { CustomTheme } from "../../Utilities/Theme";
const Loading = () => {
  const { fonts } = CustomTheme;
  const elm = useRef();
  const dispatch = useDispatch();
  const elma = useRef();
  useEffect(() => {
    const nam1 = document.querySelector(".ahmed");
    const nam2 = document.querySelector(".anan");
    const ctx = gsap.context(() => {
      let tl = gsap.timeline({
        delay: 0,
        defaults: {
          duration: 0.38,
        },
      });
      tl.to(elm.current, {
        yPercent: -100,
      })
        .to(elm.current, {
          yPercent: -200,
        })
        .to(elm.current, {
          yPercent: -300,
        })
        .to(elm.current, {
          yPercent: -400,
        })
        .to(elm.current, {
          yPercent: -500,
        })
        .to(elm.current, {
          yPercent: -600,
        })
        .to(elm.current, {
          yPercent: -700,
        })
        .to(elma.current, {
          yPercent: -100,
        })
        .to(
          elma.current,
          {
            yPercent: -200,
          },
          "<+0.8"
        )
        .to(
          nam1,
          {
            yPercent: -100,
          },
          "<"
        )
        .to(
          nam2,
          {
            yPercent: -100,
            onComplete: () => dispatch(LoadingFinishd()),
          },
          "<"
        );
    });
    return () => ctx.revert();
  });
  return (
    <Box sx={{ position: "fixed", width: "100%", height: "100%", left: 0 }}>
      <Box
        sx={{
          position: "absolute",
          top: { xs: "40%", sm: "50%" },
          left: "50%",
          transform: "translate(-50%,-50%)",
          height: "70px",
          overflowY: "hidden",
        }}
        fontFamily={fonts.load}
        fontWeight="900"
        fontStyle={"italic"}
        fontSize="50px"
      >
        <Box height={"100%"} ref={elma}>
          <Stack direction={"row"}>
            0
            <Stack direction={"column"} height={"68px"}>
              <Box ref={elm} height={"100%"}>
                <Box>00</Box>
                <Box>08</Box>
                <Box>22</Box>
                <Box>37</Box>
                <Box>52</Box>
                <Box>77</Box>
                <Box>80</Box>
                <Box>92</Box>
              </Box>
            </Stack>
          </Stack>
          <Box>100</Box>
        </Box>
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: "80%",
          left: "10%",
        }}
      >
        <Box
          fontSize={"19px"}
          fontFamily={fonts.font5}
          sx={{ overflow: "hidden" }}
        >
          <Box component={"span"} className="ahmed" display={"inline-block"}>
            AHMED
          </Box>
        </Box>
        <Box
          fontSize={"19px"}
          fontFamily={fonts.font5}
          sx={{ overflow: "hidden" }}
        >
          <Box component={"span"} className="anan" display={"inline-block"}>
            ANANY
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default Loading;
