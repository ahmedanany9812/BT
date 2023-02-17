import { Box } from "@mui/material";
import gsap from "gsap";
import { useEffect } from "react";
import { CustomTheme } from "../../Utilities/Theme";
const AboutContent = () => {
  const { fonts } = CustomTheme;
  useEffect(() => {
    const ctx = gsap.context(() => {
      const elm = document.querySelector(".boutag");
      gsap.from(elm, {
        yPercent: 200,
        ease: "expo.inOut",
        duration: 2,
        delay: 0.5,
      });
    });
    return () => ctx.revert();
  });
  return (
    <Box marginTop={{ xs: "4rem", sm: "5rem" }}>
      <Box
        fontSize={"11.5vw"}
        fontFamily={fonts.font5}
        fontWeight={300}
        letterSpacing={{ sm: "-8px", xs: "-3px" }}
        overflow="hidden"
      >
        <Box className="boutag" component={"span"} display={"inline-block"}>
          Hola!
        </Box>
      </Box>
      <Box
        fontSize={{ xs: "5vw", sm: "4.5vw" }}
        fontFamily={fonts.font5}
        fontWeight={300}
        marginTop="1rem"
      >
        It`s Ahmed Anany a junior Self-taught fullstack JS developer and problem
        solver since 2022
      </Box>
      <Box
        fontSize={{ xs: "5vw", sm: "4.5vw" }}
        fontFamily={fonts.font5}
        fontWeight={300}
        marginTop="2rem"
      >
        I`m introducing myself to the world of web development by creating a
        static and dynamic web Applications
      </Box>
      <Box
        fontSize={{ xs: "5vw", sm: "4.5vw" }}
        fontFamily={fonts.font5}
        fontWeight={300}
        marginTop="2rem"
      >
        I`m also a Data science student at my last year
      </Box>
      <Box
        fontSize={{ xs: "5vw", sm: "4.5vw" }}
        fontFamily={fonts.font5}
        fontWeight={300}
        marginTop="2rem"
      >
        Currently i`m working as local freelancer so i`m opening for work to get
        more experience and make new friends
      </Box>
      <Box
        fontSize={{ xs: "5vw", sm: "4.5vw" }}
        fontFamily={fonts.font5}
        fontWeight={300}
        marginTop="2rem"
      >
        If you got something on your mind you want to share it with me catch me
        on{" "}
        <Box component={"span"} sx={{ opacity: 0.6 }}>
          Linked in
        </Box>{" "}
        ,
        <Box component={"span"} sx={{ opacity: 0.6 }}>
          Facebook
        </Box>{" "}
        or{" "}
        <Box component={"span"} sx={{ opacity: 0.6 }}>
          Twitter
        </Box>
      </Box>
      <Box
        fontSize={{ xs: "5vw", sm: "4.5vw" }}
        fontFamily={fonts.font5}
        fontWeight={300}
        marginTop="2rem"
      >
        Or you can check my Code skills on my{" "}
        <Box component={"span"} sx={{ opacity: 0.6 }}>
          Github
        </Box>{" "}
        Account
      </Box>
    </Box>
  );
};
export default AboutContent;
