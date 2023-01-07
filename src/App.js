import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import TopScroll from "./Components/TopScroll";
import "./Style/app.scss";
import { menu } from "./NavSlice";
import { useEffect } from "react";
import Header from "./Components/Header";
import Menu from "./Components/Menu";
import Loader from "./Components/Loader";
function App() {
  const menuOpened = useSelector(menu);
  useEffect(() => {
    menuOpened
      ? document.body.classList.add("stop-scrolling")
      : document.body.classList.remove("stop-scrolling");
  }, [menuOpened]);
  return (
    <Box position={"relative"} overflow="hidden">
      <TopScroll />
      <Header />
      {menuOpened && <Menu />}
      <Outlet />
    </Box>
  );
}

export default App;
