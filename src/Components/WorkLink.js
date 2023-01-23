import { Box, Stack } from "@mui/material";
import { CustomTheme } from "../Utilities/Theme";
import { FaDotCircle } from "react-icons/fa";
const WorkLink = ({ id, tag, cate }) => {
  const { fonts } = CustomTheme;
  return (
    <Stack
      direction={"row"}
      alignItems="center"
      spacing={"20px"}
      paddingY="5rem"
      sx={{ position: "relative" }}
    >
      <Box
        height={"2px"}
        sx={{
          backgroundColor: "whitesmoke",
          width: "100%",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      />
      <Box
        fontFamily={fonts.font5}
        fontSize="8vw"
        fontWeight={500}
        minWidth={{ xs: "80px", sm: "230px" }}
      >
        0{id - 1}
      </Box>
      <Stack direction={"column"}>
        <Box fontFamily={fonts.font5} fontSize="10.3vw" fontWeight={700}>
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
            {cate}
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
};
export default WorkLink;
