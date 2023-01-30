import { Box, Container } from "@mui/material";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import "./Style/app.scss";
import TopScroll from "./Utilities/TopScroll";
import useWindowSize from "./Utilities/WindowSize";
function App() {
  const size = useWindowSize();
  useEffect(() => {
    console.log(size.height);
  });
  return (
    <Box
      paddingX={{ xs: "0.1rem", sm: "2rem" }}
      sx={{
        position: {xs:"relative",sm:"fixed"},
        top: 0,
        left: 0,
        height: "100%",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <TopScroll />
      <Container maxWidth="xl">
        <Outlet />
      </Container>
    </Box>
  );
}

export default App;
