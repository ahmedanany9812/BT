import { Box } from "@mui/material";
import WorkSection from "../Components/HomeComponents/WorkSection";
import { useEffect, useRef, useState } from "react";
import UseWindowSize from "../Utilities/WindowSize";
import HeadSection from "../Components/HomeComponents/HeadSection";
import Footer from "../Components/HomeComponents/Footer";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import FootLine from "../Components/Global/FootLine";
import { useLocation } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger);
function Home() {
  const ScrollContainer = useRef();
  const Size = UseWindowSize();
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
        (SkewConfigs.current.current - SkewConfigs.current.previous) *
        SkewConfigs.current.ease;
      SkewConfigs.current.rounded =
        Math.round(SkewConfigs.current.previous * 100) / 100;
      const Diff = SkewConfigs.current.current - SkewConfigs.current.rounded;
      const acce = Diff / Size.width;
      const Velocity = +acce;
      const skew = Velocity * 7.5;

      if (ScrollContainer.current && Size.width >= 600) {
        ScrollContainer.current.style.transform = `translateY(-${SkewConfigs.current.rounded}px) skewY(${skew}deg)`;
      } else if (ScrollContainer.current) {
        ScrollContainer.current.style.transform = `none`;
      }
      requestRef = requestAnimationFrame(SkewScrolling);
    };

    requestRef = requestAnimationFrame(SkewScrolling);
    return () => cancelAnimationFrame(requestRef);
  }, [Size.width]);
  useEffect(() => {
    const lines = gsap.utils.toArray(".line");
    const ctx = gsap.context(() => {
      gsap.from(document.querySelectorAll(".HeadTrr"), {
        yPercent: 150,
        duration: 1.5,
        ease: "expo.inOut",
      });
    });
    lines.forEach((box) => {
      const tl = gsap.timeline();
      tl.from(box, {
        width: 0,
        duration: 1,
      });
      ScrollTrigger.create({
        animation: tl,
        trigger: box,
        start: "top 100%",
      });
    });
    return () => ctx.revert();
  }, []);
  return (
    <Box
      ref={ScrollContainer}
      sx={{
        display: "flex",
        flexDirection: "column",
        paddingBottom: "2rem",
      }}
    >
      <HeadSection />
      <WorkSection />
      <Footer innerHeight={innerHeight} />
      <FootLine innerHeight={innerHeight} />
    </Box>
  );
}

export default Home;
