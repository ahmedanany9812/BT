import { Box } from "@mui/material";
import Header from "../Components/Header";
import WorkSection from "../Components/WorkSection";
import { Container } from "@mui/system";
import FooterSection from "../Components/FooterSection";
import HeadSection from "../Components/HeadSection";
import { menu } from "../NavSlice";
import { useSelector } from "react-redux";
import Menu from "../Components/Menu";
function Home() {
  const menuOpened = useSelector(menu);
  return (
    <Box position={"relative"} className="hom">
      {menuOpened && <Menu />}
      <Header />
      <Box>
        <Container className="maincontainer">
          <HeadSection />
          <WorkSection />
          <FooterSection />
        </Container>
      </Box>
    </Box>
  );
}

export default Home;
