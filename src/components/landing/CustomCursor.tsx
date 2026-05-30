"use client";

import { useEffect } from "react";

export function CustomCursor() {
  useEffect(() => {
    const cur = document.getElementById("cursor");
    const ring = document.getElementById("cursor-ring");
    if (!cur || !ring) return;

    let mx = 0;
    let my = 0;
    let rx = 0;
    let ry = 0;
    let frameId = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      cur.style.left = `${mx}px`;
      cur.style.top = `${my}px`;
    };

    const animRing = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.left = `${rx}px`;
      ring.style.top = `${ry}px`;
      frameId = requestAnimationFrame(animRing);
    };

    document.addEventListener("mousemove", onMove);
    frameId = requestAnimationFrame(animRing);

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <>
      <div id="cursor" className="fixed top-0 left-0 pointer-events-none z-[9999] transform -translate-x-1/2 -translate-y-1/2 rounded-full mix-blend-difference w-2 h-2 bg-white max-lg:hidden" />
      <div id="cursor-ring" className="fixed top-0 left-0 pointer-events-none z-[9999] transform -translate-x-1/2 -translate-y-1/2 rounded-full mix-blend-difference w-10 h-10 border border-white transition-transform duration-200 ease-out max-lg:hidden" />
    </>
  );
}
