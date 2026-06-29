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
    const observedRevealElements = new WeakSet<Element>();
    const observedCounterElements = new WeakSet<Element>();

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

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

    const observeRevealElement = (el: Element) => {
      if (observedRevealElements.has(el)) return;
      observedRevealElements.add(el);
      revealObserver.observe(el);

      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add("visible");
      }
    };

    const observeCounterElement = (el: Element) => {
      if (observedCounterElements.has(el)) return;
      observedCounterElements.add(el);
      counterObserver.observe(el);
    };

    const observeMountedContent = (root: ParentNode = document) => {
      root.querySelectorAll(".reveal").forEach(observeRevealElement);
      root.querySelectorAll("[data-target]").forEach(observeCounterElement);
    };

    observeMountedContent();

    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (!(node instanceof Element)) return;

          if (node.matches(".reveal")) observeRevealElement(node);
          if (node.matches("[data-target]")) observeCounterElement(node);
          observeMountedContent(node);
        });
      });
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    const onScroll = () => {
      const nav = document.getElementById("navbar");
      nav?.classList.toggle("scrolled", window.scrollY > 40);
      const bt = document.getElementById("back-top");
      bt?.classList.toggle("visible", window.scrollY > 400);
    };
    const scrollToCurrentHash = () => {
      const hash = window.location.hash;
      if (hash !== "#hero") return;

      requestAnimationFrame(() => {
        document.getElementById("hero")?.scrollIntoView({
          block: "start",
        });
      });
    };

    window.addEventListener("scroll", onScroll);
    window.addEventListener("hashchange", scrollToCurrentHash);
    onScroll();
    scrollToCurrentHash();

    return () => {
      mutationObserver.disconnect();
      revealObserver.disconnect();
      counterObserver.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("hashchange", scrollToCurrentHash);
    };
  }, []);

  return null;
}
