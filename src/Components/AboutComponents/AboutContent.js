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
        duration: 1.5,
        delay: 0.5,
      });
    });
    return () => ctx.revert();
  }, []);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const elmnts = document.querySelectorAll(".boutcontaaaa");
      elmnts.forEach((elmo) => {
        gsap.from(elmo, {
          filter: "blur(23px)",
          opacity: 0,
          ease: "expo.inOut",
          duration: 0.9,
        });
      });
    });
    return () => ctx.revert();
  }, []);
  return (
    <Box marginTop={{ xs: "4rem", sm: "5rem" }}>
      <Box
        fontSize={"12vw"}
        fontFamily={fonts.font5}
        fontWeight={400}
        letterSpacing={{ sm: "-8px", xs: "-3px" }}
        overflow="hidden"
      >
        <Box className="boutag" component={"span"} display={"inline-block"}>
          Hola.
        </Box>
      </Box>
      <Box
        fontSize={{ xs: "5.2vw", sm: "3vw" }}
        fontFamily={fonts.font5}
        fontWeight={400}
        marginTop="1rem"
        className="boutcontaaaa"
        width={{ xs: "100%", sm: "75%" }}
      >
        It`s Ahmed Anany a junior Self-taught fullstack JS developer and problem
        solver since 2022.
      </Box>
      <Box
        component={"p"}
        fontWeight={400}
        fontFamily={fonts.hom}
        fontSize={{ xs: "14px", sm: "16px" }}
        letterSpacing={"0.5px"}
        lineHeight="1.9em"
        marginTop="2rem"
        className="boutcontaaaa"
        maxWidth={{ xs: "90%", sm: "65%" }}
      >
        I`m introducing myself to the world of web development by creating a
        static and dynamic web Applications also fullstack Applications and
        fully managment system I`m also a Data science student at my last year
        Currently i`m working as local freelancer so i`m opening for work to get
        more experience and make new friends.
        <br />
        <br />
        What excites me most about working in Web development is being able to
        design and create things that have purpose and solve real problems.
        Leaning into customer research and insight, finding the right problems
        to solve, delivering that value as quickly as possible, learning from it
        and then iterating and improving that value over time is the key to
        great design.
        <br />
        <br />
        I've started with HTML with CSS at the end of 2021 then at the begining
        of 2022 i've started learning JS and the usage of JS's libraries till
        march i've been starting doing Vue projects then React and solving some of it's problems.
        At the end of the past year As i've done with redux and other React's
        packages i've started learning Backend by Node and Express with mongoDB then i developed Ytrouty fullstack App
        <br />
        <br />
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
          Twitter{" "}
        </Box>
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
