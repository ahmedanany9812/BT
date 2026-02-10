import { Box, Stack } from "@mui/material";
import gsap from "gsap";
import { useEffect } from "react";
import { CustomTheme } from "../../Utilities/Theme";

const AboutContent = () => {
  const { fonts } = CustomTheme;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".boutag", {
        yPercent: 120,
        opacity: 0,
        ease: "expo.out",
        duration: 1.5,
      });

      gsap.from(".about-section", {
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "power2.out",
        delay: 0.6,
      });
    });
    return () => ctx.revert();
  }, []);

  const cursoron = () => {
    var cursor = document.querySelector(".corsa");
    var cursorinner = document.querySelector(".corsadot");
    cursor?.classList.add("click");
    cursor?.classList.add("cursorLinkoutterhover");
    cursorinner?.classList.add("cursorLinkinnerhover");
  };

  const cursorout = () => {
    var cursor = document.querySelector(".corsa");
    var cursorinner = document.querySelector(".corsadot");
    cursor?.classList.remove("click");
    cursor?.classList.remove("cursorLinkoutterhover");
    cursorinner?.classList.remove("cursorLinkinnerhover");
  };

  return (
    <Box marginTop={{ xs: "4rem", sm: "5rem" }} maxWidth="900px">
      {/* Hero */}
      <Box overflow="hidden" marginBottom={{ xs: "3rem", sm: "5rem" }}>
        <Box
          className="boutag"
          fontSize={{ xs: "15vw", sm: "12vw" }}
          fontFamily={fonts.font5}
          fontWeight={400}
          letterSpacing={{ sm: "-8px", xs: "-3px" }}
          lineHeight={1}
        >
          Hola.
        </Box>
      </Box>

      <Stack spacing={{ xs: 4, sm: 5 }}>
        {/* Intro */}
        <Box className="about-section">
          <Box
            fontSize={{ xs: "1.8rem", sm: "2.5rem" }}
            fontFamily={fonts.font5}
            lineHeight={1.2}
            color="white"
            marginBottom="1.5rem"
          >
            Ahmed Anany
          </Box>
          <Box
            fontSize={{ xs: "1.1rem", sm: "1.3rem" }}
            fontFamily={fonts.hom}
            lineHeight={1.5}
            color="rgba(255,255,255,0.6)"
          >
            Full Stack Developer
          </Box>
        </Box>

        {/* Bio */}
        <Box className="about-section">
          <Box
            component="p"
            fontFamily={fonts.hom}
            fontSize={{ xs: "1rem", sm: "1.05rem" }}
            color="rgba(255,255,255,0.75)"
            lineHeight={1.8}
            margin={0}
          >
            Versatile Full Stack Developer with over 3 years of experience building and 
            optimizing scalable web applications. I specialize in bridging legacy and modern 
            architectures, with deep expertise in the .NET Ecosystem and JavaScript frameworks.
            <br /><br />
            Currently working at CIHOST, where I maintain high-traffic hotel management systems 
            and develop modern frontend interfaces with Angular. I have a proven track record in 
            API integration, database management, and driving system modernization for the 
            hospitality and recruitment sectors.
            <br /><br />
            I graduated with a Bachelor of Science in Data and Computer Science from Tanta 
            University in 2024.
          </Box>
        </Box>

        {/* Tech Stack */}
        <Box className="about-section">
          <Box
            fontFamily={fonts.hom}
            fontSize="0.85rem"
            letterSpacing="2px"
            color="rgba(255,255,255,0.4)"
            textTransform="uppercase"
            marginBottom="1rem"
          >
            Technologies
          </Box>
          <Box
            fontFamily={fonts.hom}
            fontSize="1rem"
            color="rgba(255,255,255,0.65)"
            lineHeight={1.8}
          >
            C# • TypeScript • JavaScript (ES6+) • SQL • Angular (v11–v20) • Next.js • React • 
            .NET Core • ASP.NET MVC • Node.js • NestJS • Entity Framework • SQL Server • 
            MongoDB • PostgreSQL • Socket.io • Tailwind CSS • Git • Docker • Linux
          </Box>
        </Box>

        {/* Experience Highlight */}
        <Box className="about-section">
          <Box
            fontFamily={fonts.hom}
            fontSize="0.85rem"
            letterSpacing="2px"
            color="rgba(255,255,255,0.4)"
            textTransform="uppercase"
            marginBottom="1rem"
          >
            Key Experience
          </Box>
          <Box
            fontFamily={fonts.hom}
            fontSize="1rem"
            color="rgba(255,255,255,0.65)"
            lineHeight={1.8}
          >
            Software Developer at CIHOST • Next.js Developer at Infotech-Global • API 
            Integration with Protel Air • E-Invoice Automation for Egypt's Tax Authority • 
            Flight Booking Platforms • Hotel Management Systems
          </Box>
        </Box>

        {/* Contact */}
        <Box className="about-section">
          <Box
            fontFamily={fonts.hom}
            fontSize="0.85rem"
            letterSpacing="2px"
            color="rgba(255,255,255,0.4)"
            textTransform="uppercase"
            marginBottom="1rem"
          >
            Get in Touch
          </Box>
          <Stack spacing={1.5}>
            <Box
              component="a"
              href="https://wa.link/gto20p"
              target="_blank"
              onMouseEnter={cursoron}
              onMouseLeave={cursorout}
              fontFamily={fonts.hom}
              fontSize="1.05rem"
              color="#Fe6601"
              sx={{ 
                textDecoration: "none",
                transition: "0.3s",
                "&:hover": { color: "white" }
              }}
            >
              +(20) 122 3502 118
            </Box>
            <Box
              component="a"
              href="https://www.linkedin.com/in/ahm-anany/"
              target="_blank"
              onMouseEnter={cursoron}
              onMouseLeave={cursorout}
              fontFamily={fonts.hom}
              fontSize="1.05rem"
              color="rgba(255,255,255,0.55)"
              sx={{ 
                textDecoration: "none",
                transition: "0.3s",
                "&:hover": { color: "#Fe6601" }
              }}
            >
              LinkedIn
            </Box>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default AboutContent;
