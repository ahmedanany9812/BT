import { Box } from "@mui/material";
import { CustomTheme } from "../Utilities/Theme";
const font = CustomTheme.fonts;
const Link = ({ tag, link }) => {
  return (
    <Box
      component="a"
      fontFamily={font.header}
      fontSize="16px"
      fontWeight={300}
      sx={{ opacity: 0.6, textDecoration: "none", color: "inherit" }}
      href={link}
      target={"_blank"}
    >
      {tag}
    </Box>
  );
};

export default Link;
