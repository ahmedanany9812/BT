import { Box, Button, Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { CloseMenuList, menu, OpenMenuList } from "../NavSlice";
import { CustomTheme } from "../Utilities/Theme";
const Header = () => {
  const font = CustomTheme.fonts;
  const dispatch = useDispatch();
  const menuOpened = useSelector(menu);
  return (
    <Stack
      justifyContent={"space-between"}
      position="fixed"
      sx={{ top: 0, right: 0, zIndex: 10 }}
      direction="row"
      spacing={"8px"}
      alignItems="center"
      component="div"
      width="100%"
      className="navi"
      id="navi"
    >
      <Box
        component={"p"}
        fontFamily={font.font5}
        fontWeight={700}
        fontSize="40px"
        color={menuOpened ? "white" : "black"}
      >
        BT.
      </Box>
      <Box
        component={Button}
        id="menu"
        sx={{
          ":hover": {
            backgroundColor: "transparent",
          },
          color: "black",
        }}
        onClick={() => {
          menuOpened ? dispatch(CloseMenuList()) : dispatch(OpenMenuList());
        }}
      >
        <Box
          component={"p"}
          fontFamily={font.font5}
          fontWeight={400}
          fontSize="20px"
          color={menuOpened ? "white" : "black"}
        >
          menu
        </Box>
      </Box>
    </Stack>
  );
};
export default Header;
