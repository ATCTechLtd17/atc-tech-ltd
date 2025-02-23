/* eslint-disable @typescript-eslint/ban-ts-comment */
import Lenis from "@studio-freight/lenis";

const lenis = new Lenis();
//@ts-ignore
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

export default lenis;