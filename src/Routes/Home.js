import { Box } from "@mui/material";
import WorkSection from "../Components/WorkSection";
import { Container } from "@mui/system";
import FooterSection from "../Components/FooterSection";
import HeadSection from "../Components/HeadSection";
import AnimatedScrollBar from "../Components/AnimatedScrollBar";
function Home() {
  return (
    <Box position={"relative"} className="hom">
      <AnimatedScrollBar />
      <Container className="maincontainer">
        <HeadSection />
        <WorkSection />
        <FooterSection />
      </Container>
    </Box>
  );
}

export default Home;
