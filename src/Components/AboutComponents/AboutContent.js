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
        Hi, I'm Ahmed, a full-stack JavaScript developer and a student at the
        Faculty of Science, Data Science department. I'm expected to graduate
        this year and I'm currently working as a freelancer.
        <br />
        <br />I have experience in React, Vue, Strapi, Prisma, Greensock, latex,
        TypeScript, SQL, NoSQL, and Express.
        <br />
        I'm passionate about using technology to solve real problems. I'm always
        looking for new challenges and I'm eager to learn new things. I'm also a
        highly skilled communicator and collaborator. I'm confident that I can
        be a valuable asset to your team
        <br />
        <br />
        I've experience in system's management, web development, web design,
        software development, and data science. I'm also a skilled writer and
        editor. I have experience writing technical documentation, blog posts,
        and marketing materials. In addition to my technical skills, I'm also a
        team player and I'm always willing to go the extra mile. I'm confident
        that I can make a significant contribution to your team and help you
        achieve your goals and objectives. I'm also a problem solver and I'm
        confident that I have the skills and experience that you're looking for
        in a full-stack JavaScript developer
        <br />
        <br />
        I would love to hear from you! If you have any questions or would like
        to get in touch, please feel free to reach out to me I look forward to
        hearing from you!
        <br />
        <br />
        <Box
          component={"a"}
          onMouseEnter={cursoron}
          onMouseLeave={cursorout}
          sx={{ opacity: 0.6, color: "white", textDecoration: "none" }}
          href="https://wa.link/3htz6p"
          target="_blank"
        >
          +(20) 120 3951 753
        </Box>
        <br />
        <Box
          onMouseEnter={cursoron}
          onMouseLeave={cursorout}
          component={"a"}
          href="https://www.linkedin.com/in/ahmed-anany-0b728b234/"
          target="_blank"
          sx={{
            color: "white",
            textDecoration: "none",
            opacity: 0.6,
          }}
        >
          Linked in
        </Box>
        <br />
        <Box
          component={"a"}
          onMouseEnter={cursoron}
          onMouseLeave={cursorout}
          href="https://twitter.com/Tamkt69"
          target="_blank"
          sx={{
            color: "white",
            textDecoration: "none",
            opacity: 0.6,
          }}
        >
          Twitter
        </Box>
        <br />
      </Box>
    </Box>
  );
};
export default AboutContent;
