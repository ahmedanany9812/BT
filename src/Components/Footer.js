import { Box } from "@mui/material";
import { CustomTheme } from "../Utilities/Theme";
import FootLine from "./FootLine";
const Footer = () => {
  const { fonts } = CustomTheme;
  return (
    <Box marginTop={"8rem"} paddingBottom="2rem">
      <Box
        fontSize={{ xs: "5vw", sm: "4.5vw" }}
        fontFamily={fonts.font5}
        fontWeight={300}
      >
        Feel free to say Hi!
        <br />
        <Box component={"span"} sx={{ opacity: 0.6 }}>
          ahmedenany9812@gmail.com
        </Box>
      </Box>
      <Box
        fontSize={{ xs: "5vw", sm: "4.5vw" }}
        fontFamily={fonts.font5}
        fontWeight={300}
        marginTop="4rem"
      >
        If you`d like to chew the fat catch me on{" "}
        <Box component={"span"} sx={{ opacity: 0.6 }}>
          Twitter
        </Box>{" "}
        or you can check my{" "}
        <Box component={"span"} sx={{ opacity: 0.6 }}>
          Resume
        </Box>
      </Box>
      <FootLine />
    </Box>
  );
};
export default Footer;
