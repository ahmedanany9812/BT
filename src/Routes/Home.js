import { Box } from "@mui/material";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { loaded } from "../LoaderSlice";
import { useSelector } from "react-redux";
import Header from "../Components/Header";
import { useEffect, useLayoutEffect } from "react";
import SplitType from "split-type";
import WorkSection from "../Components/WorkSection";
import { Container } from "@mui/system";
import ScrollBar from "../Components/ScrollBar";
import FooterSection from "../Components/FooterSection";
import HeadSection from "../Components/HeadSection";
import ScrollToPlugin from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
function Home() {
  const completed = useSelector(loaded);
  useLayoutEffect(() => {
    let logoitem = document.getElementById("logo");
    let icon = document.getElementById("menu");
    const logo = new SplitType(logoitem, { types: "chars" });
    if (completed) {
      const tl = gsap.timeline();
      tl.from(logo.chars, {
        yPercent: 50,
        autoAlpha: 0,
        stagger: {
          from: "edges",
          amount: 0.6,
          ease: "power2",
        },
        delay: 0.5,
      }).from(icon, {
        xPercent: 100,
        autoAlpha: 0,
      });
    }
  });
  useLayoutEffect(() => {
    let word1 = document.getElementsByClassName("heada");
    if (completed) {
      const tl1 = gsap.timeline();
      tl1.from(word1, {
        xPercent: -100,
        autoAlpha: 0,
      });
    }
  });
  useEffect(() => {
    const tl2 = gsap.timeline();
    ScrollTrigger.create({
      animation: tl2,
      trigger: document.getElementsByClassName("maincontainer"),
      scrub: 1,
      start: "0% 0%",
      end: "bottom bottom",
    });
    let word1 = document.getElementsByClassName("heada");
    let hand = document.getElementsByClassName("handsoff");
    const word1split = new SplitType(word1, { types: "chars, words" });
    tl2
      .to(word1split.words, {
        yPercent: -100,
        autoAlpha: 0,
        stagger: {
          from: "random",
          amount: 0.2,
        },
      })
      .to(
        hand,
        {
          autoAlpha: 0,
          yPercent: 100,
        },
        "<"
      );
  });
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    // this scrolling object just allows us to conveniently call scrolling.enable(), scrolling.disable(), and check if scrolling.enabled is true.
    // some browsers (like iOS Safari) handle scrolling on a separate thread and can cause things to get out of sync (jitter/jumpy), so when we're animating the scroll position, force an update of GSAP tweens when there's a scroll event in order to maintain synchronization)
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

    function goToSection(section, anim, i) {
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
    sections.forEach((section, i) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top bottom-=1",
        end: "bottom top+=1",
        onEnter: () => goToSection(section),
        onEnterBack: () => goToSection(section),
      });
    });
  });
  return (
    <Box position={"relative"} className="hom">
      <ScrollBar />
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
