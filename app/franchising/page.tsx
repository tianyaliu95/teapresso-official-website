import type { Metadata } from "next";
import Header from "../_components/Header";
import Footer from "../_components/Footer";
import FranchiseForm from "../_components/FranchiseForm";

export const metadata: Metadata = {
  title: "Franchising",
  description: "Open a Teapresso shop: franchise details, site guidelines, the process and an enquiry form.",
  alternates: { canonical: "/franchising" },
};

export default function FranchisingPage() {
  return (
    <div style={{ width: "100%", background: "#ffffff", color: "#111111", fontFamily: "var(--font-jost), system-ui, sans-serif" }}>
      <Header current="/franchising" />
      {/* Hero */}
      <section style={{ padding: "clamp(48px, 7vw, 104px) clamp(20px, 5vw, 64px) clamp(56px, 7vw, 96px)" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "clamp(40px, 5vw, 64px)" }}>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "32px 64px" }}>
            <div style={{ flex: "1 1 560px", minWidth: "0", display: "flex", flexDirection: "column", gap: "24px" }}>
              <span style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#5c5c5a" }}>
                Franchising — UK
              </span>
              <h1 style={{ margin: "0", fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "clamp(44px, 5.8vw, 88px)", lineHeight: "1", letterSpacing: "-0.02em" }}>
                Open a Teapresso.
              </h1>
              <p style={{ margin: "0", maxWidth: "34em", fontSize: "16px", lineHeight: "1.65", color: "#3a3a38" }}>
                Want to run a tea and coffee shop of your own, or add a modern beverage concept to a portfolio you already operate? Start here.
              </p>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px 24px", alignItems: "center" }}>
              <a href="#enquire" style={{ display: "inline-flex", alignItems: "center", minHeight: "48px", padding: "0 22px", background: "#111111", color: "#ffffff", textDecoration: "none", fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "12px", letterSpacing: "0.18em", textTransform: "uppercase" }}>
                Inquire to be a franchisee
              </a>
              <a href="#details" style={{ display: "inline-flex", alignItems: "center", minHeight: "48px", fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "12px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#111111", textUnderlineOffset: "6px" }}>
                Franchise details
              </a>
            </div>
          </div>
          <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "12px" }}>
            <img src="/images/shops/glasgow-interior.jpg" alt="Design rendering of the Glasgow shop interior: a black bar and ceiling, a timber beam carrying the Teapresso wordmark, a row of round shelves on a pale wall" style={{ width: "100%", height: "auto", aspectRatio: "2000 / 1139", objectFit: "cover" }} />
          </figure>
        </div>
      </section>
      {/* Why Teapresso */}
      <section style={{ background: "#f3f3f1", color: "#111111", padding: "clamp(72px, 9vw, 128px) clamp(20px, 5vw, 64px)" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "clamp(36px, 4vw, 56px)" }}>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "16px 64px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <span style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#5c5c5a" }}>
                01 — Why Teapresso
              </span>
              <h2 style={{ margin: "0", fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "clamp(32px, 3.6vw, 52px)", lineHeight: "1.05", letterSpacing: "-0.01em" }}>
                A system already running, not a blank page.
              </h2>
            </div>
            <p style={{ margin: "0", maxWidth: "28em", fontSize: "16px", lineHeight: "1.6", color: "#3a3a38" }}>
              Recipes, SOPs, supply and training, taken from shops already trading in the UK and Canada.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))", gap: "0 clamp(20px, 3vw, 48px)" }}>
            <div style={{ borderTop: "1px solid #111111", padding: "22px 0 36px", display: "flex", flexDirection: "column", gap: "10px" }}>
              <span style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "10px", color: "#5c5c5a" }}>01</span>
              <h3 style={{ margin: "0", fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "22px" }}>Training</h3>
              <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.6", color: "#3a3a38" }}>
                Two weeks to a month in your own shop, then up to ten working days of our team on site when you open.
              </p>
            </div>
            <div style={{ borderTop: "1px solid #111111", padding: "22px 0 36px", display: "flex", flexDirection: "column", gap: "10px" }}>
              <span style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "10px", color: "#5c5c5a" }}>02</span>
              <h3 style={{ margin: "0", fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "22px" }}>Supply</h3>
              <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.6", color: "#3a3a38" }}>
                Tea, core ingredients, equipment and packaging from us. Milk and fresh fruit are bought locally.
              </p>
            </div>
            <div style={{ borderTop: "1px solid #111111", padding: "22px 0 36px", display: "flex", flexDirection: "column", gap: "10px" }}>
              <span style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "10px", color: "#5c5c5a" }}>03</span>
              <h3 style={{ margin: "0", fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "22px" }}>Shop design</h3>
              <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.6", color: "#3a3a38" }}>
                Drawings and a fit-out specification from the design team behind our own shops.
              </p>
            </div>
            <div style={{ borderTop: "1px solid #111111", padding: "22px 0 36px", display: "flex", flexDirection: "column", gap: "10px" }}>
              <span style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "10px", color: "#5c5c5a" }}>04</span>
              <h3 style={{ margin: "0", fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "22px" }}>Systems</h3>
              <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.6", color: "#3a3a38" }}>
                Point of sale and self-order kiosks: Square in the UK, Chowbus in Canada and the US. Delivery on Uber Eats and local platforms.
              </p>
            </div>
            <div style={{ borderTop: "1px solid #111111", padding: "22px 0 36px", display: "flex", flexDirection: "column", gap: "10px" }}>
              <span style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "10px", color: "#5c5c5a" }}>05</span>
              <h3 style={{ margin: "0", fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "22px" }}>Launch and marketing</h3>
              <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.6", color: "#3a3a38" }}>
                Our operations and marketing teams plan your opening with you, and run brand campaigns across the network.
              </p>
            </div>
            <div style={{ borderTop: "1px solid #111111", padding: "22px 0 36px", display: "flex", flexDirection: "column", gap: "10px" }}>
              <span style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "10px", color: "#5c5c5a" }}>06</span>
              <h3 style={{ margin: "0", fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "22px" }}>Finance</h3>
              <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.6", color: "#3a3a38" }}>High street banks have lent to Teapresso franchisees.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Franchise details */}
      <section id="details" style={{ padding: "clamp(72px, 9vw, 128px) clamp(20px, 5vw, 64px)" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "clamp(36px, 4vw, 56px)" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <span style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#5c5c5a" }}>
              02 — Franchise details
            </span>
            <h2 style={{ margin: "0", fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "clamp(32px, 3.6vw, 52px)", lineHeight: "1.05", letterSpacing: "-0.01em" }}>
              The format and the numbers.
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(240px, 100%), 1fr))", gap: "0 32px", alignContent: "start" }}>
            <div style={{ borderTop: "1px solid #111111", padding: "20px 0 32px", display: "flex", flexDirection: "column", gap: "10px" }}>
              <span style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#5c5c5a" }}>
                Type of operation
              </span>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#3a3a38" }}>
                Tea-led beverage shop: freshly extracted milk tea and specialty coffee for dine-in, takeaway and delivery, in compact units.
              </p>
            </div>
            <div style={{ borderTop: "1px solid #111111", padding: "20px 0 32px", display: "flex", flexDirection: "column", gap: "10px" }}>
              <span style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#5c5c5a" }}>
                Number of employees
              </span>
              <p style={{ margin: "0", fontFamily: "var(--font-jost), sans-serif", fontSize: "30px", color: "#111111" }}>2–4 on shift</p>
              <p style={{ margin: "0", fontSize: "14px", lineHeight: "1.6", color: "#5c5c5a" }}>Full-time and part-time team.</p>
            </div>
            <div style={{ borderTop: "1px solid #111111", padding: "20px 0 32px", display: "flex", flexDirection: "column", gap: "10px" }}>
              <span style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#5c5c5a" }}>
                Project costs
              </span>
              <p style={{ margin: "0", fontFamily: "var(--font-jost), sans-serif", fontSize: "30px", color: "#111111" }}>£157,000 – £233,000</p>
              <p style={{ margin: "0", fontSize: "14px", lineHeight: "1.6", color: "#5c5c5a" }}>Depends on unit size, condition and location.</p>
            </div>
            <div style={{ borderTop: "1px solid #111111", padding: "20px 0 32px", display: "flex", flexDirection: "column", gap: "10px" }}>
              <span style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#5c5c5a" }}>
                Ongoing fees
              </span>
              <p style={{ margin: "0", fontFamily: "var(--font-jost), sans-serif", fontSize: "30px", color: "#111111" }}>4% + 1%</p>
              <p style={{ margin: "0", fontSize: "14px", lineHeight: "1.6", color: "#5c5c5a" }}>Royalty and marketing contribution, of gross sales.</p>
            </div>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "4px 24px", borderTop: "1px solid #dcdcd8", borderBottom: "1px solid #dcdcd8", padding: "16px 0" }}>
            <span style={{ fontSize: "15px", color: "#5c5c5a" }}>Term</span>
            <span style={{ fontFamily: "var(--font-jost), sans-serif", fontSize: "19px" }}>5 years, renewable for 5</span>
          </div>
        </div>
      </section>
      {/* Site guidelines */}
      <section style={{ background: "#f3f3f1", color: "#111111", padding: "clamp(72px, 9vw, 128px) clamp(20px, 5vw, 64px)" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "48px clamp(40px, 6vw, 96px)" }}>
          <div style={{ flex: "1 1 380px", minWidth: "0", display: "flex", flexDirection: "column", gap: "20px" }}>
            <span style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#5c5c5a" }}>
              03 — Site guidelines
            </span>
            <h2 style={{ margin: "0", fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "clamp(32px, 3.6vw, 52px)", lineHeight: "1.05", letterSpacing: "-0.01em" }}>
              Where we look.
            </h2>
            <p style={{ margin: "0", maxWidth: "28em", fontSize: "16px", lineHeight: "1.6", color: "#3a3a38" }}>
              Visible, busy locations that suit a modern beverage shop. We help you find and assess sites, and review terms before you sign.
            </p>
            <ul style={{ margin: "8px 0 0", padding: "0", listStyle: "none", display: "flex", flexDirection: "column" }}>
              <li style={{ borderTop: "1px solid #c9c9c4", padding: "14px 0", fontSize: "15px", lineHeight: "1.6", color: "#3a3a38" }}>
                In-line or end-cap retail units
              </li>
              <li style={{ borderTop: "1px solid #c9c9c4", padding: "14px 0", fontSize: "15px", lineHeight: "1.6", color: "#3a3a38" }}>
                Compact units in shopping centres, university districts, transport hubs and commercial areas
              </li>
              <li style={{ borderTop: "1px solid #c9c9c4", borderBottom: "1px solid #c9c9c4", padding: "14px 0", fontSize: "15px", lineHeight: "1.6", color: "#3a3a38" }}>
                Strong footfall through the afternoon and evening
              </li>
            </ul>
          </div>
          <dl style={{ flex: "1 1 440px", minWidth: "0", margin: "0", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(200px, 100%), 1fr))", gap: "0 32px", alignContent: "start" }}>
            <div style={{ borderTop: "1px solid #111111", padding: "20px 0 32px", display: "flex", flexDirection: "column", gap: "8px" }}>
              <dt style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#5c5c5a" }}>
                Minimum size
              </dt>
              <dd style={{ margin: "0", fontFamily: "var(--font-jost), sans-serif", fontSize: "30px" }}>50 m²</dd>
              <dd style={{ margin: "0", fontSize: "14px", color: "#5c5c5a" }}>about 540 sq ft</dd>
            </div>
            <div style={{ borderTop: "1px solid #111111", padding: "20px 0 32px", display: "flex", flexDirection: "column", gap: "8px" }}>
              <dt style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#5c5c5a" }}>
                Recommended size
              </dt>
              <dd style={{ margin: "0", fontFamily: "var(--font-jost), sans-serif", fontSize: "30px" }}>75 m²</dd>
              <dd style={{ margin: "0", fontSize: "14px", color: "#5c5c5a" }}>about 800 sq ft</dd>
            </div>
            <div style={{ borderTop: "1px solid #111111", padding: "20px 0 32px", display: "flex", flexDirection: "column", gap: "8px" }}>
              <dt style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#5c5c5a" }}>
                Frontage
              </dt>
              <dd style={{ margin: "0", fontFamily: "var(--font-jost), sans-serif", fontSize: "30px" }}>Ground floor</dd>
              <dd style={{ margin: "0", fontSize: "14px", color: "#5c5c5a" }}>with street or mall visibility</dd>
            </div>
            <div style={{ borderTop: "1px solid #111111", padding: "20px 0 32px", display: "flex", flexDirection: "column", gap: "8px" }}>
              <dt style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#5c5c5a" }}>
                Outdoor seating
              </dt>
              <dd style={{ margin: "0", fontFamily: "var(--font-jost), sans-serif", fontSize: "30px" }}>Preferred</dd>
              <dd style={{ margin: "0", fontSize: "14px", color: "#5c5c5a" }}>not required</dd>
            </div>
          </dl>
        </div>
      </section>
      {/* Process: four frames */}
      <section style={{ padding: "clamp(72px, 9vw, 128px) clamp(20px, 5vw, 64px)" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "clamp(32px, 4vw, 56px)" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <span style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#5c5c5a" }}>
              04 — Our process
            </span>
            <h2 style={{ margin: "0", fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "clamp(32px, 3.6vw, 52px)", lineHeight: "1.05", letterSpacing: "-0.01em" }}>
              From enquiry to opening day.
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(220px, 100%), 1fr))", gap: "6px" }}>
            <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "14px" }}>
              <img src="/images/craft/01-picking.jpg" alt="Leaves going into the grinder" style={{ width: "100%", height: "auto", aspectRatio: "338 / 520", objectFit: "cover" }} />
              <figcaption style={{ display: "flex", flexDirection: "column", gap: "6px", padding: "0 4px" }}>
                <span style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "10px", letterSpacing: "0.18em", color: "#5c5c5a" }}>01</span>
                <span style={{ fontFamily: "var(--font-jost), sans-serif", fontSize: "21px" }}>Application</span>
                <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#3a3a38" }}>Send your enquiry for review by our franchise team.</span>
              </figcaption>
            </figure>
            <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "14px" }}>
              <img src="/images/craft/05-selecting.jpg" alt="The tea extraction machine" style={{ width: "100%", height: "auto", aspectRatio: "338 / 520", objectFit: "cover" }} />
              <figcaption style={{ display: "flex", flexDirection: "column", gap: "6px", padding: "0 4px" }}>
                <span style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "10px", letterSpacing: "0.18em", color: "#5c5c5a" }}>02</span>
                <span style={{ fontFamily: "var(--font-jost), sans-serif", fontSize: "21px" }}>Interview</span>
                <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#3a3a38" }}>Meet our team to talk through your experience, goals and the numbers.</span>
              </figcaption>
            </figure>
            <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "14px" }}>
              <img src="/images/craft/07-pouring.jpg" alt="Tea poured into a cup" style={{ width: "100%", height: "auto", aspectRatio: "338 / 520", objectFit: "cover" }} />
              <figcaption style={{ display: "flex", flexDirection: "column", gap: "6px", padding: "0 4px" }}>
                <span style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "10px", letterSpacing: "0.18em", color: "#5c5c5a" }}>03</span>
                <span style={{ fontFamily: "var(--font-jost), sans-serif", fontSize: "21px" }}>Approval</span>
                <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#3a3a38" }}>We agree a site together and sign the franchise agreement.</span>
              </figcaption>
            </figure>
            <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "14px" }}>
              <img src="/images/craft/08-tasting.jpg" alt="A finished cup on the counter" style={{ width: "100%", height: "auto", aspectRatio: "338 / 520", objectFit: "cover" }} />
              <figcaption style={{ display: "flex", flexDirection: "column", gap: "6px", padding: "0 4px" }}>
                <span style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "10px", letterSpacing: "0.18em", color: "#5c5c5a" }}>04</span>
                <span style={{ fontFamily: "var(--font-jost), sans-serif", fontSize: "21px" }}>Grand opening</span>
                <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#3a3a38" }}>Training in your shop, then opening day with our team beside you.</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
      {/* Enquiry form */}
      <section id="enquire" style={{ background: "#f3f3f1", color: "#111111", padding: "clamp(72px, 9vw, 128px) clamp(20px, 5vw, 64px)" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "48px clamp(40px, 6vw, 96px)" }}>
          <div style={{ flex: "1 1 320px", minWidth: "0", display: "flex", flexDirection: "column", gap: "20px" }}>
            <span style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#5c5c5a" }}>
              05 — Ready to start your journey?
            </span>
            <h2 style={{ margin: "0", fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "clamp(32px, 3.6vw, 52px)", lineHeight: "1.05", letterSpacing: "-0.01em" }}>
              Send us a message.
            </h2>
            <p style={{ margin: "0", maxWidth: "26em", fontSize: "16px", lineHeight: "1.6", color: "#3a3a38" }}>
              Fill out the form and our franchise team will get back to you.
            </p>
          </div>
          {/* Where the form is delivered is decided on the server: app/api/contact/route.ts */}
          <FranchiseForm />
        </div>
      </section>
      <Footer legal="© 2026 Teapresso Franchising Ltd · Company no. 17310223" />
    </div>
  );
}
