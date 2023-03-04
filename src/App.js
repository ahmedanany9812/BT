import { Box, Container } from "@mui/material";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
// import Cursor from "./Components/Global/Cursor";
import Loading from "./Components/Global/Loading";
import { loaded } from "./LoaderSlice";
import "./Style/app.scss";
import TopScroll from "./Utilities/TopScroll";
function App() {
  const loading = useSelector(loaded);
  return (
    <Box
      position={{ xs: "relative", sm: "fixed" }}
      id="App"
      paddingX={{ xs: "0.1rem", sm: "2rem" }}
    >
      <TopScroll />
      {loading ? (
        <Container maxWidth="xl">
          {/* <Cursor/> */}
          <Outlet />
        </Container>
      ) : (
        <Loading />
      )}
    </Box>
  );
}
export default App;
