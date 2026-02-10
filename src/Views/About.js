import { Box } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import AboutContent from "../Components/AboutComponents/AboutContent";
import FootLine from "../Components/Global/FootLine";
import Header from "../Components/Global/Header";
import useWindowSize from "../Utilities/WindowSize";
import { useLocation } from "react-router-dom";
const About = () => {
  const ScrollContainer = useRef();
  const Size = useWindowSize();
  const location = useLocation();
  const [innerHeight, setInnerHeight] = useState(0);
  useEffect(() => {
    if (!ScrollContainer.current) return;
    
    const updateHeight = () => {
      const height = ScrollContainer.current.scrollHeight;
      document.body.style.height = `${height}px`;
      setInnerHeight(height);
    };

    const resizeObserver = new ResizeObserver(updateHeight);
    resizeObserver.observe(ScrollContainer.current);
    
    updateHeight();
    return () => resizeObserver.disconnect();
  }, [location.pathname]);
  const SkewConfigs = useRef({
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0,
  });

  useEffect(() => {
    let requestRef;
    const SkewScrolling = () => {
      SkewConfigs.current.current = window.scrollY;
      SkewConfigs.current.previous +=
        (SkewConfigs.current.current - SkewConfigs.current.previous) * SkewConfigs.current.ease;
      SkewConfigs.current.rounded = Math.round(SkewConfigs.current.previous * 100) / 100;
      
      if (ScrollContainer.current && Size.width >= 600) {
        ScrollContainer.current.style.transform = `translateY(-${SkewConfigs.current.rounded}px)`;
      } else if (ScrollContainer.current) {
        ScrollContainer.current.style.transform = `none`;
      }
      requestRef = requestAnimationFrame(SkewScrolling);
    };
    
    requestRef = requestAnimationFrame(SkewScrolling);
    return () => cancelAnimationFrame(requestRef);
  }, [Size.width]);
  return (
    <Box
      ref={ScrollContainer}
      className="Scroll"
      sx={{
        display: "flex",
        flexDirection: "column",
        paddingBottom: "2rem",
      }}
    >
      <Header />
      <AboutContent />
      <FootLine innerHeight={innerHeight} />
    </Box>
  );
};
export default About;
