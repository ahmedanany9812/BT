import { Box, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { CustomTheme } from "../Utilities/Theme";
const ProjectLink = ({ nam, id, tag }) => {
  const font = CustomTheme.fonts;
  const navigate = useNavigate();
  return (
    <Stack
      direction={"row"}
      spacing="20px"
      component={"div"}
      onClick={() => {
        navigate(`${nam}`, { replace: true });
      }}
      sx={{
        cursor: "pointer",
      }}
    >
      <Box
        component={"p"}
        fontFamily={font.font5}
        fontWeight={500}
        fontSize="50px"
        color={"white"}
      >
        0{id}
      </Box>
      <Box
        component={"p"}
        fontFamily={font.font5}
        fontWeight={500}
        fontSize="50px"
        color={"white"}
      >
        {tag}
      </Box>
    </Stack>
  );
};
export default ProjectLink;
