import { Box } from "@mui/material";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import "./Style/app.scss";
import { CustomTheme } from "./Utilities/Theme";
import { LoadingFinishd } from "./LoaderSlice";
import { useDispatch, useSelector } from "react-redux";
import Menu from "./Components/Menu";
import { menu } from "./NavSlice";
const font = CustomTheme.fonts;
function App() {
  const menuOpened = useSelector(menu);
  const [barWidth, setBarWidth] = useState(1);
  const [Precent, setPrecent] = useState("1%");
  const loader = useRef();
  const pages = useRef();
  const item1 = useRef();
  const item2 = useRef();
  const dispatch = useDispatch();
  useEffect(() => {
    if (!menuOpened) {
      return document.body.classList.remove("stop-scrolling");
    }
    if (menuOpened) {
      return document.body.classList.add("stop-scrolling");
    }
  }, [menuOpened]);
  useEffect(() => {
    if (barWidth > 100) {
      const tl = gsap.timeline();
      tl.to([item1.current, item2.current], {
        opacity: "0",
        ease: "ease.in",
        stagger: {
          amount: 0.1,
        },
        onComplete: () => {
          dispatch(LoadingFinishd());
        },
      }).to(loader.current, {
        xPercent: -100,
      });
    } else {
      const id = setInterval(() => {
        setBarWidth((prev) => {
          return prev + 1;
        });
        setPrecent((prev) => {
          return barWidth + "%";
        });
      }, 10);
      return () => clearInterval(id);
    }
  });
  return (
    <Box position={"relative"} overflow="hidden">
      <Menu />
      <Box
        sx={{
          height: "100vh",
          zIndex: "10000",
          width: "100%",
          top: 0,
          flexDirection: "row",
          pointerEvents: "none",
          display: "flex",
          left: 0,
        }}
        position="fixed"
        ref={pages}
        id="pages"
      >
        <Box width={"12.5%"} bgcolor={"black"} height="0%" />
        <Box width={"12.5%"} bgcolor={"black"} height="0%" />
        <Box width={"12.5%"} bgcolor={"black"} height="0%" />
        <Box width={"12.5%"} bgcolor={"black"} height="0%" />
        <Box width={"12.5%"} bgcolor={"black"} height="0%" />
        <Box width={"12.5%"} bgcolor={"black"} height="0%" />
        <Box width={"12.5%"} bgcolor={"black"} height="0%" />
        <Box width={"12.5%"} bgcolor={"black"} height="0%" />
        <Box width={"12.5%"} bgcolor={"black"} height="0%" />
      </Box>
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: "100000",
          backgroundColor: "black",
          width: "100%",
          top: 0,
          flexDirection: "column",
        }}
        position="fixed"
        ref={loader}
      >
        <Box
          ref={item1}
          component={"p"}
          color="white"
          fontFamily={font.font5}
          fontSize="50px"
        >
          {Precent}
        </Box>
        <Box width={"50%"} marginTop="20px" ref={item2}>
          <Box
            width={`${barWidth}%`}
            sx={{ backgroundColor: "white", height: "2px", paddingY: "1px" }}
          />
        </Box>
      </Box>
      <Box width={"100%"} className="headOutlet">
        <Outlet context={[pages]} />
      </Box>
    </Box>
  );
}

export default App;
