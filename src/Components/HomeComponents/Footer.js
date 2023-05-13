import { Box } from "@mui/material";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { CustomTheme } from "../../Utilities/Theme";
gsap.registerPlugin(ScrollTrigger);
const Footer = () => {
  const { fonts } = CustomTheme;
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
    <Box marginTop={"9rem"} className="foot-main" paddingY="2rem">
      <Box
        fontSize={{ xs: "6.5vw", sm: "4.5vw" }}
        fontFamily={fonts.font5}
        fontWeight={400}
        overflow={"hidden"}
      >
        Feel free to say Hi!
        <br />
        <Box
          component={"span"}
          onMouseEnter={cursoron}
          onMouseLeave={cursorout}
          sx={{ opacity: 0.6 }}
        >
          Text-me
        </Box>
      </Box>
      <Box
        fontSize={{ xs: "6.5vw", sm: "4.5vw" }}
        fontFamily={fonts.font5}
        fontWeight={400}
        marginTop="4rem"
        overflow={"hidden"}
      >
        If you`d like to chew the fat catch me on
        <Box
          onMouseEnter={cursoron}
          onMouseLeave={cursorout}
          component={"span"}
          sx={{ opacity: 0.6 }}
        >
          {" "}
          Twitter
        </Box>{" "}
        or you can check my
        <Box
          component={"span"}
          onMouseEnter={cursoron}
          onMouseLeave={cursorout}
          sx={{ opacity: 0.6 }}
        >
          {" "}
          Resume
        </Box>
      </Box>
    </Box>
  );
};
export default Footer;
