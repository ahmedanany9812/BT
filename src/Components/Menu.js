import { Box, Button, Container, Stack } from "@mui/material";
import { useDispatch } from "react-redux";
import { CustomTheme } from "../Utilities/Theme";
import { CloseMenuList } from "../NavSlice";
import gsap from "gsap";
import SplitType from "split-type";
const Menu = () => {
  const font = CustomTheme.fonts;
  const dispatch = useDispatch();
  const closemenu = () => {
    const tag1 = document.getElementsByClassName("tag1");
    const tag2 = document.getElementsByClassName("tag2");
    const socialist = document.getElementsByClassName("socialist");
    const tag1Chars = new SplitType(tag1, {
      types: "chars, words",
    });
    const tag2Chars = new SplitType(tag2, {
      types: "chars, words",
    });
    const num1 = document.getElementsByClassName("num1");
    const num2 = document.getElementsByClassName("num2");
    const country = document.getElementsByClassName("country");
    const region = document.getElementsByClassName("region");
    const contacta = document.getElementsByClassName("contacta");
    const Box1 = document.getElementsByClassName("overlay");
    const close = document.getElementsByClassName("closebtn");
    const tl = gsap.timeline();
    tl.to([num1, num2, country, region, contacta], {
      yPercent: -100,
      opacity: 0,
    })
      .to(
        socialist[0].children,
        {
          yPercent: -100,
          opacity: 0,
        },
        "<"
      )
      .to(
        tag1Chars.chars,
        {
          yPercent: -100,
          opacity: 0,
        },
        "<"
      )
      .to(
        tag2Chars.chars,
        {
          yPercent: -100,
          opacity: 0,
        },
        "<"
      )
      .to(
        close,
        {
          opacity: 0,
        },
        "<"
      )
      .to(Box1, {
        xPercent: 100,
        duration: 1,
        onStart: () => dispatch(CloseMenuList()),
      });
  };
  return (
    <Box
      sx={{
        position: "fixed",
        left: 0,
        top: 0,
        width: "100%",
        height: "100vh",
        backgroundColor: "white",
        zIndex: 1000000000,
        overflow: "hidden",
        transform: "translate(100%,0)",
      }}
      className="overlay"
    >
      <Stack
        justifyContent={"flex-end"}
        position="fixed"
        sx={{ top: 0, right: 0 }}
        direction="row"
        spacing={"8px"}
        alignItems="center"
        component="div"
        zIndex={10}
        width="100%"
        className="navi"
      >
        <Box
          component={Button}
          onClick={closemenu}
          sx={{
            ":hover": {
              backgroundColor: "transparent",
            },
            color: "black",
          }}
        >
          <Box
            component={"p"}
            fontFamily={font.font5}
            fontWeight={400}
            fontSize="20px"
            className="closebtn"
            sx={{ opacity: 0 }}
          >
            close
          </Box>
        </Box>
      </Stack>
      <Stack alignItems={"center"} justifyContent="center" height={"100%"}>
        <Container>
          <Stack
            width={"100%"}
            height="100"
            direction={"row"}
            alignItems="center"
            justifyContent={"space-between"}
          >
            <Stack direction={"column"}>
              <Stack direction={"row"} spacing="10px" alignItems={"center"}>
                <Box
                  component={"p"}
                  fontFamily={font.font5}
                  fontWeight={400}
                  fontSize="70px"
                  color={"black"}
                  minWidth="140px"
                  className="num1"
                >
                  01
                </Box>
                <Box
                  component={"p"}
                  fontFamily={font.font5}
                  fontWeight={500}
                  fontSize="70px"
                  color={"black"}
                  className="tag1"
                >
                  Home
                </Box>
              </Stack>
              <Stack direction={"row"} spacing="10px" alignItems={"center"}>
                <Box
                  component={"p"}
                  fontFamily={font.font5}
                  fontWeight={400}
                  fontSize="70px"
                  color={"black"}
                  minWidth="140px"
                  className="num2"
                >
                  02
                </Box>
                <Box
                  component={"p"}
                  fontFamily={font.font5}
                  fontWeight={500}
                  fontSize="70px"
                  color={"black"}
                  className="tag2"
                >
                  Resume
                </Box>
              </Stack>
            </Stack>
            <Stack direction={"column"} spacing="3rem">
              <Stack direction={"column"} spacing="10px">
                <Box
                  component={"p"}
                  fontFamily={font.font5}
                  fontWeight={600}
                  fontSize="20px"
                  color={"black"}
                  className="country"
                >
                  EGYPT
                </Box>
                <Box
                  component={"p"}
                  fontFamily={font.font5}
                  fontWeight={400}
                  fontSize="17px"
                  color={"black"}
                  className="region"
                >
                  El-Garbia -Tanta
                </Box>
              </Stack>
              <Stack direction={"column"} spacing="22px">
                <Box
                  component={"p"}
                  fontFamily={font.font5}
                  fontWeight={600}
                  fontSize="20px"
                  color={"black"}
                  className="contacta"
                >
                  Contact
                </Box>
                <Stack spacing={"1rem"} className="socialist">
                  <Box
                    component={"p"}
                    fontFamily={font.font5}
                    fontWeight={400}
                    fontSize="18px"
                    color={"black"}
                  >
                    +(20) 120 3951 753
                  </Box>
                  <Box
                    component={"p"}
                    fontFamily={font.font5}
                    fontWeight={400}
                    fontSize="18px"
                    color={"black"}
                  >
                    Linked in
                  </Box>
                  <Box
                    component={"p"}
                    fontFamily={font.font5}
                    fontWeight={400}
                    fontSize="18px"
                    color={"black"}
                  >
                    Github
                  </Box>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </Stack>
    </Box>
  );
};
export default Menu;
