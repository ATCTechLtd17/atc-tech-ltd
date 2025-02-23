/* eslint-disable @typescript-eslint/ban-ts-comment */
import {  useEffect } from "react";

import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import "./index.css";
import lenis from "./smoothScroll";

export const App = () => {
  useEffect(() => {
    //@ts-ignore
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return <RouterProvider router={router} />;
};
