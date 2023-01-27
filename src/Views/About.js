import { Box } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import AboutContent from "../Components/AboutComponents/AboutContent";
import FootLine from "../Components/Global/FootLine";
import Header from "../Components/Global/Header";
import useWindowSize from "../Utilities/WindowSize";
const About = () => {
  const ScrollContainer = useRef();
  const Size = useWindowSize();
  const [innerHeight, setInnerHeight] = useState(0);
  useEffect(() => {
    document.body.style.height = `${
      ScrollContainer.current.getBoundingClientRect().height
    }px`;
    setInnerHeight(
      () => ScrollContainer.current.getBoundingClientRect().height
    );
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
    if (Size.width > 800) {
      ScrollContainer.current.style.transform = `translateY(-${SkewConfigs.rounded}px) skewY(${skew}deg)`;
    } else {
      ScrollContainer.current.style.transform = `translateY(-${SkewConfigs.previous}px)`;
    }
    requestAnimationFrame(() => SkewScrolling());
  };
  useEffect(() => {
    requestAnimationFrame(() => SkewScrolling());
  }, []);
  return (
    <Box ref={ScrollContainer} className="Scroll">
      <Header />
      <AboutContent />
      <FootLine innerHeight={innerHeight} />
    </Box>
  );
};
export default About;
