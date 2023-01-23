import { Box } from "@mui/material";
import WorkSection from "../Components/WorkSection";
import HeadSection from "../Components/HeadSection";
import SmoothScroll from "../Utilities/SmoothScroll";
function Home() {
  return (
    <Box>
      <SmoothScroll>
        <HeadSection />
        <WorkSection />
      </SmoothScroll>
    </Box>
  );
}

export default Home;
