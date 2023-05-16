import { Box, Stack } from "@mui/material";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { CustomTheme } from "../../Utilities/Theme";
gsap.registerPlugin(ScrollTrigger);
const FootLine = ({ innerHeight }) => {
  const { fonts } = CustomTheme;
  const GetScrollPadd = () => {
    if (innerHeight > 2000) {
      return "0";
    } else {
      return "2rem";
    }
  };
  return (
    <Box marginTop={"7rem"} paddingBottom={GetScrollPadd} className="LineFoot">
      <Box overflow={"hidden"}>
        <Stack
          alignItems="center"
          justifyContent={"space-between"}
          direction="row"
        >
          <Box
            fontSize={{ xs: "13px", sm: "15px" }}
            fontFamily={fonts.font5}
            fontWeight={400}
          >
            <Box component={"span"} sx={{ opacity: 0.5 }}>
              TANTA,{" "}
            </Box>
            EG
          </Box>
          <Box
            fontSize={{ xs: "13px", sm: "15px" }}
            fontFamily={fonts.font5}
            fontWeight={400}
          >
            <Box component={"span"} sx={{ opacity: 0.5 }}>
              ©
            </Box>
            2023
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};
export default FootLine;
