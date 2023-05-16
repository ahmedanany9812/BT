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
          component={"a"}
          onMouseEnter={cursoron}
          onMouseLeave={cursorout}
          sx={{ opacity: 0.5, color: "white", textDecoration: "none" }}
          href="https://wa.link/3htz6p"
          target="_blank"
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
          component={"a"}
          href="https://twitter.com/Tamkt69"
          target="_blank"
          sx={{
            color: "white",
            opacity: 0.5,
            textDecoration: "none",
          }}
        >
          {" "}
          Twitter
        </Box>{" "}
        or you can check my
        <Box
          component={"a"}
          onMouseEnter={cursoron}
          onMouseLeave={cursorout}
          download
          href={require("../../Ahmed.pdf")}
          sx={{
            color: "white",
            opacity: 0.5,
            textDecoration: "none",
          }}
        >
          {" "}
          Resume
        </Box>
      </Box>
    </Box>
  );
};
export default Footer;
