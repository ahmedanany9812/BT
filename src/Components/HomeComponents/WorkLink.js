import { Box, Stack } from "@mui/material";
import { CustomTheme } from "../../Utilities/Theme";
import { BsArrow90DegRight } from "react-icons/bs";
const WorkLink = ({ id, tag, cate, dat }) => {
  const { fonts } = CustomTheme;
  return (
    <Box overflow={"hidden"} className="work animatt" position={"relative"}>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "2px",
          backgroundColor: "#777",
          width: "100%",
        }}
      />
      <Stack
        direction={"row"}
        alignItems="center"
        paddingY={{ xs: "1rem", sm: "5rem" }}
        sx={{ position: "relative" }}
      >
        <Box
          fontFamily={fonts.font5}
          fontSize={{ xs: "3vw", sm: "1vw" }}
          fontWeight={500}
        >
          00{id - 1}
        </Box>
        <Stack direction={"column"} marginLeft="20px">
          <Box
            fontFamily={fonts.font5}
            fontSize={{ xs: "11vw", sm: "10.3vw" }}
            fontWeight={300}
            letterSpacing={{ xs: "-3px", sm: "-10px" }}
          >
            {tag}
          </Box>
        </Stack>
        <Box
          component={BsArrow90DegRight}
          sx={{ marginLeft: "auto", fontSize: "5vw" }}
          color="whitesmoke"
        />
      </Stack>
    </Box>
  );
};
export default WorkLink;
