import { Box, Container } from "@mui/material";
import { useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import "./Style/app.scss";
import TopScroll from "./Utilities/TopScroll";
import UseWindowSize from "./Utilities/WindowSize";
function App() {
  const Size = UseWindowSize();
  const AppContainer = useRef();
  useEffect(() => {
    if (Size.width > 800) {
      AppContainer.current.style.position = "fixed";
    } else {
      AppContainer.current.style.position = "relative";
    }
  });
  return (
    <Box position={"relative"} id="App" ref={AppContainer}>
      <TopScroll />
      <Container maxWidth="xl">
        <Outlet />
      </Container>
    </Box>
  );
}

export default App;
