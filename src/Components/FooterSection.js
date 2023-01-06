import { Box, Stack } from "@mui/material";
import { CustomTheme } from "../Utilities/Theme";
const FooterSection = () => {
  const font = CustomTheme.fonts;
  return (
    <Box height={"100vh"} id="box3" className="panel">
      <Stack
        direction={"column"}
        alignItems="flex-start"
        height="100%"
        paddingTop={"10rem"}
      >
        <Box
          component={"p"}
          fontFamily={font.font5}
          fontWeight={500}
          fontSize="50px"
          color={"white"}
          className="emailfoot"
        >
          Feel free to say Hi! - <br />
          <Box component={"span"} sx={{ opacity: 0.6 }}>
            ahmedenany9812@gamil.com
          </Box>
        </Box>
        <Box
          component={"p"}
          fontFamily={font.font5}
          fontWeight={500}
          fontSize="50px"
          color={"white"}
          marginTop={"8rem"}
          className="contafoot"
        >
          If you'd like to chew the fat Catch me on{" "}
          <Box component={"span"}>
            <Box component={"a"} sx={{ opacity: 0.6 }}>
              Facebook
            </Box>
          </Box>{" "}
          <Box component={"span"}>
            <Box component={"a"} sx={{ opacity: 0.6 }}>
              Twitter
            </Box>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};
export default FooterSection;
