import type { Metadata } from "next";
import Header from "../_components/Header";
import Footer from "../_components/Footer";
import ContactForm from "../_components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Send Teapresso a message: questions, press, events, feedback or franchising.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div style={{ width: "100%", background: "#ffffff", color: "#111111", fontFamily: "var(--font-jost), system-ui, sans-serif" }}>
      <Header current="/contact" />
      {/* Contact: the form only. No email, phone or social handle is shown on this page. */}
      <section style={{ padding: "clamp(48px, 7vw, 104px) clamp(20px, 5vw, 64px) clamp(72px, 9vw, 128px)" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "flex-start", gap: "40px clamp(40px, 6vw, 96px)" }}>
          <div style={{ flex: "1 1 380px", minWidth: "0", display: "flex", flexDirection: "column", gap: "28px" }}>
            <span style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#5c5c5a" }}>
              Contact us
            </span>
            <h1 style={{ margin: "0", fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "clamp(44px, 5.4vw, 80px)", lineHeight: "1.02", letterSpacing: "-0.02em" }}>
              Send us a message.
            </h1>
          </div>
          {/* Where the form is delivered is decided on the server: app/api/contact/route.ts */}
          <ContactForm />
        </div>
      </section>
      <Footer />
    </div>
  );
}
