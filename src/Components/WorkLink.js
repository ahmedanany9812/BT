import { Box, Stack } from "@mui/material";
import { CustomTheme } from "../Utilities/Theme";
import { FaDotCircle } from "react-icons/fa";
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
        fontSize="8vw"
        fontWeight={500}
        minWidth={{ xs: "67px", sm: "230px" }}
      >
        0{id - 1}
      </Box>
      <Stack direction={"column"}>
        <Box
          fontFamily={fonts.font5}
          fontSize="10.3vw"
          fontWeight={700}
          letterSpacing={{ xs: "-3px", sm: "-10px" }}
        >
          {tag}
        </Box>
        <Stack
          direction={"row"}
          alignItems="center"
          spacing={"8px"}
          fontSize={{ xs: "12px", md: "17px" }}
        >
          <FaDotCircle />
          <Box
            fontFamily={fonts.font5}
            fontSize={{ xs: "11px", sm: "14px" }}
            fontWeight={400}
            color="#ff732e"
          >
            {cate}/{dat}
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
};
export default WorkLink;
