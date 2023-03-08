import { Box, Stack } from "@mui/material";
import { CustomTheme } from "../../Utilities/Theme";
import { BsArrow90DegRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
const WorkLink = ({ id, tag, cate, dat, nam }) => {
  const { fonts } = CustomTheme;
  const navigate = useNavigate();
  const cursoron = () => {
    var cursor = document.querySelector(".corsa");
    var cursorinner = document.querySelector(".corsadot");
    cursor.classList.add("click");
    cursor.classList.add("cursorLinkoutterhover");
    cursorinner.classList.add("cursorLinkinnerhover");
  };
  const cursorout = () => {
    var cursor = document.querySelector(".corsa");
    var cursorinner = document.querySelector(".corsadot");
    cursor.classList.remove("click");
    cursor.classList.remove("cursorLinkoutterhover");
    cursorinner.classList.remove("cursorLinkinnerhover");
  };
  return (
    <Box overflow={"hidden"} className="work animatt" position={"relative"}>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          backgroundColor: "#777",
          width: "100%",
        }}
        className="line"
      />
      {id === 4 && (
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            backgroundColor: "#777",
            width: "100%",
          }}
          className="line"
        />
      )}
      <Stack
        direction={"row"}
        alignItems="center"
        paddingY={{ xs: "2rem", sm: "5rem" }}
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
            fontSize={{ xs: "10vw", sm: "10.3vw" }}
            fontWeight={400}
            letterSpacing={{ xs: "-3px", sm: "-10px" }}
          >
            {tag}
          </Box>
        </Stack>
        <Box
          component={BsArrow90DegRight}
          sx={{ marginLeft: "auto", fontSize: "5vw" }}
          color="whitesmoke"
          onClick={() => {
            cursorout();
            navigate(`work/${nam}`);
          }}
          onMouseEnter={cursoron}
          onMouseLeave={cursorout}
        />
      </Stack>
    </Box>
  );
};
export default WorkLink;
