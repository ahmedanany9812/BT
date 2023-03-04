// import { Box } from "@mui/material";
// import { useEffect, useRef, useState } from "react";
// const Cursor = () => {
//   const [coords, setcoords] = useState({
//     x: 0,
//     y: 0,
//   });
//   const AnimateCircles = () => {
//     let x = coords.x;
//     let y = coords.y;
//     const circles = document.querySelectorAll(".corsa");
//     circles.forEach(function (circle, index) {
//       circle.style.left = x - 12 + "px";
//       circle.style.top = y - 12 + "px";
//       circle.style.scale = (circles.length - index) / circles.length;
//       circle.x = x;
//       circle.y = y;
//       const nextCircle = circles[index + 1] || circles[0];
//       x += (nextCircle.x - x) * 0.3;
//       y += (nextCircle.y - y) * 0.3;
//     });

//     requestAnimationFrame(AnimateCircles);
//   };
//   useEffect(() => {
//     requestAnimationFrame(AnimateCircles);
//   });
//   useEffect(() => {
//     window.addEventListener("mousemove", (e) => {
//       setcoords((prev) => {
//         return { x: e.clientX, y: e.clientY };
//       });
//     });
//   });
//   return (
//     <>
//       <Box className="corsa" />
//       <Box className="corsa" />
//       <Box className="corsa" />
//       <Box className="corsa" />
//       <Box className="corsa" />
//       <Box className="corsa" />
//       <Box className="corsa" />
//       <Box className="corsa" />
//       <Box className="corsa" />
//       <Box className="corsa" />
//       <Box className="corsa" />
//       <Box className="corsa" />
//       <Box className="corsa" />
//       <Box className="corsa" />
//       <Box className="corsa" />
//       <Box className="corsa" />
//       <Box className="corsa" />
//     </>
//   );
// };
// export default Cursor;
