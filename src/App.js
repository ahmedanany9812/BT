import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import "./Style/app.scss";
function App() {
  return (
    <Box position={"relative"} overflow="hidden">
      <Outlet />
    </Box>
  );
}

export default App;
