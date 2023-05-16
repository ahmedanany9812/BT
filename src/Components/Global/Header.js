import { Box, Stack } from "@mui/material";
import gsap from "gsap";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CustomTheme } from "../../Utilities/Theme";
const Header = () => {
  const { fonts } = CustomTheme;
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(document.querySelectorAll(".HeaderTrr"), {
        yPercent: 150,
        duration: 1.5,
        ease: "expo.inOut",
      });
    });
    return () => ctx.revert();
  }, []);
  const cursoron = () => {
    var cursor = document.querySelector(".corsa");
    var cursorinner = document.querySelector(".corsadot");
    cursor.classList.add("click");
    cursor.classList.add("cursorLinkoutterhover");
    cursorinner.classList.add("cursorLinkinnerhover");
  };
  const cursorout = () => {
    var cursor = document.querySelector(".corsa");
    var cursorinner = document.querySelector(".corsadot");
    cursor.classList.remove("click");
    cursor.classList.remove("cursorLinkoutterhover");
    cursorinner.classList.remove("cursorLinkinnerhover");
  };
  return (
    <Stack
      direction={"row"}
      justifyContent="space-between"
      alignItems={"flex-start"}
      marginY="1rem"
    >
      <Box
        fontSize={"13px"}
        fontFamily={fonts.font5}
        sx={{ opacity: 0.9, overflow: "hidden" }}
      >
        <Box component={"span"} className="HeaderTrr" display={"inline-block"}>
          AHMED
          <br />
          ANANY
        </Box>
      </Box>
      <Box
        fontSize={"13px"}
        fontFamily={fonts.font5}
        display={{ xs: "none", md: "block" }}
        sx={{ opacity: 0.5, overflow: "hidden" }}
      >
        <Box
          component={"a"}
          className="HeaderTrr"
          display={"inline-block"}
          onMouseEnter={cursoron}
          onMouseLeave={cursorout}
          href="https://twitter.com/Tamkt69"
          target="_blank"
          sx={{
            color: "white",
            textDecoration: "none",
          }}
        >
          TWITTER
        </Box>
      </Box>
      <Box
        fontSize={"13px"}
        fontFamily={fonts.font5}
        display={{ xs: "none", md: "block" }}
        sx={{ opacity: 0.5, overflow: "hidden" }}
      >
        <Box component={"span"} className="HeaderTrr" display={"inline-block"}>
          AVALIBLE FOR HIRING
        </Box>
      </Box>
      <Box overflow={"hidden"}>
        <Stack
          direction={"row"}
          spacing="6px"
          alignItems={"center"}
          className="HeaderTrr"
          component={"div"}
          onMouseEnter={cursoron}
          onMouseLeave={cursorout}
          onClick={() => {
            cursorout();
            location.pathname !== "/" ? navigate("/") : navigate("/about");
          }}
        >
          <Box
            fontSize={"13px"}
            fontFamily={fonts.font5}
            sx={{ opacity: 0.9, overflow: "hidden" }}
          >
            {location.pathname !== "/" ? "HOME" : "ABOUTME"}
          </Box>
          <Box
            sx={{
              backgroundColor: "#Fe6601",
              borderRadius: "50%",
              height: "20px",
              width: "20px",
            }}
          />
        </Stack>
      </Box>
    </Stack>
  );
};
export default Header;
