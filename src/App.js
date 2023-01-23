import { Box, Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import "./Style/app.scss";
import TopScroll from "./Utilities/TopScroll";
function App() {
  return (
    <Box position={"relative"} id="App">
      {/* <TopScroll /> */}
      <Container maxWidth="xl">
        <Outlet />
      </Container>
    </Box>
  );
}

export default App;
