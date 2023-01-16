import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import "./Style/app.scss";
import TopScroll from "./Utilities/TopScroll";
function App() {
  return (
    <Box position={"relative"} overflow="hidden" id="App">
      <TopScroll />
      <Outlet />
    </Box>
  );
}

export default App;
