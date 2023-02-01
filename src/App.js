import { Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import "./Style/app.scss";
import TopScroll from "./Utilities/TopScroll";
function App() {
  return (
    <Box
      position={{ xs: "relative", sm: "fixed" }}
      id="App"
      paddingX={{ xs: "0.1rem", sm: "2rem" }}
    >
      <TopScroll />
      <Container maxWidth="xl">
        <Outlet />
      </Container>
    </Box>
  );
}

export default App;
