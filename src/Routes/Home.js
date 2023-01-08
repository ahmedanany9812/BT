import { Box } from "@mui/material";
import WorkSection from "../Components/WorkSection";
import { Container } from "@mui/system";
import FooterSection from "../Components/FooterSection";
import HeadSection from "../Components/HeadSection";
import AnimatedScrollBar from "../Components/AnimatedScrollBar";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
function Home() {
  const HomeContainer = useRef();
  useEffect(() => {
    const sections = document.querySelectorAll(".panel");
    const scrolling = {
      enabled: true,
      events: "scroll,wheel,touchmove,pointermove".split(","),
      prevent: (e) => e.preventDefault(),
      disable() {
        if (scrolling.enabled) {
          scrolling.enabled = false;
          window.addEventListener("scroll", gsap.ticker.tick, {
            passive: true,
          });
          scrolling.events.forEach((e, i) =>
            (i ? document : window).addEventListener(e, scrolling.prevent, {
              passive: false,
            })
          );
        }
      },
      enable() {
        if (!scrolling.enabled) {
          scrolling.enabled = true;
          window.removeEventListener("scroll", gsap.ticker.tick);
          scrolling.events.forEach((e, i) =>
            (i ? document : window).removeEventListener(e, scrolling.prevent)
          );
        }
      },
    };

    function goToSection(section) {
      if (scrolling.enabled) {
        // skip if a scroll tween is in progress
        scrolling.disable();
        gsap.to(window, {
          scrollTo: { y: section, autoKill: false },
          onComplete: scrolling.enable,
          duration: 1.4,
        });
      }
    }
    const crx = gsap.context(() => {
      sections.forEach((section, i) => {
        ScrollTrigger.create({
          trigger: section,
          start: "top bottom-=1",
          end: "bottom top+=1",
          onEnter: () => goToSection(section),
          onEnterBack: () => goToSection(section),
        });
      });
    }, HomeContainer);
    return () => crx.revert();
  });
  return (
    <Box position={"relative"} ref={HomeContainer}>
      <AnimatedScrollBar />
      <Container>
        <HeadSection />
        <WorkSection />
        <FooterSection />
      </Container>
    </Box>
  );
}

export default Home;
