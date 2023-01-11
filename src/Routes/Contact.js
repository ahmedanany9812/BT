import { Box, Container, Stack } from "@mui/material";
import { CustomTheme } from "../Utilities/Theme";
const Contact = () => {
  const { fonts } = CustomTheme;
  return (
    <Container maxWidth="xl">
      <Box
        height={"100vh"}
        padding={{ xs: "1rem", md: "3rem" }}
        overflow="scroll"
      >
        <Box component={"header"} height={{ xs: "17%", md: "20%" }}>
          <Box
            component={"p"}
            letterSpacing="5px"
            fontSize={"15px"}
            fontFamily={fonts.hom}
            fontWeight={300}
          >
            HOME
          </Box>
        </Box>
        <Container>
          <Stack direction={"column"} alignItems="flex-start" spacing="3rem">
            <Box
              component={"p"}
              fontWeight={300}
              fontFamily={fonts.font5}
              fontSize={{ xs: "11vw", md: "11vw" }}
              letterSpacing={{ xs: "-1px", md: "-5px" }}
            >
              HEY!
            </Box>
            <Stack maxWidth={{ xs: "98%", md: "40%" }} spacing="30px">
              <Box
                component={"p"}
                fontWeight={400}
                fontFamily={fonts.hom}
                fontSize="14px"
                lineHeight={"1.9em"}
                letterSpacing="0.5px"
              >
                If you got something up your mind i can help you with feel free
                to say hi {" "}
                <Box component={"span"} position="relative" overflow={"hidden"}>
                  ahmedenany9812@gmail.com{" "}
                  <Box
                    position={"absolute"}
                    sx={{
                      top: "100%",
                      backgroundColor: "white",
                      height: "1px",
                      width: "100%",
                      left: 0,
                    }}
                  />
                </Box>
                <br />
                Or just give me A call{" "}
                <Box component={"span"} position="relative">
                  +(20) 120 3951 753
                  <Box
                    position={"absolute"}
                    sx={{
                      top: "100%",
                      backgroundColor: "white",
                      height: "1px",
                      width: "100%",
                      left: 0,
                    }}
                  />
                </Box>
              </Box>
              <Stack direction={"column"}>
                <Box
                  component={"p"}
                  fontWeight={500}
                  fontFamily={fonts.hom}
                  fontSize="12px"
                  lineHeight={"1.9em"}
                  letterSpacing="0.5px"
                >
                  TWITTER
                </Box>
                <Box
                  component={"p"}
                  fontWeight={500}
                  fontFamily={fonts.hom}
                  fontSize="12px"
                  lineHeight={"1.9em"}
                  letterSpacing="0.5px"
                >
                  FACEBOOK
                </Box>
                <Box
                  component={"p"}
                  fontWeight={500}
                  fontFamily={fonts.hom}
                  fontSize="12px"
                  lineHeight={"1.9em"}
                  letterSpacing="0.5px"
                >
                  LINKED IN
                </Box>
                <Box
                  component={"p"}
                  fontWeight={500}
                  fontFamily={fonts.hom}
                  fontSize="12px"
                  lineHeight={"1.9em"}
                  letterSpacing="0.5px"
                >
                  GITHUB
                </Box>
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Container>
  );
};
export default Contact;
