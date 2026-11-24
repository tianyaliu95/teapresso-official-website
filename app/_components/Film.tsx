"use client";

import { useEffect, useRef } from "react";

/** The film on the Home page. It starts silently by itself; the player's own controls turn the sound on. */
export default function Film() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const film = ref.current;
    if (!film) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    film.muted = true;
    film.play().catch(() => {});
  }, []);

  return (
    <video
      ref={ref}
      src="/video/six-steps.mp4"
      poster="/images/craft/film-poster.jpg"
      controls
      muted
      loop
      playsInline
      preload="metadata"
      aria-label="Teapresso film: a tea frappe made at the bar, from grinding the leaves to the finished cup"
      style={{ display: "block", width: "100%", height: "auto", aspectRatio: "9 / 16", objectFit: "cover", background: "#111111" }}
    />
  );
}
