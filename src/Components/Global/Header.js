import { Box, Stack } from "@mui/material";
import gsap from "gsap";
import { useEffect } from "react";
import { CustomTheme } from "../../Utilities/Theme";
const Header = () => {
  const { fonts } = CustomTheme;
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(document.querySelectorAll(".trad"), {
        yPercent: 100,
        duration: 1,
      });
    });
    return () => ctx.revert();
  });
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
        <Box
          component={"span"}
          className="trad"
          sx={{ display: "inline-block" }}
        >
          AHMED
          <br />
          ANANY
        </Box>
      </Box>
      <Box
        fontSize={"13px"}
        fontFamily={fonts.font5}
        display={{ xs: "none", md: "block" }}
        sx={{ opacity: 0.7, overflow: "hidden" }}
      >
        <Box
          component={"span"}
          className="trad"
          sx={{ display: "inline-block" }}
        >
          TWITTER
        </Box>
      </Box>
      <Box
        fontSize={"13px"}
        fontFamily={fonts.font5}
        display={{ xs: "none", md: "block" }}
        sx={{ opacity: 0.7, overflow: "hidden" }}
      >
        <Box
          component={"span"}
          className="trad"
          sx={{ display: "inline-block" }}
        >
          AVALIBLE FOR HIRE
        </Box>
      </Box>
      <Box overflow={"hidden"}>
        <Stack
          className="trad"
          direction={"row"}
          spacing="6px"
          alignItems={"center"}
        >
          <Box
            fontSize={"13px"}
            fontFamily={fonts.font5}
            sx={{ opacity: 0.9, overflow: "hidden" }}
          >
            ABOUTME
          </Box>
          <Box
            sx={{
              backgroundColor: "#ff5908",
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
