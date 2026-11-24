import type { Metadata } from "next";
import Link from "next/link";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import Turntable from "./_components/Turntable";
import Film from "./_components/Film";

export const metadata: Metadata = {
  title: { absolute: "Teapresso — Modern Beverage Shop" },
  description: "Tea, extracted by the cup. Whole-leaf tea lattes, a full matcha series and coffee, in Manchester, Leeds, Glasgow and Toronto.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <div className="tp-root" style={{ width: "100%", background: "#ffffff", color: "#111111", fontFamily: "var(--font-jost), system-ui, sans-serif" }}>
      {/* Header + rotating menu hero. The ground stays neutral: only the cups and the drinks carry colour. */}
      <div className="tp-top" style={{ backgroundColor: "#f3f3f1" }}>
        <Header tint />
        <Turntable />
      </div>
      {/* Statement, with the film */}
      <section id="film" style={{ padding: "clamp(64px, 8vw, 120px) clamp(20px, 5vw, 64px)" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "40px clamp(40px, 6vw, 96px)" }}>
          <div style={{ flex: "1 1 480px", minWidth: "0", display: "flex", flexDirection: "column", gap: "28px" }}>
            <span style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#5c5c5a" }}>
              Modern Beverage Shop
            </span>
            <h2 style={{ margin: "0", fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "clamp(40px, 5.4vw, 80px)", lineHeight: "1", letterSpacing: "-0.02em", color: "#111111" }}>
              Tea, extracted
              <br />
              by the cup.
            </h2>
            <p style={{ margin: "0", maxWidth: "30em", fontSize: "16px", lineHeight: "1.65", color: "#3a3a38" }}>
              Teapresso is a modern tea and coffee house. Our milk teas start as whole leaves, ground, weighed and extracted for each cup. Alongside them: a full matcha series and specialty coffee.
            </p>
          </div>
          <figure style={{ flex: "0 1 400px", minWidth: "0", margin: "0", display: "flex", flexDirection: "column", gap: "12px" }}>
            <Film />
            <figcaption style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "6px 16px", fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#5c5c5a" }}>
              <span>The film · 0:25</span>
              <span>Shot at the bar</span>
            </figcaption>
          </figure>
        </div>
      </section>
      {/* The art of extraction */}
      <section style={{ background: "#f3f3f1", color: "#111111", padding: "clamp(80px, 10vw, 152px) clamp(20px, 5vw, 64px)" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "flex-start", gap: "48px clamp(40px, 6vw, 96px)" }}>
          <div style={{ flex: "0 1 480px", minWidth: "0", display: "flex", flexDirection: "column", gap: "12px" }}>
            <img src="/images/craft/extraction-pour.jpg" alt="Extracted tea running from the group head into a glass measuring jug" style={{ width: "100%", height: "auto", aspectRatio: "4 / 5", objectFit: "cover" }} />
            <span style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#5c5c5a" }}>
              At the bar — extraction
            </span>
          </div>
          <div style={{ flex: "1 1 420px", minWidth: "0", display: "flex", flexDirection: "column", gap: "40px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <span style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#5c5c5a" }}>
                The art of extraction
              </span>
              <h2 style={{ margin: "0", fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "clamp(32px, 3.6vw, 52px)", lineHeight: "1.05", letterSpacing: "-0.01em" }}>
                Tea, given the care of espresso.
              </h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", gap: "24px", borderTop: "1px solid #c9c9c4", padding: "22px 0" }}>
                <span style={{ flex: "0 0 40px", fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "11px", color: "#5c5c5a", paddingTop: "6px" }}>
                  01
                </span>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <h3 style={{ margin: "0", fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "22px" }}>Selection and grinding</h3>
                  <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#3a3a38" }}>
                    We use whole tea leaves and grind them for each order, so the tea is fresh when it meets the water.
                  </p>
                </div>
              </div>
              <div style={{ display: "flex", gap: "24px", borderTop: "1px solid #c9c9c4", padding: "22px 0" }}>
                <span style={{ flex: "0 0 40px", fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "11px", color: "#5c5c5a", paddingTop: "6px" }}>
                  02
                </span>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <h3 style={{ margin: "0", fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "22px" }}>Measurement and extraction</h3>
                  <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#3a3a38" }}>
                    Each dose is weighed, then extracted under high pressure in a single-cup chamber, the way a shot of espresso is pulled.
                  </p>
                </div>
              </div>
              <div style={{ display: "flex", gap: "24px", borderTop: "1px solid #c9c9c4", borderBottom: "1px solid #c9c9c4", padding: "22px 0" }}>
                <span style={{ flex: "0 0 40px", fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "11px", color: "#5c5c5a", paddingTop: "6px" }}>
                  03
                </span>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <h3 style={{ margin: "0", fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "22px" }}>Pouring and tasting</h3>
                  <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#3a3a38" }}>
                    The tea goes straight into your cup: a clean, natural sweetness and a long finish.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Matcha series: its own band, ink ground, so only the drinks carry colour. Every shop serves it; the Matcha Bar is an extra counter. */}
      <section id="matcha" style={{ background: "#0a0a0a", color: "#f2eee6", padding: "clamp(72px, 9vw, 136px) clamp(20px, 5vw, 64px)" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "clamp(40px, 5vw, 72px)" }}>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "32px 64px" }}>
            <div style={{ flex: "1 1 520px", minWidth: "0", display: "flex", flexDirection: "column", gap: "20px" }}>
              <span style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#c9c9c4" }}>
                Matcha series — in every shop
              </span>
              <h2 style={{ margin: "0", fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "clamp(40px, 5.4vw, 80px)", lineHeight: "1", letterSpacing: "-0.02em", color: "#f2eee6" }}>
                Matcha, in every
                <br />
                Teapresso shop.
              </h2>
            </div>
            <div style={{ flex: "0 1 460px", minWidth: "0", display: "flex", flexDirection: "column", gap: "24px" }}>
              <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.6", color: "#dcdcd8" }}>
                Next to extracted tea, matcha is the other half of our menu, and every Teapresso shop serves it. Uji matcha, poured in layers over milk, fruit and brown sugar.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "12px 22px" }}>
                <Link href="/click-collect" style={{ display: "inline-flex", alignItems: "center", minHeight: "48px", padding: "0 22px", textDecoration: "none", fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "12px", letterSpacing: "0.18em", textTransform: "uppercase", background: "#f2eee6", color: "#0a0a0a" }}>
                  Order matcha
                </Link>
                <Link href="/menu" style={{ display: "inline-flex", alignItems: "center", minHeight: "48px", fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "12px", letterSpacing: "0.18em", textTransform: "uppercase", padding: "0", color: "#f2eee6", textDecoration: "underline", textUnderlineOffset: "6px" }}>
                  See the matcha menu
                </Link>
              </div>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(150px, 100%), 1fr))", gap: "40px clamp(10px, 1.4vw, 20px)" }}>
            <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "14px" }}>
              <img src="/images/drinks/strawberry-matcha-latte.jpg" alt="Strawberry Matcha Latte" style={{ width: "100%", height: "auto", aspectRatio: "4 / 5", objectFit: "cover" }} />
              <figcaption style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <span style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", letterSpacing: "0.18em", textTransform: "uppercase", fontSize: "10px", color: "#c9c9c4" }}>
                  01 · Matcha
                </span>
                <span style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "19px", lineHeight: "1.2", letterSpacing: "-0.01em", color: "#f2eee6" }}>
                  Strawberry Matcha Latte
                </span>
              </figcaption>
            </figure>
            <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "14px" }}>
              <img src="/images/drinks/mango-coconut-matcha-latte.jpg" alt="Mango Coconut Matcha Latte" style={{ width: "100%", height: "auto", aspectRatio: "4 / 5", objectFit: "cover" }} />
              <figcaption style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <span style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", letterSpacing: "0.18em", textTransform: "uppercase", fontSize: "10px", color: "#c9c9c4" }}>
                  02 · Matcha
                </span>
                <span style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "19px", lineHeight: "1.2", letterSpacing: "-0.01em", color: "#f2eee6" }}>
                  Mango Coconut Matcha Latte
                </span>
              </figcaption>
            </figure>
            <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "14px" }}>
              <img src="/images/drinks/ube-matcha-latte.jpg" alt="Ube Matcha Latte" style={{ width: "100%", height: "auto", aspectRatio: "4 / 5", objectFit: "cover" }} />
              <figcaption style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <span style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", letterSpacing: "0.18em", textTransform: "uppercase", fontSize: "10px", color: "#c9c9c4" }}>
                  03 · Matcha
                </span>
                <span style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "19px", lineHeight: "1.2", letterSpacing: "-0.01em", color: "#f2eee6" }}>
                  Ube Matcha Latte
                </span>
              </figcaption>
            </figure>
            <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "14px" }}>
              <img src="/images/drinks/brown-sugar-boba-matcha-latte.jpg" alt="Brown Sugar Boba Matcha Latte" style={{ width: "100%", height: "auto", aspectRatio: "4 / 5", objectFit: "cover" }} />
              <figcaption style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <span style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", letterSpacing: "0.18em", textTransform: "uppercase", fontSize: "10px", color: "#c9c9c4" }}>
                  04 · Matcha
                </span>
                <span style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "19px", lineHeight: "1.2", letterSpacing: "-0.01em", color: "#f2eee6" }}>
                  Brown Sugar Boba Matcha Latte
                </span>
              </figcaption>
            </figure>
            <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "14px" }}>
              <img src="/images/drinks/sea-salt-caramel-pistachio-matcha-latte.jpg" alt="Sea Salt Caramel Pistachio Matcha Latte" style={{ width: "100%", height: "auto", aspectRatio: "4 / 5", objectFit: "cover" }} />
              <figcaption style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <span style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", letterSpacing: "0.18em", textTransform: "uppercase", fontSize: "10px", color: "#c9c9c4" }}>
                  05 · Matcha
                </span>
                <span style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "19px", lineHeight: "1.2", letterSpacing: "-0.01em", color: "#f2eee6" }}>
                  Sea Salt Caramel Pistachio Matcha Latte
                </span>
              </figcaption>
            </figure>
            <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "14px" }}>
              <img src="/images/drinks/tiramisu-matcha-latte.jpg" alt="Tiramisu Matcha Latte" style={{ width: "100%", height: "auto", aspectRatio: "4 / 5", objectFit: "cover" }} />
              <figcaption style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <span style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", letterSpacing: "0.18em", textTransform: "uppercase", fontSize: "10px", color: "#c9c9c4" }}>
                  06 · Matcha
                </span>
                <span style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "19px", lineHeight: "1.2", letterSpacing: "-0.01em", color: "#f2eee6" }}>
                  Tiramisu Matcha Latte
                </span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
      {/* Find us: heading, link and one picture. Addresses are on the Locations page. */}
      <section style={{ background: "#f3f3f1", padding: "clamp(72px, 9vw, 128px) clamp(20px, 5vw, 64px)" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "flex-end", gap: "40px clamp(40px, 6vw, 96px)" }}>
          <div style={{ flex: "1 1 340px", minWidth: "0", display: "flex", flexDirection: "column", gap: "16px" }}>
            <span style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#5c5c5a" }}>
              Our locations
            </span>
            <h2 style={{ margin: "0", fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "clamp(32px, 3.6vw, 52px)", lineHeight: "1.05", letterSpacing: "-0.01em", color: "#111111" }}>
              Open daily, 11:00 to 22:00.
            </h2>
            <Link href="/locations" style={{ alignSelf: "flex-start", display: "inline-flex", alignItems: "center", minHeight: "48px", fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", letterSpacing: "0.18em", textTransform: "uppercase", fontSize: "12px", color: "#111111", textUnderlineOffset: "6px" }}>
              All locations
            </Link>
          </div>
          <img src="/images/shops/glasgow-interior.jpg" alt="Design rendering of the Glasgow shop interior: a black bar and ceiling, a timber beam carrying the Teapresso wordmark, a row of round shelves on a pale wall" style={{ flex: "1.5 1 520px", minWidth: "0", width: "100%", height: "auto", aspectRatio: "2000 / 1139", objectFit: "cover" }} />
        </div>
      </section>
      <Footer />
    </div>
  );
}
