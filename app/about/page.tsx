import type { Metadata } from "next";
import Link from "next/link";
import Header from "../_components/Header";
import Footer from "../_components/Footer";

export const metadata: Metadata = {
  title: "About Us",
  description: "Teapresso is a modern beverage shop. We take the tools of espresso and point them at tea.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div style={{ width: "100%", background: "#ffffff", color: "#111111", fontFamily: "var(--font-jost), system-ui, sans-serif" }}>
      <Header current="/about" />
      {/* Opening line */}
      <section style={{ padding: "clamp(56px, 8vw, 120px) clamp(20px, 5vw, 64px) clamp(40px, 5vw, 72px)" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "clamp(40px, 5vw, 64px)" }}>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "24px 64px" }}>
            <div style={{ flex: "1 1 520px", minWidth: "0", display: "flex", flexDirection: "column", gap: "20px" }}>
              <span style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#5c5c5a" }}>
                About us — Modern Beverage Shop
              </span>
              <h1 style={{ margin: "0", fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "clamp(52px, 7.4vw, 112px)", lineHeight: "0.96", letterSpacing: "-0.03em" }}>
                Tea, extracted.
              </h1>
            </div>
            <p style={{ flex: "0 1 460px", margin: "0", fontFamily: "var(--font-jost), sans-serif", fontWeight: "300", fontSize: "clamp(20px, 1.9vw, 27px)", lineHeight: "1.35", color: "#111111" }}>
              Teapresso is a modern beverage shop. We take the tools of espresso and point them at tea.
            </p>
          </div>
          <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "12px" }}>
            <img src="/images/shops/teapresso-lab-front.jpg" alt="Design rendering of the Teapresso Lab shop front in Manchester: a glass front under a grey fascia with the Teapresso wordmark and a green Lab tag" style={{ width: "100%", height: "auto", aspectRatio: "2200 / 1238", objectFit: "cover" }} />
            <figcaption style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "4px 16px", fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", letterSpacing: "0.18em", textTransform: "uppercase", fontSize: "10px", color: "#5c5c5a" }}>
              <span style={{ color: "#111111" }}>Teapresso Lab</span>
              <span>Design rendering</span>
            </figcaption>
          </figure>
        </div>
      </section>
      {/* 01 About */}
      <section style={{ background: "#ffffff", color: "#111111", padding: "clamp(72px, 9vw, 136px) clamp(20px, 5vw, 64px)" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "flex-start", gap: "24px clamp(32px, 6vw, 96px)" }}>
          <div style={{ flex: "1 1 380px", minWidth: "0", display: "flex", flexDirection: "column", gap: "18px" }}>
            <span style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#5c5c5a" }}>
              01 — About
            </span>
            <h2 style={{ margin: "0", fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "clamp(34px, 4vw, 60px)", lineHeight: "1.02", letterSpacing: "-0.02em" }}>
              A tea shop built
              <br />
              like a coffee bar.
            </h2>
          </div>
          <div style={{ flex: "1.3 1 480px", minWidth: "0", display: "flex", flexDirection: "column", gap: "22px" }}>
            <p style={{ margin: "0", maxWidth: "34em", fontSize: "17px", lineHeight: "1.6", color: "#3a3a38" }}>
              Teapresso opened its first shop in Manchester in 2024. Our house teas are ground, weighed and pulled through a pressure extraction machine, one cup at a time, the way a barista pulls a shot.
            </p>
            <p style={{ margin: "0", maxWidth: "34em", fontSize: "17px", lineHeight: "1.6", color: "#3a3a38" }}>
              What comes out has the body of coffee and the clarity of the leaf. We build lattes, matcha and seasonal drinks around it, and serve them in shops that are calm, bright and unhurried.
            </p>
            <span style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#5c5c5a", borderTop: "1px solid #dcdcd8", paddingTop: "18px" }}>
              UK · Canada · USA
            </span>
          </div>
        </div>
      </section>
      {/* 02 The name */}
      <section style={{ background: "#f3f3f1", color: "#111111", padding: "clamp(72px, 9vw, 136px) clamp(20px, 5vw, 64px)" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "flex-start", gap: "24px clamp(32px, 6vw, 96px)" }}>
          <div style={{ flex: "1 1 380px", minWidth: "0", display: "flex", flexDirection: "column", gap: "18px" }}>
            <span style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#5c5c5a" }}>
              02 — The name
            </span>
            <img src="/brand/yecui.svg" alt="Yě Cuì, the Chinese name of Teapresso, in its own lettering" style={{ alignSelf: "flex-start", height: "clamp(40px, 4.2vw, 62px)", width: "auto", margin: "6px 0 2px" }} />
            <h2 style={{ margin: "0", fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "clamp(34px, 4vw, 60px)", lineHeight: "1.02", letterSpacing: "-0.02em" }}>
              Wild, extracted.
            </h2>
          </div>
          <div style={{ flex: "1.3 1 480px", minWidth: "0", display: "flex", flexDirection: "column", gap: "22px" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px 32px", borderTop: "1px solid #dcdcd8", padding: "18px 0" }}>
              <span style={{ flex: "0 0 190px", fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "19px", letterSpacing: "-0.01em" }}>Yě</span>
              <p style={{ flex: "1 1 300px", margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#3a3a38" }}>
                Wild. Leaves as they grow, flavour as nature made it.
              </p>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px 32px", borderTop: "1px solid #dcdcd8", padding: "18px 0" }}>
              <span style={{ flex: "0 0 190px", fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "19px", letterSpacing: "-0.01em" }}>Cuì</span>
              <p style={{ flex: "1 1 300px", margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#3a3a38" }}>
                Essence, drawn out. What the machine does to the leaf.
              </p>
            </div>
            <p style={{ margin: "0", borderTop: "1px solid #dcdcd8", paddingTop: "18px", fontFamily: "var(--font-jost), sans-serif", fontWeight: "300", fontSize: "clamp(20px, 1.9vw, 27px)", lineHeight: "1.35" }}>
              Together they read as our line: Extract essence and taste nature.
            </p>
          </div>
        </div>
      </section>
      {/* 03 The craft */}
      <section style={{ padding: "clamp(72px, 9vw, 136px) clamp(20px, 5vw, 64px)" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "clamp(32px, 4vw, 56px)" }}>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "16px 48px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              <span style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#5c5c5a" }}>
                03 — The craft
              </span>
              <h2 style={{ margin: "0", fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "clamp(34px, 4vw, 60px)", lineHeight: "1.02", letterSpacing: "-0.02em" }}>
                Six steps, every cup.
              </h2>
            </div>
            <Link href="/#film" style={{ display: "inline-flex", alignItems: "center", minHeight: "48px", padding: "0 22px", textDecoration: "none", fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "12px", letterSpacing: "0.18em", textTransform: "uppercase", border: "1px solid #111111", color: "#111111" }}>
              Watch the film
            </Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(150px, 100%), 1fr))", gap: "28px clamp(6px, 0.8vw, 12px)" }}>
            <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "12px" }}>
              <img src="/images/craft/01-picking.jpg" alt="Whole tea leaves poured into the grinder" style={{ width: "100%", height: "auto", aspectRatio: "338 / 520", objectFit: "cover" }} />
              <figcaption style={{ display: "flex", gap: "10px", alignItems: "baseline" }}>
                <span style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", letterSpacing: "0.18em", textTransform: "uppercase", fontSize: "10px", color: "#5c5c5a" }}>
                  01
                </span>
                <span style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "19px", letterSpacing: "-0.01em" }}>Grind</span>
              </figcaption>
            </figure>
            <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "12px" }}>
              <img src="/images/craft/03-weighing.jpg" alt="A measured dose of ground tea being poured" style={{ width: "100%", height: "auto", aspectRatio: "338 / 520", objectFit: "cover" }} />
              <figcaption style={{ display: "flex", gap: "10px", alignItems: "baseline" }}>
                <span style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", letterSpacing: "0.18em", textTransform: "uppercase", fontSize: "10px", color: "#5c5c5a" }}>
                  02
                </span>
                <span style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "19px", letterSpacing: "-0.01em" }}>Dose</span>
              </figcaption>
            </figure>
            <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "12px" }}>
              <img src="/images/craft/04-placing.jpg" alt="Ground tea in the extraction basket" style={{ width: "100%", height: "auto", aspectRatio: "338 / 520", objectFit: "cover" }} />
              <figcaption style={{ display: "flex", gap: "10px", alignItems: "baseline" }}>
                <span style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", letterSpacing: "0.18em", textTransform: "uppercase", fontSize: "10px", color: "#5c5c5a" }}>
                  03
                </span>
                <span style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "19px", letterSpacing: "-0.01em" }}>Tamp</span>
              </figcaption>
            </figure>
            <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "12px" }}>
              <img src="/images/craft/06-extracting.jpg" alt="Tea running from the steel spout into a beaker" style={{ width: "100%", height: "auto", aspectRatio: "338 / 520", objectFit: "cover" }} />
              <figcaption style={{ display: "flex", gap: "10px", alignItems: "baseline" }}>
                <span style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", letterSpacing: "0.18em", textTransform: "uppercase", fontSize: "10px", color: "#5c5c5a" }}>
                  04
                </span>
                <span style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "19px", letterSpacing: "-0.01em" }}>Extract</span>
              </figcaption>
            </figure>
            <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "12px" }}>
              <img src="/images/craft/07-pouring.jpg" alt="Extracted tea poured from the beaker into a cup" style={{ width: "100%", height: "auto", aspectRatio: "338 / 520", objectFit: "cover" }} />
              <figcaption style={{ display: "flex", gap: "10px", alignItems: "baseline" }}>
                <span style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", letterSpacing: "0.18em", textTransform: "uppercase", fontSize: "10px", color: "#5c5c5a" }}>
                  05
                </span>
                <span style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "19px", letterSpacing: "-0.01em" }}>Pour</span>
              </figcaption>
            </figure>
            <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "12px" }}>
              <img src="/images/craft/08-tasting.jpg" alt="A finished summer cup set down on the counter" style={{ width: "100%", height: "auto", aspectRatio: "338 / 520", objectFit: "cover" }} />
              <figcaption style={{ display: "flex", gap: "10px", alignItems: "baseline" }}>
                <span style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", letterSpacing: "0.18em", textTransform: "uppercase", fontSize: "10px", color: "#5c5c5a" }}>
                  06
                </span>
                <span style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "19px", letterSpacing: "-0.01em" }}>Finish</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
      {/* 04 Matcha: ink ground, so only the drinks carry colour */}
      <section style={{ background: "#0a0a0a", color: "#f2eee6", padding: "clamp(72px, 9vw, 136px) clamp(20px, 5vw, 64px)" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "clamp(40px, 5vw, 64px)" }}>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "24px 64px" }}>
            <div style={{ flex: "1 1 420px", minWidth: "0", display: "flex", flexDirection: "column", gap: "18px" }}>
              <span style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#c9c9c4" }}>
                04 — Matcha · In every shop
              </span>
              <h2 style={{ margin: "0", fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "clamp(34px, 4vw, 60px)", lineHeight: "1.02", letterSpacing: "-0.02em", color: "#f2eee6" }}>
                Our other green.
              </h2>
            </div>
            <div style={{ flex: "0 1 520px", minWidth: "0", display: "flex", flexDirection: "column", gap: "18px" }}>
              <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.6", color: "#dcdcd8" }}>
                Next to extracted tea, matcha is the other half of our menu. We pour it in layers over milk, fruit and brown sugar: strawberry, mango, pistachio, a matcha tiramisu, a cloud of matcha cream.
              </p>
              <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.6", color: "#dcdcd8" }}>
                Each one is built to be seen through the cup before it is tasted. Every Teapresso shop serves the series.
              </p>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(150px, 100%), 1fr))", gap: "28px clamp(10px, 1.4vw, 20px)" }}>
            <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "12px" }}>
              <img src="/images/drinks/strawberry-matcha-latte.jpg" alt="Strawberry Matcha Latte" style={{ width: "100%", height: "auto", aspectRatio: "4 / 5", objectFit: "cover" }} />
              <figcaption style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", letterSpacing: "0.18em", textTransform: "uppercase", fontSize: "10px", color: "#c9c9c4" }}>
                Strawberry
              </figcaption>
            </figure>
            <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "12px" }}>
              <img src="/images/drinks/mango-coconut-matcha-latte.jpg" alt="Mango Coconut Matcha Latte" style={{ width: "100%", height: "auto", aspectRatio: "4 / 5", objectFit: "cover" }} />
              <figcaption style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", letterSpacing: "0.18em", textTransform: "uppercase", fontSize: "10px", color: "#c9c9c4" }}>
                Mango coconut
              </figcaption>
            </figure>
            <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "12px" }}>
              <img src="/images/drinks/sea-salt-caramel-pistachio-matcha-latte.jpg" alt="Sea Salt Caramel Pistachio Matcha Latte" style={{ width: "100%", height: "auto", aspectRatio: "4 / 5", objectFit: "cover" }} />
              <figcaption style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", letterSpacing: "0.18em", textTransform: "uppercase", fontSize: "10px", color: "#c9c9c4" }}>
                Sea salt caramel pistachio
              </figcaption>
            </figure>
            <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "12px" }}>
              <img src="/images/drinks/tiramisu-matcha-latte.jpg" alt="Tiramisu Matcha Latte" style={{ width: "100%", height: "auto", aspectRatio: "4 / 5", objectFit: "cover" }} />
              <figcaption style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", letterSpacing: "0.18em", textTransform: "uppercase", fontSize: "10px", color: "#c9c9c4" }}>
                Tiramisu
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
      {/* 05 The menu */}
      <section style={{ background: "#ffffff", color: "#111111", padding: "clamp(72px, 9vw, 136px) clamp(20px, 5vw, 64px)" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "flex-start", gap: "24px clamp(32px, 6vw, 96px)" }}>
          <div style={{ flex: "1 1 380px", minWidth: "0", display: "flex", flexDirection: "column", gap: "18px" }}>
            <span style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#5c5c5a" }}>
              05 — The menu
            </span>
            <h2 style={{ margin: "0", fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "clamp(34px, 4vw, 60px)", lineHeight: "1.02", letterSpacing: "-0.02em" }}>
              Built on tea.
            </h2>
          </div>
          <div style={{ flex: "1.3 1 480px", minWidth: "0", display: "flex", flexDirection: "column", gap: "22px" }}>
            <p style={{ margin: "0", maxWidth: "34em", fontSize: "17px", lineHeight: "1.6", color: "#3a3a38" }}>
              Extracted tea lattes, layered matcha, brown sugar boba, frappes, yoghurt smoothies, lemon teas and a short coffee list.
            </p>
            <p style={{ margin: "0", maxWidth: "34em", fontSize: "17px", lineHeight: "1.6", color: "#3a3a38" }}>
              The menu turns with the year. Limited drinks arrive with each season and leave with it.
            </p>
            <Link href="/menu" style={{ display: "inline-flex", alignItems: "center", minHeight: "48px", padding: "0 22px", textDecoration: "none", fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "12px", letterSpacing: "0.18em", textTransform: "uppercase", alignSelf: "flex-start", background: "#111111", color: "#ffffff" }}>
              View the menu
            </Link>
          </div>
        </div>
      </section>
      {/* 06 The cups */}
      <section style={{ background: "#f3f3f1", color: "#111111", padding: "clamp(72px, 9vw, 136px) clamp(20px, 5vw, 64px)" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "clamp(32px, 4vw, 56px)" }}>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "24px 64px" }}>
            <div style={{ flex: "1 1 420px", minWidth: "0", display: "flex", flexDirection: "column", gap: "18px" }}>
              <span style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#5c5c5a" }}>
                06 — The cups
              </span>
              <h2 style={{ margin: "0", fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "clamp(34px, 4vw, 60px)", lineHeight: "1.02", letterSpacing: "-0.02em" }}>
                A cup for
                <br />
                every season.
              </h2>
            </div>
            <p style={{ flex: "0 1 520px", margin: "0", fontSize: "17px", lineHeight: "1.6", color: "#3a3a38" }}>
              Spring, Summer, Autumn, Winter and Snow, with Sunrise, Moon and Rose alongside. One structure, eight colours: a mark above, the wordmark below.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(130px, 100%), 1fr))", gap: "24px clamp(6px, 0.8vw, 12px)" }}>
            <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "12px" }}>
              <img src="/images/drinks/glutinous-rice-tea-latte.jpg" alt="The green Spring cup" style={{ width: "100%", height: "auto", aspectRatio: "4 / 5", objectFit: "cover" }} />
              <figcaption style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", letterSpacing: "0.18em", textTransform: "uppercase", fontSize: "10px", color: "#5c5c5a" }}>
                Spring
              </figcaption>
            </figure>
            <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "12px" }}>
              <img src="/images/drinks/peach-tea-latte.jpg" alt="The pink Summer cup" style={{ width: "100%", height: "auto", aspectRatio: "4 / 5", objectFit: "cover" }} />
              <figcaption style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", letterSpacing: "0.18em", textTransform: "uppercase", fontSize: "10px", color: "#5c5c5a" }}>
                Summer
              </figcaption>
            </figure>
            <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "12px" }}>
              <img src="/images/drinks/osmanthus-tea-latte.jpg" alt="The gold Autumn cup" style={{ width: "100%", height: "auto", aspectRatio: "4 / 5", objectFit: "cover" }} />
              <figcaption style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", letterSpacing: "0.18em", textTransform: "uppercase", fontSize: "10px", color: "#5c5c5a" }}>
                Autumn
              </figcaption>
            </figure>
            <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "12px" }}>
              <img src="/images/drinks/oolong-tea-latte.jpg" alt="The silver Winter cup" style={{ width: "100%", height: "auto", aspectRatio: "4 / 5", objectFit: "cover" }} />
              <figcaption style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", letterSpacing: "0.18em", textTransform: "uppercase", fontSize: "10px", color: "#5c5c5a" }}>
                Winter
              </figcaption>
            </figure>
            <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "12px" }}>
              <img src="/images/drinks/jasmine-snow-tea-latte.jpg" alt="The white Snow cup" style={{ width: "100%", height: "auto", aspectRatio: "4 / 5", objectFit: "cover" }} />
              <figcaption style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", letterSpacing: "0.18em", textTransform: "uppercase", fontSize: "10px", color: "#5c5c5a" }}>
                Snow
              </figcaption>
            </figure>
            <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "12px" }}>
              <img src="/images/drinks/earl-grey-tea-latte.jpg" alt="The red Sunrise cup" style={{ width: "100%", height: "auto", aspectRatio: "4 / 5", objectFit: "cover" }} />
              <figcaption style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", letterSpacing: "0.18em", textTransform: "uppercase", fontSize: "10px", color: "#5c5c5a" }}>
                Sunrise
              </figcaption>
            </figure>
            <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "12px" }}>
              <img src="/images/drinks/orchid-tea-latte.jpg" alt="The blue Moon cup" style={{ width: "100%", height: "auto", aspectRatio: "4 / 5", objectFit: "cover" }} />
              <figcaption style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", letterSpacing: "0.18em", textTransform: "uppercase", fontSize: "10px", color: "#5c5c5a" }}>
                Moon
              </figcaption>
            </figure>
            <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "12px" }}>
              <img src="/images/drinks/rose-tea-latte.jpg" alt="The black Rose cup" style={{ width: "100%", height: "auto", aspectRatio: "4 / 5", objectFit: "cover" }} />
              <figcaption style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", letterSpacing: "0.18em", textTransform: "uppercase", fontSize: "10px", color: "#5c5c5a" }}>
                Rose
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
      {/* 07 The shops */}
      <section style={{ padding: "clamp(72px, 9vw, 136px) clamp(20px, 5vw, 64px)" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "clamp(40px, 5vw, 64px)" }}>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start", gap: "24px clamp(32px, 6vw, 96px)" }}>
            <div style={{ flex: "1 1 380px", minWidth: "0", display: "flex", flexDirection: "column", gap: "18px" }}>
              <span style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#5c5c5a" }}>
                07 — The shops
              </span>
              <h2 style={{ margin: "0", fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "clamp(34px, 4vw, 60px)", lineHeight: "1.02", letterSpacing: "-0.02em" }}>
                Calm rooms.
              </h2>
            </div>
            <div style={{ flex: "1.3 1 480px", minWidth: "0", display: "flex", flexDirection: "column", gap: "22px" }}>
              <p style={{ margin: "0", maxWidth: "34em", fontSize: "17px", lineHeight: "1.6", color: "#3a3a38" }}>
                Our shops are made for the slower half of the day. We open at eleven, for the afternoon and the evening. Simple, dark fronts with the name in light. Inside, pale timber and a long bar.
              </p>
              <p style={{ margin: "0", maxWidth: "34em", fontSize: "17px", lineHeight: "1.6", color: "#3a3a38" }}>
                Different rooms, one language: pale timber, mineral plaster, brushed steel and a black frame, with one line of light running through the room. Each new shop answers to its street.
              </p>
              <Link href="/locations" style={{ display: "inline-flex", alignItems: "center", minHeight: "48px", padding: "0 22px", textDecoration: "none", fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "12px", letterSpacing: "0.18em", textTransform: "uppercase", alignSelf: "flex-start", border: "1px solid #111111", color: "#111111" }}>
                Our locations
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* 08 Two more lines */}
      <section style={{ background: "#f3f3f1", color: "#111111", padding: "clamp(72px, 9vw, 136px) clamp(20px, 5vw, 64px)" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "clamp(28px, 3.4vw, 48px)" }}>
          <span style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#5c5c5a" }}>
            08 — Also from Teapresso
          </span>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(360px, 100%), 1fr))", gap: "40px clamp(32px, 6vw, 96px)" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", borderTop: "1px solid #111111", paddingTop: "22px" }}>
              <h3 style={{ margin: "0", fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "clamp(28px, 2.8vw, 40px)", lineHeight: "1.05", letterSpacing: "-0.02em" }}>
                Teapresso Lab.
              </h3>
              <p style={{ margin: "0", maxWidth: "30em", fontSize: "17px", lineHeight: "1.6", color: "#3a3a38" }}>
                A separate line, with its own menu and its own room.
              </p>
              <span style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#5c5c5a" }}>
                City Tower, Manchester · Opening soon
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", borderTop: "1px solid #111111", paddingTop: "22px" }}>
              <h3 style={{ margin: "0", fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "clamp(28px, 2.8vw, 40px)", lineHeight: "1.05", letterSpacing: "-0.02em" }}>
                Teapresso Matcha Bar.
              </h3>
              <p style={{ margin: "0", maxWidth: "30em", fontSize: "17px", lineHeight: "1.6", color: "#3a3a38" }}>
                Matcha, out in the open. A line given to matcha: a kiosk of its own, with a green fascia and a garden around the bar.
              </p>
              <span style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#5c5c5a" }}>
                Victoria Gate, Leeds · Opening soon
              </span>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
