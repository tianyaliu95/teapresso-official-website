"use client";

import { useState } from "react";
import type { ChangeEvent } from "react";
import Link from "next/link";
import Header from "../_components/Header";
import Footer from "../_components/Footer";

// Each shop takes orders on its own page.
const SHOPS = {
  leeds: { name: "Leeds", url: "https://www.teapresso.co.uk/s/order?location=11eff9bbb340e1a699353cecef6dbab4" },
  manchester: { name: "Manchester", url: "https://teapresso-manchester.square.site/" },
  glasgow: { name: "Glasgow", url: "https://teapresso-glasgow.square.site/" },
  toronto: { name: "Toronto", url: "https://pos.chowbus.com/online-ordering/store/Teapresso/23939" },
} as const;

type ShopKey = keyof typeof SHOPS;

export default function ClickCollectView() {
  const [shop, setShop] = useState<ShopKey>("leeds");
  const shopName = SHOPS[shop].name;
  const orderUrl = SHOPS[shop].url;
  const pickShop = (event: ChangeEvent<HTMLSelectElement>) => setShop(event.target.value as ShopKey);

  return (
    <div style={{ width: "100%", background: "#ffffff", color: "#111111", fontFamily: "var(--font-jost), system-ui, sans-serif" }}>
      <Header current="/click-collect" />
      {/* Hero + order panel */}
      <section style={{ padding: "clamp(48px, 7vw, 104px) clamp(20px, 5vw, 64px) clamp(72px, 9vw, 128px)" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "flex-end", gap: "48px clamp(40px, 6vw, 96px)" }}>
          <div style={{ flex: "1 1 460px", minWidth: "0", display: "flex", flexDirection: "column", gap: "24px" }}>
            <span style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#5c5c5a" }}>
              {"Click & Collect"}
            </span>
            <h1 style={{ margin: "0", fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "clamp(44px, 5.4vw, 80px)", lineHeight: "1.02", letterSpacing: "-0.02em" }}>
              Order ahead. Collect at the counter.
            </h1>
            <p style={{ margin: "0", maxWidth: "28em", fontSize: "16px", lineHeight: "1.65", color: "#3a3a38" }}>
              Order your favourite drinks online, then collect them from your shop when it suits you.
            </p>
          </div>
          <div style={{ flex: "0 1 420px", minWidth: "0", background: "#f3f3f1", color: "#111111", padding: "clamp(24px, 3vw, 40px)", boxSizing: "border-box", display: "flex", flexDirection: "column", gap: "20px" }}>
            <span style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#5c5c5a" }}>
              Step 1 of 2
            </span>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <label htmlFor="cc-shop" style={{ fontFamily: "var(--font-jost), sans-serif", fontSize: "22px" }}>Select your location</label>
              <select id="cc-shop" value={shop} onChange={pickShop} style={{ minHeight: "52px", padding: "0 14px", border: "1px solid #b5b5b0", background: "#ffffff", borderRadius: "0", fontSize: "16px", color: "#111111" }}>
                <option value="leeds">Leeds, UK — The Headrow</option>
                <option value="manchester">Manchester, UK — Oxford Rd</option>
                <option value="glasgow">Glasgow, UK — Byres Road</option>
                <option value="toronto">Toronto, Canada — Thornhill</option>
              </select>
            </div>
            <a href={orderUrl} style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", minHeight: "52px", padding: "0 24px", background: "#111111", color: "#ffffff", textDecoration: "none", fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "12px", letterSpacing: "0.18em", textTransform: "uppercase" }}>
              {"Start ordering · "}{shopName}
            </a>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", borderTop: "1px solid #c9c9c4", paddingTop: "16px" }}>
              <span style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#5c5c5a" }}>
                Or go straight to your shop
              </span>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "4px 18px", fontSize: "15px" }}>
                <a href="https://www.teapresso.co.uk/s/order?location=11eff9bbb340e1a699353cecef6dbab4" style={{ display: "inline-flex", alignItems: "center", minHeight: "44px", color: "#111111", textUnderlineOffset: "4px" }}>
                  Leeds
                </a>
                <a href="https://teapresso-manchester.square.site/" style={{ display: "inline-flex", alignItems: "center", minHeight: "44px", color: "#111111", textUnderlineOffset: "4px" }}>
                  Manchester
                </a>
                <a href="https://teapresso-glasgow.square.site/" style={{ display: "inline-flex", alignItems: "center", minHeight: "44px", color: "#111111", textUnderlineOffset: "4px" }}>
                  Glasgow
                </a>
                <a href="https://pos.chowbus.com/online-ordering/store/Teapresso/23939" style={{ display: "inline-flex", alignItems: "center", minHeight: "44px", color: "#111111", textUnderlineOffset: "4px" }}>
                  Toronto
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Benefits */}
      <section style={{ background: "#f3f3f1", color: "#111111", padding: "clamp(72px, 9vw, 128px) clamp(20px, 5vw, 64px)" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))", gap: "0 clamp(20px, 3vw, 48px)" }}>
          <div style={{ borderTop: "1px solid #111111", padding: "22px 0 32px", display: "flex", flexDirection: "column", gap: "10px" }}>
            <span style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "10px", letterSpacing: "0.18em", color: "#5c5c5a" }}>01</span>
            <h2 style={{ margin: "0", fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "26px" }}>Made fresh for you</h2>
            <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#3a3a38" }}>We make each order when it comes in, not before.</p>
          </div>
          <div style={{ borderTop: "1px solid #111111", padding: "22px 0 32px", display: "flex", flexDirection: "column", gap: "10px" }}>
            <span style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "10px", letterSpacing: "0.18em", color: "#5c5c5a" }}>02</span>
            <h2 style={{ margin: "0", fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "26px" }}>The full menu</h2>
            <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#3a3a38" }}>Milk teas, matcha, frappes, boba, smoothies and specialty coffee.</p>
          </div>
          <div style={{ borderTop: "1px solid #111111", padding: "22px 0 32px", display: "flex", flexDirection: "column", gap: "10px" }}>
            <span style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "10px", letterSpacing: "0.18em", color: "#5c5c5a" }}>03</span>
            <h2 style={{ margin: "0", fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "26px" }}>Skip the queue</h2>
            <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#3a3a38" }}>Collect at the counter when it is ready.</p>
          </div>
        </div>
      </section>
      {/* From order to collection: film strip */}
      <section style={{ padding: "clamp(64px, 8vw, 112px) 0" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "0 clamp(20px, 5vw, 64px)", display: "flex", flexDirection: "column", gap: "16px" }}>
          <span style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#5c5c5a" }}>
            Tea making process — 04 frames
          </span>
          <h2 style={{ margin: "0", fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "clamp(32px, 3.6vw, 52px)", lineHeight: "1.05", letterSpacing: "-0.01em" }}>
            From your order to your hand.
          </h2>
        </div>
        <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "clamp(32px, 4vw, 56px) clamp(20px, 5vw, 64px) 0", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(220px, 100%), 1fr))", gap: "6px" }}>
          <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "14px" }}>
            <img src="/images/craft/01-picking.jpg" alt="Leaves going into the grinder" style={{ width: "100%", height: "auto", aspectRatio: "338 / 600", objectFit: "cover" }} />
            <figcaption style={{ display: "flex", flexDirection: "column", gap: "6px", padding: "0 4px" }}>
              <span style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "10px", letterSpacing: "0.18em", color: "#5c5c5a" }}>
                01 · Order in
              </span>
              <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#3a3a38" }}>Your order reaches the bar and we start.</span>
            </figcaption>
          </figure>
          <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "14px" }}>
            <img src="/images/craft/06-extracting.jpg" alt="Tea extracting into a beaker" style={{ width: "100%", height: "auto", aspectRatio: "338 / 600", objectFit: "cover" }} />
            <figcaption style={{ display: "flex", flexDirection: "column", gap: "6px", padding: "0 4px" }}>
              <span style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "10px", letterSpacing: "0.18em", color: "#5c5c5a" }}>
                02 · Extracted
              </span>
              <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#3a3a38" }}>Ground and extracted for your cup.</span>
            </figcaption>
          </figure>
          <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "14px" }}>
            <img src="/images/craft/07-pouring.jpg" alt="Tea poured into the cup" style={{ width: "100%", height: "auto", aspectRatio: "338 / 600", objectFit: "cover" }} />
            <figcaption style={{ display: "flex", flexDirection: "column", gap: "6px", padding: "0 4px" }}>
              <span style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "10px", letterSpacing: "0.18em", color: "#5c5c5a" }}>
                03 · Finished
              </span>
              <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#3a3a38" }}>Poured, topped and sealed.</span>
            </figcaption>
          </figure>
          <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "14px" }}>
            <img src="/images/craft/08-tasting.jpg" alt="A finished cup on the counter" style={{ width: "100%", height: "auto", aspectRatio: "338 / 600", objectFit: "cover" }} />
            <figcaption style={{ display: "flex", flexDirection: "column", gap: "6px", padding: "0 4px" }}>
              <span style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "10px", letterSpacing: "0.18em", color: "#5c5c5a" }}>
                04 · Collect
              </span>
              <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#3a3a38" }}>Ready for you at the counter.</span>
            </figcaption>
          </figure>
        </div>
      </section>
      {/* Featured menu */}
      <section style={{ background: "#f3f3f1", color: "#111111", padding: "clamp(72px, 9vw, 128px) clamp(20px, 5vw, 64px)" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "40px" }}>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "16px 48px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <span style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#5c5c5a" }}>
                Our featured menu
              </span>
              <h2 style={{ margin: "0", fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "clamp(32px, 3.6vw, 52px)", lineHeight: "1.05", letterSpacing: "-0.01em" }}>
                Discover more.
              </h2>
            </div>
            <Link href="/menu" style={{ display: "inline-flex", alignItems: "center", minHeight: "48px", padding: "0 22px", border: "1px solid #111111", color: "#111111", textDecoration: "none", fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "12px", letterSpacing: "0.18em", textTransform: "uppercase" }}>
              Check out our menu
            </Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(max(150px, calc((100% - 30px) / 6)), 1fr))", gap: "24px 6px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <img src="/images/drinks/glutinous-rice-tea-latte.jpg" alt="Glutinous Rice Tea Latte" style={{ width: "100%", height: "auto", aspectRatio: "4 / 5", objectFit: "cover" }} />
              <span style={{ fontSize: "13px", lineHeight: "1.4" }}>Glutinous Rice Tea Latte</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <img src="/images/drinks/peach-tea-latte.jpg" alt="Peach Tea Latte" style={{ width: "100%", height: "auto", aspectRatio: "4 / 5", objectFit: "cover" }} />
              <span style={{ fontSize: "13px", lineHeight: "1.4" }}>Peach Tea Latte</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <img src="/images/drinks/osmanthus-tea-latte.jpg" alt="Osmanthus Tea Latte" style={{ width: "100%", height: "auto", aspectRatio: "4 / 5", objectFit: "cover" }} />
              <span style={{ fontSize: "13px", lineHeight: "1.4" }}>Osmanthus Tea Latte</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <img src="/images/drinks/oolong-tea-latte.jpg" alt="Oolong Tea Latte" style={{ width: "100%", height: "auto", aspectRatio: "4 / 5", objectFit: "cover" }} />
              <span style={{ fontSize: "13px", lineHeight: "1.4" }}>Oolong Tea Latte</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <img src="/images/drinks/rose-lychee-tea-frappe.jpg" alt="Rose Lychee Tea Frappe" style={{ width: "100%", height: "auto", aspectRatio: "4 / 5", objectFit: "cover" }} />
              <span style={{ fontSize: "13px", lineHeight: "1.4" }}>Rose Lychee Tea Frappe</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <img src="/images/drinks/strawberry-peach-tea-frappe.jpg" alt="Strawberry Peach Tea Frappe" style={{ width: "100%", height: "auto", aspectRatio: "4 / 5", objectFit: "cover" }} />
              <span style={{ fontSize: "13px", lineHeight: "1.4" }}>Strawberry Peach Tea Frappe</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <img src="/images/drinks/matcha-latte.jpg" alt="Matcha Latte" style={{ width: "100%", height: "auto", aspectRatio: "4 / 5", objectFit: "cover" }} />
              <span style={{ fontSize: "13px", lineHeight: "1.4" }}>Matcha Latte</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <img src="/images/drinks/brown-sugar-boba-matcha-latte.jpg" alt="Brown Sugar Boba Matcha Latte" style={{ width: "100%", height: "auto", aspectRatio: "4 / 5", objectFit: "cover" }} />
              <span style={{ fontSize: "13px", lineHeight: "1.4" }}>Brown Sugar Boba Matcha Latte</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <img src="/images/drinks/strawberry-matcha-latte.jpg" alt="Strawberry Matcha Latte" style={{ width: "100%", height: "auto", aspectRatio: "4 / 5", objectFit: "cover" }} />
              <span style={{ fontSize: "13px", lineHeight: "1.4" }}>Strawberry Matcha Latte</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <img src="/images/drinks/roasted-brown-sugar-milk-boba.jpg" alt="Roasted Brown Sugar Milk Boba" style={{ width: "100%", height: "auto", aspectRatio: "4 / 5", objectFit: "cover" }} />
              <span style={{ fontSize: "13px", lineHeight: "1.4" }}>Roasted Brown Sugar Milk Boba</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <img src="/images/drinks/avocado-yoghurt-smoothie.jpg" alt="Avocado Yoghurt Smoothie" style={{ width: "100%", height: "auto", aspectRatio: "4 / 5", objectFit: "cover" }} />
              <span style={{ fontSize: "13px", lineHeight: "1.4" }}>Avocado Yoghurt Smoothie</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <img src="/images/drinks/iced-oolong-lemon-tea.jpg" alt="Iced Oolong Lemon Tea" style={{ width: "100%", height: "auto", aspectRatio: "4 / 5", objectFit: "cover" }} />
              <span style={{ fontSize: "13px", lineHeight: "1.4" }}>Iced Oolong Lemon Tea</span>
            </div>
          </div>
        </div>
      </section>
      {/* Ready to order */}
      <section style={{ padding: "clamp(72px, 9vw, 128px) clamp(20px, 5vw, 64px)" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "32px 64px" }}>
          <div style={{ flex: "1 1 420px", minWidth: "0", display: "flex", flexDirection: "column", gap: "16px" }}>
            <span style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#5c5c5a" }}>
              Ready to order?
            </span>
            <h2 style={{ margin: "0", fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "clamp(32px, 3.6vw, 52px)", lineHeight: "1.05", letterSpacing: "-0.01em" }}>
              Order ahead, collect at the counter.
            </h2>
          </div>
          <div style={{ flex: "0 1 560px", minWidth: "0", display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "flex-end" }}>
            <div style={{ flex: "1 1 260px", display: "flex", flexDirection: "column", gap: "8px" }}>
              <label htmlFor="cc-shop-2" style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#5c5c5a" }}>
                Select your location
              </label>
              <select id="cc-shop-2" value={shop} onChange={pickShop} style={{ minHeight: "52px", padding: "0 14px", border: "1px solid #b5b5b0", background: "#ffffff", borderRadius: "0", fontSize: "16px", color: "#111111" }}>
                <option value="leeds">Leeds, UK — The Headrow</option>
                <option value="manchester">Manchester, UK — Oxford Rd</option>
                <option value="glasgow">Glasgow, UK — Byres Road</option>
                <option value="toronto">Toronto, Canada — Thornhill</option>
              </select>
            </div>
            <a href={orderUrl} style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", minHeight: "52px", padding: "0 24px", background: "#111111", color: "#ffffff", textDecoration: "none", fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "12px", letterSpacing: "0.18em", textTransform: "uppercase" }}>
              {"Start ordering · "}{shopName}
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
