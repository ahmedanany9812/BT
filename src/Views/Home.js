import { Box } from "@mui/material";
import WorkSection from "../Components/HomeComponents/WorkSection";
import { useEffect, useRef, useState } from "react";
import UseWindowSize from "../Utilities/WindowSize";
import HeadSection from "../Components/HomeComponents/HeadSection";
import Footer from "../Components/HomeComponents/Footer";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import FootLine from "../Components/Global/FootLine";
gsap.registerPlugin(ScrollTrigger);
function Home() {
  const ScrollContainer = useRef();
  const Size = UseWindowSize();
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
    }
    requestAnimationFrame(() => SkewScrolling());
  };
  useEffect(() => {
    requestAnimationFrame(() => SkewScrolling());
  }, []);
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
        duration: 1.5,
        ease: "expo.inOut",
      });
      ScrollTrigger.create({
        animation: tl,
        trigger: box,
        start: "top 95%",
      });
    });
    return () => ctx.revert();
  }, []);
  return (
    <Box ref={ScrollContainer}>
      <HeadSection />
      <WorkSection />
      <Footer innerHeight={innerHeight} />
      <FootLine innerHeight={innerHeight} />
    </Box>
  );
}

export default Home;
