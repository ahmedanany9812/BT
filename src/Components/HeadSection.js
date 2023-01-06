import { Box, Stack } from "@mui/material";
import { CustomTheme } from "../Utilities/Theme";
import { BsArrow90DegDown } from "react-icons/bs";
const HeadSection = () => {
  const font = CustomTheme.fonts;
  return (
    <Box
      height={"100vh"}
      sx={{ border: "1px solid transparent" }}
      position="relative"
      className="panel"
    >
      <Stack direction="column" position={"relative"} marginTop="11rem">
        <Box
          component={"p"}
          fontFamily={font.font5}
          fontWeight={400}
          fontSize="72px"
          maxWidth={"80%"}
          className="heada"
          lineHeight={"80px"}
        >
          Hey,It's Ahmed.
          <br />I Am a fullstack JS Developer since 2022.
        </Box>
        <Stack direction={"row"}>
          <BsArrow90DegDown size={"20px"} />
          <Box
            component={"p"}
            fontFamily={font.font5}
            fontWeight={400}
            fontSize="22px"
            className="heada"
          >
            Just <Box component={"span"} fontWeight={600}>Snap</Box> Down
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};
export default HeadSection;
