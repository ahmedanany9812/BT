import { Box, Stack } from "@mui/material";
import { CustomTheme } from "../Utilities/Theme";
const WorkLink = ({ id, tag, cate, dat }) => {
  const { fonts } = CustomTheme;
  return (
    <Stack
      direction={"row"}
      alignItems="center"
      spacing={"20px"}
      paddingY={{ xs: "2rem", sm: "5rem" }}
      sx={{ position: "relative" }}
    >
      <Box
        fontFamily={fonts.font5}
        fontSize={{ xs: "2vw", sm: "1vw" }}
        fontWeight={500}
      >
        00{id - 1}
      </Box>
      <Stack direction={"column"}>
        <Box
          fontFamily={fonts.font5}
          fontSize="10.3vw"
          fontWeight={300}
          letterSpacing={{ xs: "-3px", sm: "-10px" }}
        >
          {tag}
        </Box>
        <Box
          fontFamily={fonts.font5}
          fontSize="13px"
          fontWeight={300}
          sx={{ opacity: 0.6 }}
        >
          {cate}/<br />
          {dat}
        </Box>
      </Stack>
    </Stack>
  );
};
export default WorkLink;
