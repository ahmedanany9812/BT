import { Box } from "@mui/material";
import WorkSection from "../Components/WorkSection";
import { useEffect, useRef } from "react";
import UseWindowSize from "../Utilities/WindowSize";
import HeadSection from "../Components/HeadSection";
function Home() {
  const ScrollContainer = useRef();
  const Size = UseWindowSize();
  useEffect(() => {
    document.body.style.height = `${
      ScrollContainer.current.getBoundingClientRect().height
    }px`;
  }, [Size.height]);
  const SkewConfigs = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0,
  };
  const SkewScrolling = () => {
    SkewConfigs.current = window.scrollY;
    SkewConfigs.previous +=
      (SkewConfigs.current - SkewConfigs.previous) * SkewConfigs.ease;
    SkewConfigs.rounded = Math.round(SkewConfigs.previous * 100) / 100;
    const Diff = SkewConfigs.current - SkewConfigs.rounded;
    const acce = Diff / Size.width;
    const Velocity = +acce;
    const skew = Velocity * 7.5;
    ScrollContainer.current.style.transform = `translateY(-${SkewConfigs.rounded}px) skewY(${skew}deg)`;
    requestAnimationFrame(() => SkewScrolling());
  };
  useEffect(() => {
    requestAnimationFrame(() => SkewScrolling());
  });
  return (
    <Box ref={ScrollContainer} className="Scroll">
      <HeadSection />
      <WorkSection />
    </Box>
  );
}

export default Home;
