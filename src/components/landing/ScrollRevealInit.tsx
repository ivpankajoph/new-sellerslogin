"use client";

import { useEffect } from "react";

function animCounter(
  el: HTMLElement,
  target: number,
  prefix = "",
  suffix = ""
) {
  let start = 0;
  const step = (target / 2000) * 16;
  const interval = setInterval(() => {
    start += step;
    if (start >= target) {
      start = target;
      clearInterval(interval);
    }
    const val = Math.round(start);
    el.textContent =
      (prefix || "") +
      (val > 999 ? val.toLocaleString() : String(val)) +
      (suffix || "");
  }, 16);
}

export function ScrollRevealInit() {
  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          const el = e.target as HTMLElement;
          if (e.isIntersecting && !el.dataset.counted) {
            el.dataset.counted = "1";
            const t = parseInt(el.dataset.target || "0", 10);
            const suffix = el.dataset.suffix || "";
            const prefix = t === 48200 ? "$" : "";
            animCounter(el, t, prefix, suffix);
          }
        });
      },
      { threshold: 0.5 }
    );
    document.querySelectorAll("[data-target]").forEach((el) =>
      counterObserver.observe(el)
    );

    const onScroll = () => {
      const nav = document.getElementById("navbar");
      nav?.classList.toggle("scrolled", window.scrollY > 40);
      const bt = document.getElementById("back-top");
      bt?.classList.toggle("visible", window.scrollY > 400);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => {
      revealObserver.disconnect();
      counterObserver.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return null;
}
