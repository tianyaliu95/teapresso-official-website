import type { Metadata } from "next";
import Link from "next/link";
import Header from "../_components/Header";
import Footer from "../_components/Footer";

export const metadata: Metadata = {
  title: "Our Locations",
  description: "Find your nearest Teapresso: Manchester, Leeds, Glasgow and Toronto, with new shops opening soon. Open daily, 11:00 to 22:00.",
  alternates: { canonical: "/locations" },
};

export default function LocationsPage() {
  return (
    <div style={{ width: "100%", background: "#ffffff", color: "#111111", fontFamily: "var(--font-jost), system-ui, sans-serif" }}>
      <Header current="/locations" />
      {/* Title */}
      <section style={{ padding: "clamp(56px, 8vw, 120px) clamp(20px, 5vw, 64px) clamp(40px, 5vw, 72px)" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "24px 64px" }}>
          <div style={{ flex: "1 1 560px", minWidth: "0", display: "flex", flexDirection: "column", gap: "20px" }}>
            <span style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#5c5c5a" }}>
              Our locations — 3 countries
            </span>
            <h1 style={{ margin: "0", fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "clamp(44px, 5.8vw, 88px)", lineHeight: "1", letterSpacing: "-0.02em" }}>
              Find your nearest Teapresso.
            </h1>
          </div>
          <div style={{ display: "flex", gap: "32px", fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <span style={{ fontFamily: "var(--font-jost), sans-serif", fontSize: "40px", letterSpacing: "0", color: "#111111" }}>04</span>
              <span style={{ color: "#5c5c5a" }}>Open</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <span style={{ fontFamily: "var(--font-jost), sans-serif", fontSize: "40px", letterSpacing: "0", color: "#111111" }}>07</span>
              <span style={{ color: "#5c5c5a" }}>Opening soon</span>
            </div>
          </div>
        </div>
      </section>
      {/* United Kingdom */}
      <section style={{ padding: "0 clamp(20px, 5vw, 64px) clamp(56px, 7vw, 96px)" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "8px 24px", padding: "16px 0", borderTop: "1px solid #111111", fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase" }}>
            <span style={{ color: "#111111" }}>01 — United Kingdom</span>
            <span style={{ color: "#5c5c5a" }}>3 open · 4 opening soon</span>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "8px 32px", borderTop: "1px solid #dcdcd8", padding: "28px 0" }}>
            <div style={{ flex: "1 1 300px", display: "flex", flexDirection: "column", gap: "4px" }}>
              <h2 style={{ margin: "0", fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "34px" }}>Manchester</h2>
              <span style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#5c5c5a" }}>
                Oxford Rd
              </span>
            </div>
            <p style={{ flex: "1 1 280px", margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#3a3a38" }}>
              149–153 Oxford Rd
              <br />
              Manchester M1 7EE
            </p>
            <p style={{ flex: "0 0 200px", margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#3a3a38" }}>
              Mon–Sun
              <br />
              11:00–22:00
            </p>
            <a href="https://www.google.com/maps/search/?api=1&query=149-153+Oxford+Rd+Manchester+M1+7EE" style={{ flex: "0 0 auto", display: "inline-flex", alignItems: "center", minHeight: "44px", padding: "0 18px", border: "1px solid #111111", color: "#111111", textDecoration: "none", fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase" }}>
              Get directions
            </a>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "8px 32px", borderTop: "1px solid #dcdcd8", padding: "28px 0" }}>
            <div style={{ flex: "1 1 300px", display: "flex", flexDirection: "column", gap: "4px" }}>
              <h2 style={{ margin: "0", fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "34px" }}>Leeds</h2>
              <span style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#5c5c5a" }}>
                The Headrow
              </span>
            </div>
            <p style={{ flex: "1 1 280px", margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#3a3a38" }}>
              61 The Headrow
              <br />
              Leeds LS1 6LR
            </p>
            <p style={{ flex: "0 0 200px", margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#3a3a38" }}>
              Mon–Sun
              <br />
              11:00–22:00
            </p>
            <a href="https://www.google.com/maps/search/?api=1&query=61+The+Headrow+Leeds+LS1+6LR" style={{ flex: "0 0 auto", display: "inline-flex", alignItems: "center", minHeight: "44px", padding: "0 18px", border: "1px solid #111111", color: "#111111", textDecoration: "none", fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase" }}>
              Get directions
            </a>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "8px 32px", borderTop: "1px solid #dcdcd8", padding: "28px 0" }}>
            <div style={{ flex: "1 1 300px", display: "flex", flexDirection: "column", gap: "4px" }}>
              <h2 style={{ margin: "0", fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "34px" }}>Glasgow</h2>
              <span style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#5c5c5a" }}>
                Byres Road
              </span>
            </div>
            <p style={{ flex: "1 1 280px", margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#3a3a38" }}>
              100 Byres Rd
              <br />
              Glasgow G12 8TA
            </p>
            <p style={{ flex: "0 0 200px", margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#3a3a38" }}>
              Mon–Sun
              <br />
              11:00–22:00
            </p>
            <a href="https://www.google.com/maps/search/?api=1&query=100+Byres+Rd+Glasgow+G12+8TA" style={{ flex: "0 0 auto", display: "inline-flex", alignItems: "center", minHeight: "44px", padding: "0 18px", border: "1px solid #111111", color: "#111111", textDecoration: "none", fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase" }}>
              Get directions
            </a>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "8px 32px", borderTop: "1px solid #dcdcd8", padding: "28px 0" }}>
            <div style={{ flex: "1 1 300px", display: "flex", flexDirection: "column", gap: "4px" }}>
              <h2 style={{ margin: "0", fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "34px", color: "#5c5c5a" }}>Manchester</h2>
              <span style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#5c5c5a" }}>
                Teapresso Lab
              </span>
            </div>
            <p style={{ flex: "1 1 280px", margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#5c5c5a" }}>
              City Tower, Manchester
              <br />
              New drinks are developed and tested here first.
            </p>
            <p style={{ flex: "0 0 200px", margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#5c5c5a" }}>
              Mon–Sun
              <br />
              11:00–22:00
            </p>
            <span style={{ flex: "0 0 auto", display: "inline-flex", alignItems: "center", minHeight: "44px", padding: "0 18px", border: "1px dashed #b5b5b0", color: "#5c5c5a", fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase" }}>
              Opening soon
            </span>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "8px 32px", borderTop: "1px solid #dcdcd8", padding: "28px 0" }}>
            <div style={{ flex: "1 1 300px", display: "flex", flexDirection: "column", gap: "4px" }}>
              <h2 style={{ margin: "0", fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "34px", color: "#5c5c5a" }}>Leeds</h2>
              <span style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#5c5c5a" }}>
                Teapresso Matcha Bar
              </span>
            </div>
            <p style={{ flex: "1 1 280px", margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#5c5c5a" }}>
              Victoria Gate, Leeds
              <br />
              A counter for the matcha series. Every Teapresso shop serves the series too.
            </p>
            <p style={{ flex: "0 0 200px", margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#5c5c5a" }}>Hours to follow</p>
            <span style={{ flex: "0 0 auto", display: "inline-flex", alignItems: "center", minHeight: "44px", padding: "0 18px", border: "1px dashed #b5b5b0", color: "#5c5c5a", fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase" }}>
              Opening soon
            </span>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "8px 32px", borderTop: "1px solid #dcdcd8", padding: "28px 0" }}>
            <div style={{ flex: "1 1 300px", display: "flex", flexDirection: "column", gap: "4px" }}>
              <h2 style={{ margin: "0", fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "34px", color: "#5c5c5a" }}>Cardiff</h2>
            </div>
            <p style={{ flex: "1 1 280px", margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#5c5c5a" }}>
              91 Queen St
              <br />
              Cardiff CF10 2BG
            </p>
            <p style={{ flex: "0 0 200px", margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#5c5c5a" }}>Hours to follow</p>
            <span style={{ flex: "0 0 auto", display: "inline-flex", alignItems: "center", minHeight: "44px", padding: "0 18px", border: "1px dashed #b5b5b0", color: "#5c5c5a", fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase" }}>
              Opening soon
            </span>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "8px 32px", borderTop: "1px solid #dcdcd8", padding: "28px 0" }}>
            <div style={{ flex: "1 1 300px", display: "flex", flexDirection: "column", gap: "4px" }}>
              <h2 style={{ margin: "0", fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "34px", color: "#5c5c5a" }}>Edinburgh</h2>
            </div>
            <p style={{ flex: "1 1 280px", margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#5c5c5a" }}>
              12 Clerk St
              <br />
              Edinburgh EH8 9HX
            </p>
            <p style={{ flex: "0 0 200px", margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#5c5c5a" }}>Hours to follow</p>
            <span style={{ flex: "0 0 auto", display: "inline-flex", alignItems: "center", minHeight: "44px", padding: "0 18px", border: "1px dashed #b5b5b0", color: "#5c5c5a", fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase" }}>
              Opening soon
            </span>
          </div>
        </div>
      </section>
      {/* Canada */}
      <section style={{ padding: "0 clamp(20px, 5vw, 64px) clamp(56px, 7vw, 96px)" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "8px 24px", padding: "16px 0", borderTop: "1px solid #111111", fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase" }}>
            <span style={{ color: "#111111" }}>02 — Canada</span>
            <span style={{ color: "#5c5c5a" }}>1 open · 1 opening soon</span>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "8px 32px", borderTop: "1px solid #dcdcd8", padding: "28px 0" }}>
            <div style={{ flex: "1 1 300px", display: "flex", flexDirection: "column", gap: "4px" }}>
              <h2 style={{ margin: "0", fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "34px" }}>Toronto (GTA)</h2>
              <span style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#5c5c5a" }}>
                Thornhill
              </span>
            </div>
            <p style={{ flex: "1 1 280px", margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#3a3a38" }}>
              505 Hwy 7 #16
              <br />
              Thornhill, ON L3T 7T1
            </p>
            <p style={{ flex: "0 0 200px", margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#3a3a38" }}>
              Mon–Sun
              <br />
              11:00–22:00
            </p>
            <a href="https://www.google.com/maps/search/?api=1&query=505+Highway+7+East+Unit+16+Thornhill+ON" style={{ flex: "0 0 auto", display: "inline-flex", alignItems: "center", minHeight: "44px", padding: "0 18px", border: "1px solid #111111", color: "#111111", textDecoration: "none", fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase" }}>
              Get directions
            </a>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "8px 32px", borderTop: "1px solid #dcdcd8", padding: "28px 0" }}>
            <div style={{ flex: "1 1 300px", display: "flex", flexDirection: "column", gap: "4px" }}>
              <h2 style={{ margin: "0", fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "34px", color: "#5c5c5a" }}>Vancouver</h2>
            </div>
            <p style={{ flex: "1 1 280px", margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#5c5c5a" }}>Address to follow</p>
            <p style={{ flex: "0 0 200px", margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#5c5c5a" }}>Hours to follow</p>
            <span style={{ flex: "0 0 auto", display: "inline-flex", alignItems: "center", minHeight: "44px", padding: "0 18px", border: "1px dashed #b5b5b0", color: "#5c5c5a", fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase" }}>
              Opening soon
            </span>
          </div>
        </div>
      </section>
      {/* USA */}
      <section style={{ padding: "0 clamp(20px, 5vw, 64px) clamp(72px, 9vw, 128px)" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "8px 24px", padding: "16px 0", borderTop: "1px solid #111111", fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase" }}>
            <span style={{ color: "#111111" }}>03 — USA</span>
            <span style={{ color: "#5c5c5a" }}>2 opening soon</span>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "8px 32px", borderTop: "1px solid #dcdcd8", padding: "28px 0" }}>
            <div style={{ flex: "1 1 300px", display: "flex", flexDirection: "column", gap: "4px" }}>
              <h2 style={{ margin: "0", fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "34px", color: "#5c5c5a" }}>Lexington</h2>
              <span style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#5c5c5a" }}>
                Kentucky
              </span>
            </div>
            <p style={{ flex: "1 1 280px", margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#5c5c5a" }}>
              401–407 S Limestone St
              <br />
              Lexington, KY
            </p>
            <p style={{ flex: "0 0 200px", margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#5c5c5a" }}>Hours to follow</p>
            <span style={{ flex: "0 0 auto", display: "inline-flex", alignItems: "center", minHeight: "44px", padding: "0 18px", border: "1px dashed #b5b5b0", color: "#5c5c5a", fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase" }}>
              Opening soon
            </span>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: "8px 32px", borderTop: "1px solid #dcdcd8", borderBottom: "1px solid #dcdcd8", padding: "28px 0" }}>
            <div style={{ flex: "1 1 300px", display: "flex", flexDirection: "column", gap: "4px" }}>
              <h2 style={{ margin: "0", fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "34px", color: "#5c5c5a" }}>Orlando</h2>
              <span style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#5c5c5a" }}>
                Florida
              </span>
            </div>
            <p style={{ flex: "1 1 280px", margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#5c5c5a" }}>Address to follow</p>
            <p style={{ flex: "0 0 200px", margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#5c5c5a" }}>Hours to follow</p>
            <span style={{ flex: "0 0 auto", display: "inline-flex", alignItems: "center", minHeight: "44px", padding: "0 18px", border: "1px dashed #b5b5b0", color: "#5c5c5a", fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase" }}>
              Opening soon
            </span>
          </div>
        </div>
      </section>
      {/* Order strip */}
      <section style={{ background: "#f3f3f1", color: "#111111", padding: "clamp(56px, 7vw, 96px) clamp(20px, 5vw, 64px)" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "24px 48px" }}>
          <h2 style={{ margin: "0", fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "clamp(28px, 3vw, 44px)", lineHeight: "1.1" }}>
            Order ahead, collect at the counter.
          </h2>
          <Link href="/click-collect" style={{ display: "inline-flex", alignItems: "center", minHeight: "48px", padding: "0 22px", background: "#111111", color: "#ffffff", textDecoration: "none", fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "12px", letterSpacing: "0.18em", textTransform: "uppercase" }}>
            {"Click & Collect"}
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}
