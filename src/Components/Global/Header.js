import { Box, Stack } from "@mui/material";
import { CustomTheme } from "../../Utilities/Theme";
const Header = () => {
  const { fonts } = CustomTheme;
  return (
    <Stack
      direction={"row"}
      justifyContent="space-between"
      alignItems={"flex-start"}
      marginY="1rem"
    >
      <Box fontSize={"13px"} fontFamily={fonts.font5}>
        AHMED
        <br />
        ANANY
      </Box>
      <Box
        fontSize={"13px"}
        fontFamily={fonts.font5}
        display={{ xs: "none", md: "block" }}
        sx={{ opacity: 0.7 }}
      >
        TWITTER
      </Box>
      <Box
        fontSize={"13px"}
        fontFamily={fonts.font5}
        display={{ xs: "none", md: "block" }}
        sx={{ opacity: 0.7 }}
      >
        AVALIBLE FOR HIRE
      </Box>
      <Stack direction={"column"} alignItems="flex-end">
        <Stack direction={"row"} spacing="6px" alignItems={"center"}>
          <Box fontSize={"13px"} fontFamily={fonts.font5}>
            ABOUTME
          </Box>
          <Box
            sx={{
              backgroundColor: "#ff732e",
              borderRadius: "50%",
              height: "20px",
              width: "20px",
            }}
          />
        </Stack>

        <Box
          fontSize={"13px"}
          fontFamily={fonts.font5}
          display={{ md: "none", xs: "block" }}
          sx={{ opacity: 0.7 }}
        >
          TWITTER
        </Box>
        <Box
          fontSize={"13px"}
          fontFamily={fonts.font5}
          display={{ md: "none", xs: "block" }}
          sx={{ opacity: 0.7 }}
        >
          AVALIBLE FOR HIRE
        </Box>
      </Stack>
    </Stack>
  );
};
export default Header;
