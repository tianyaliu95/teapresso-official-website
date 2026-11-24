"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { PointerEvent } from "react";
import Link from "next/link";

// One drink stands for each series. The ring has twice as many places as there are series,
// so every series stands on it twice, opposite itself, and the disc always looks full.
// shown: the name of the drink in the photo. Leave it empty and the line hides.
const SERIES = [
  { series: "Tea Latte", desc: "Whole-leaf tea, extracted by the cup, with fresh milk.", shown: "Jasmine Snow Tea Latte", img: "/images/cups/snow-cup.webp" },
  { series: "Matcha", desc: "Uji matcha with milk, in every Teapresso shop: with strawberry, mango and coconut, ube, or over brown sugar boba.", shown: "Strawberry Matcha Latte", img: "/images/cups/strawberry-matcha.webp" },
  { series: "Tea Frappe", desc: "Extracted tea and fresh milk, finished with a cream top.", shown: "Strawberry Peach Tea Frappe", img: "/images/cups/summer-frappe.webp" },
  { series: "Brown Sugar Boba", desc: "Brown sugar boba with fresh milk.", shown: "Ube Brown Sugar Milk Boba", img: "/images/cups/ube-boba.webp" },
  { series: "Yoghurt Smoothie", desc: "Natural yoghurt blended with fruit, served in a can.", shown: "Earth Yoghurt Smoothie", img: "/images/cups/yogurt-can.webp" },
  { series: "Iced Lemon Tea", desc: "Tea and lemon over ice.", shown: "", img: "/images/cups/lemon-tea.webp" },
  { series: "Coffee", desc: "A medium-roast blend, ground fresh. Classic and signature lattes, hot or cold.", shown: "", img: "/images/cups/coffee-large.webp" },
];

const N = SERIES.length; // series
const SLOTS = N * 2; // places on the ring
const TURN_EVERY_MS = 4200;
const REST_AFTER_TOUCH_MS = 9000;

const pad = (n: number) => String(n).padStart(2, "0");

const BUTTON = {
  display: "inline-flex",
  alignItems: "center",
  minHeight: "48px",
  fontFamily: "var(--font-jost), sans-serif",
  fontWeight: "500",
  fontSize: "12px",
  letterSpacing: "0.18em",
  textTransform: "uppercase",
} as const;

/** The rotating menu on the Home page. Styles live in globals.css under ".tp-". */
export default function Turntable() {
  // step counts turns of one place on the ring; it is never wrapped, so the disc always takes the short way round.
  const [step, setStep] = useState(0);
  const hover = useRef(false);
  const touched = useRef(0);
  const swiped = useRef(0);
  const start = useRef<{ x: number; y: number } | null>(null);

  const go = useCallback((delta: number) => {
    touched.current = Date.now();
    setStep((s) => s + delta);
  }, []);

  // Turn by itself every few seconds, unless someone is using it or prefers no motion.
  useEffect(() => {
    const timer = setInterval(() => {
      if (hover.current) return;
      if (document.hidden) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      if (Date.now() - touched.current < REST_AFTER_TOUCH_MS) return;
      setStep((s) => s + 1);
    }, TURN_EVERY_MS);
    return () => clearInterval(timer);
  }, []);

  const slot = ((step % SLOTS) + SLOTS) % SLOTS;
  const active = slot % N;

  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    start.current = { x: e.clientX, y: e.clientY };
  };
  const onPointerUp = (e: PointerEvent<HTMLDivElement>) => {
    if (!start.current) return;
    const dx = e.clientX - start.current.x;
    const dy = e.clientY - start.current.y;
    start.current = null;
    if (Math.abs(dx) > 44 && Math.abs(dx) > Math.abs(dy) * 1.2) {
      swiped.current = Date.now();
      go(dx < 0 ? 1 : -1);
    }
  };

  return (
    <section
      className="tp-hero"
      aria-label="Drink series"
      onMouseEnter={() => {
        hover.current = true;
      }}
      onMouseLeave={() => {
        hover.current = false;
      }}
    >
      <div className="tp-heroin">
        <div className="tp-toprow">
          <h1 className="tp-label">Teapresso — Modern Beverage Shop</h1>
          <p className="tp-label tp-hint">Tap a cup or swipe to turn</p>
        </div>
        <div className="tp-copy">
          {/* The text on the left: one block per series, only the one in front is shown. */}
          <div className="tp-names" aria-live="polite">
            {SERIES.map((d, i) => {
              const on = i === active;
              return (
                <div
                  key={d.series}
                  className="tp-name"
                  aria-hidden={!on}
                  style={{ opacity: on ? 1 : 0, visibility: on ? "visible" : "hidden", transform: `translateY(${on ? 0 : 10}px)` }}
                >
                  <p className="tp-label">
                    {pad(i + 1)} / {pad(N)} — Series
                  </p>
                  <h2 className="tp-title">{d.series}</h2>
                  <p className="tp-desc">{d.desc}</p>
                  <p className="tp-label" style={{ marginTop: "4px", display: d.shown ? "block" : "none" }}>
                    Shown — {d.shown}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="tp-cta">
            <Link href="/click-collect" style={{ ...BUTTON, padding: "0 22px", background: "#111111", color: "#ffffff", textDecoration: "none" }}>
              Order now
            </Link>
            <Link href="/menu" style={{ ...BUTTON, color: "#111111", textUnderlineOffset: "6px" }}>
              View our menu
            </Link>
          </div>
          <div className="tp-nav">
            <button type="button" className="tp-arrow" aria-label="Previous series" onClick={() => go(-1)}>
              <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                <path d="M10 3 L5 8 L10 13" fill="none" stroke="currentColor" style={{ strokeWidth: 1.5 }} />
              </svg>
            </button>
            <button type="button" className="tp-arrow" aria-label="Next series" onClick={() => go(1)}>
              <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                <path d="M6 3 L11 8 L6 13" fill="none" stroke="currentColor" style={{ strokeWidth: 1.5 }} />
              </svg>
            </button>
            <span className="tp-label" style={{ marginLeft: "6px" }}>
              {pad(active + 1)}
            </span>
            <span className="tp-bar" aria-hidden="true">
              <span className="tp-barfill" style={{ width: `${((active + 1) / N) * 100}%` }} />
            </span>
            <span className="tp-label">{pad(N)}</span>
          </div>
        </div>
      </div>

      {/* The turntable: one disc with fourteen places. It turns as a whole. */}
      <div
        className="tp-disc"
        style={{ transform: `rotate(${-step * (360 / SLOTS) || 0}deg)` }}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
      >
        <svg className="tp-face" viewBox="0 0 900 900" aria-hidden="true">
          <circle cx="450" cy="450" r="446" style={{ fill: "none", stroke: "#d3d2cd", strokeWidth: 1 }} />
          <circle cx="450" cy="450" r="443" transform="rotate(-90 450 450)" style={{ fill: "none", stroke: "#b9b8b3", strokeWidth: 4, strokeDasharray: "0.8 19.082" }} />
          <circle cx="450" cy="450" r="441" transform="rotate(-77.143 450 450)" style={{ fill: "none", stroke: "#8e8d88", strokeWidth: 8, strokeDasharray: "1.2 196.72" }} />
          <circle cx="450" cy="450" r="134" style={{ fill: "none", stroke: "#d3d2cd", strokeWidth: 1 }} />
          <circle cx="450" cy="450" r="3" style={{ fill: "#111111" }} />
          <defs>
            <path id="tp-hubring" d="M 450 344 a 106 106 0 1 1 -0.01 0" />
          </defs>
          <text style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: 500, fontSize: "10px", letterSpacing: "7.6px", fill: "#5c5c5a" }}>
            <textPath href="#tp-hubring">MODERN BEVERAGE SHOP · TEA · MATCHA · COFFEE · </textPath>
          </text>
        </svg>
        {Array.from({ length: SLOTS }, (_, k) => {
          const d = SERIES[k % N];
          let off = (((k - slot) % SLOTS) + SLOTS) % SLOTS;
          if (off > SLOTS / 2) off -= SLOTS;
          const dist = Math.abs(off);
          const on = dist === 0;
          const opacity = dist <= 1 ? 1 : dist === 2 ? 0.9 : dist === 3 ? 0.45 : 0;
          return (
            <div key={k} className="tp-spoke" style={{ transform: `rotate(${k * (360 / SLOTS)}deg)` }}>
              <img className="tp-cupimg" src={d.img} alt="" style={{ opacity, transform: `scale(${on ? 1.08 : 1})` }} />
              <span className="tp-num" aria-hidden="true" style={{ opacity }}>
                {pad((k % N) + 1)}
              </span>
              <button
                type="button"
                className="tp-hit"
                aria-label={on ? `${d.series} series, in front now` : `Turn to the ${d.series} series`}
                style={{ visibility: dist <= 3 ? "visible" : "hidden" }}
                onClick={() => {
                  if (Date.now() - swiped.current < 400) return;
                  if (off !== 0) go(off);
                }}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
