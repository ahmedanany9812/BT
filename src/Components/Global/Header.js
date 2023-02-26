import { Box, Stack } from "@mui/material";
import gsap from "gsap";
import { useEffect } from "react";
import { CustomTheme } from "../../Utilities/Theme";
const Header = () => {
  const { fonts } = CustomTheme;
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(document.querySelectorAll(".HeaderTrr"), {
        yPercent: 150,
        duration: 1,
        ease: "expo.inOut",
      });
    });
    return () => ctx.revert();
  }, []);
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
        sx={{ opacity: 0.7, overflow: "hidden" }}
      >
        <Box component={"span"} className="HeaderTrr" display={"inline-block"}>
          TWITTER
        </Box>
      </Box>
      <Box
        fontSize={"13px"}
        fontFamily={fonts.font5}
        display={{ xs: "none", md: "block" }}
        sx={{ opacity: 0.7, overflow: "hidden" }}
      >
        <Box component={"span"} className="HeaderTrr" display={"inline-block"}>
          AVALIBLE FOR HIRE
        </Box>
      </Box>
      <Box overflow={"hidden"}>
        <Stack
          direction={"row"}
          spacing="6px"
          alignItems={"center"}
          className="HeaderTrr"
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
              backgroundColor: "#FFFFFF",
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
