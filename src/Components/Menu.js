import { Box, Container, Stack } from "@mui/material";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { CloseMenuList } from "../NavSlice";
import { CustomTheme } from "../Utilities/Theme";
const Menu = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const fonts = CustomTheme.fonts;
  const dispatch = useDispatch();
  return (
    <Box
      position={"fixed"}
      top="0"
      left={"0"}
      bottom={0}
      sx={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "black",
        zIndex: 1,
      }}
    >
      <Container sx={{ width: "100%", height: "100%" }}>
        <Stack
          direction={"column"}
          width="100%"
          height={"100%"}
          paddingTop={{ xs: "8rem", sm: "12rem" }}
          paddingBottom={{ xs: "6rem", sm: "3rem" }}
        >
          <Stack direction={"column"}>
            <Stack
              direction={"row"}
              alignItems="center"
              component={"div"}
              onClick={async () => {
                if (pathname === "/") {
                  return null;
                }
                await navigate("/", { replace: true });
                dispatch(CloseMenuList());
              }}
            >
              <Box
                component={"p"}
                fontFamily={fonts.font5}
                fontWeight={500}
                fontSize={{ xs: "42px", sm: "60px" }}
                color={"white"}
                minWidth={{ xs: "85px", sm: "120px" }}
              >
                00
              </Box>
              <Box
                component={"p"}
                fontFamily={fonts.font5}
                fontWeight={500}
                fontSize={{ xs: "42px", sm: "60px" }}
                color={"white"}
              >
                Home
              </Box>
            </Stack>
            <Stack direction={"row"} alignItems="center">
              <Box
                component={"p"}
                fontFamily={fonts.font5}
                fontWeight={500}
                fontSize={{ xs: "42px", sm: "60px" }}
                color={"white"}
                minWidth={{ xs: "85px", sm: "120px" }}
              >
                01
              </Box>
              <Box
                component={"p"}
                fontFamily={fonts.font5}
                fontWeight={500}
                fontSize={{ xs: "42px", sm: "60px" }}
                color={"white"}
              >
                Resume
              </Box>
            </Stack>
          </Stack>
          <Stack
            direction={"row"}
            marginTop="auto"
            alignItems={"flex-end"}
            justifyContent="space-between"
          >
            <Stack direction={"column"} spacing="11px">
              <Box
                component={"p"}
                fontFamily={fonts.font5}
                fontWeight={500}
                fontSize={{ xs: "14px", sm: "22px" }}
                color={"white"}
              >
                Github
              </Box>
              <Box
                component={"p"}
                fontFamily={fonts.font5}
                fontWeight={500}
                fontSize={{ xs: "14px", sm: "22px" }}
                color={"white"}
              >
                Linked In
              </Box>
              <Box
                component={"p"}
                fontFamily={fonts.font5}
                fontWeight={500}
                fontSize={{ xs: "14px", sm: "22px" }}
                color={"white"}
              >
                Discord
                <Box component={"span"} fontWeight={300} sx={{ opacity: 0.5 }}>
                  BigTunaytr#1519
                </Box>
              </Box>
            </Stack>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              alignItems={{ xs: "flex-end", sm: "center" }}
              spacing={{ xs: "11px", sm: "33px" }}
            >
              <Box
                component={"p"}
                fontFamily={fonts.font5}
                fontWeight={500}
                fontSize={{ xs: "13px", sm: "22px" }}
                color={"white"}
                sx={{ whiteSpace: "nowrap" }}
              >
                +(20) 1203 951 753
              </Box>
              <Box
                component={"p"}
                fontFamily={fonts.font5}
                fontWeight={500}
                fontSize={{ xs: "14px", sm: "22px" }}
                color={"white"}
              >
                Email Me
              </Box>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
export default Menu;
