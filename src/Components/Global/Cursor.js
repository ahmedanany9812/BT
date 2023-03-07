import { Box } from "@mui/material";
import { useEffect } from "react";
const Cursor = () => {
  useEffect(() => {
    var cursor = document.querySelector(".corsa");
    var cursorinner = document.querySelector(".corsadot");
    document.addEventListener("mousemove", function (e) {
      cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
    });

    document.addEventListener("mousemove", function (e) {
      var x = e.clientX;
      var y = e.clientY;
      cursorinner.style.left = x + "px";
      cursorinner.style.top = y + "px";
    });

    document.addEventListener("mousedown", function () {
      cursor.classList.add("click");
      cursorinner.classList.add("cursorinnerhover");
    });
    document.addEventListener("mousedown", function () {
      cursor.classList.add("click");
      cursor.classList.add("cursoroutterhover");
    });

    document.addEventListener("mouseup", function () {
      cursor.classList.remove("click");
      cursorinner.classList.remove("cursorinnerhover");
    });

    document.addEventListener("mouseup", function () {
      cursor.classList.remove("click");
      cursor.classList.remove("cursoroutterhover");
    });
    document.addEventListener("mouseleave", () => {
      cursor.classList.add("cursorLeave");
      cursorinner.classList.add("cursorLeave");
    });
    document.addEventListener("mouseenter", () => {
      cursor.classList.remove("cursorLeave");
      cursorinner.classList.remove("cursorLeave");
    });
  });
  return (
    <>
      <Box className="corsa" />
      <Box className="corsadot" />
    </>
  );
};
export default Cursor;
