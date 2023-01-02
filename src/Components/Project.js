import { Box, Stack } from "@mui/material";
import gsap from "gsap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CustomTheme } from "../Utilities/Theme";
function Project({ cate, tag, img, nam, pages }) {
  const font = CustomTheme.fonts;
  const [FullWidth, setWidth] = useState(false);
  const navigate = useNavigate();
  return (
    <Stack
      direction={"row"}
      alignItems="center"
      justifyContent={"flex-start"}
      height="100vh"
      paddingY={"130px"}
      position="relative"
      width={"100%"}
      sx={{
        border: "2px solid white",
      }}
    >
      <Stack direction={"column"} spacing="55px">
        <Box position={"relative"} paddingBottom="11px">
          <Box
            component={"p"}
            onClick={() => {
              const tl = gsap.timeline();
              tl.to(pages.current, {
                xPercent: 0,
              })
                .fromTo(
                  pages.current.children,
                  {
                    height: "0%",
                    pointerEvents: "none",
                  },
                  {
                    height: "100%",
                    stagger: {
                      amount: 1,
                      from: "edges",
                      axis: "x",
                      ease: "power2.in",
                    },
                    onComplete: () => window.scrollTo(0, 0),
                    pointerEvents: "all",
                  }
                )
                .to(pages.current, {
                  duration: 0.4,
                })
                .to(pages.current, {
                  xPercent: -100,
                  onStart: () => {
                    navigate(`/${nam}`);
                  },
                });
            }}
            fontSize="80px"
            fontFamily={font.body}
            sx={{
              textDecoration: "none",
              color: "inherit",
              cursor: "pointer",
            }}
            onMouseEnter={() => setWidth((prev) => true)}
            onMouseLeave={() => setWidth((prev) => false)}
          >
            {tag}
          </Box>
          <Box
            position={"absolute"}
            sx={{
              bottom: 0,
              left: 0,
              opacity: FullWidth ? 1 : 0,
              width: FullWidth ? "100%" : "1%",
              backgroundColor: "white",
              height: "5px",
              transition: "0.4s",
            }}
          />
        </Box>
        <Box
          component={"p"}
          fontSize="12px"
          fontWeight={400}
          sx={{ opacity: 0.5 }}
          fontFamily={font.body}
        >
          {cate}
        </Box>
      </Stack>
      <Box
        component={"img"}
        sx={{
          position: "absolute",
          top: "50%",
          right: "50%",
          width: "35%",
          zIndex: "-1",
          transform: "translate(50%,-50%)",
          opacity: "0.6",
        }}
        src={require(`../Utilities/${img}`)}
      />
    </Stack>
  );
}

export default Project;
