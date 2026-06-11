"use client";

import { useLayoutEffect } from "react";

export function InstantScrollToTop() {
  useLayoutEffect(() => {
    const { documentElement: root, body } = document;
    const previousRootBehavior = root.style.scrollBehavior;
    const previousBodyBehavior = body.style.scrollBehavior;

    root.style.scrollBehavior = "auto";
    body.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);

    return () => {
      root.style.scrollBehavior = previousRootBehavior;
      body.style.scrollBehavior = previousBodyBehavior;
    };
  }, []);

  return null;
}
