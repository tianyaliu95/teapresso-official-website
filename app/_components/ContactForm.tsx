"use client";

import { useEnquiry } from "./useEnquiry";

/** The message form on the Contact page. Where each enquiry type is delivered is decided on the server (app/api/contact). */
export default function ContactForm() {
  const { state, message, onSubmit } = useEnquiry("contact");
  const sending = state === "sending";
  return (
    <form onSubmit={onSubmit} style={{ flex: "1.3 1 520px", minWidth: "0", background: "#f3f3f1", color: "#111111", padding: "clamp(28px, 4vw, 56px)", boxSizing: "border-box", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "24px" }}>
      <p style={{ gridColumn: "1 / -1", margin: "0", fontSize: "14px", color: "#5c5c5a" }}>Fields marked * are required.</p>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <label htmlFor="c-name" style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#3a3a38" }}>
          Full name *
        </label>
        <input id="c-name" type="text" required autoComplete="name" style={{ minHeight: "48px", padding: "0 14px", border: "1px solid #b5b5b0", background: "#ffffff", borderRadius: "0", fontSize: "16px", color: "#111111" }} name="name" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <label htmlFor="c-email" style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#3a3a38" }}>
          Email address *
        </label>
        <input id="c-email" type="email" required autoComplete="email" style={{ minHeight: "48px", padding: "0 14px", border: "1px solid #b5b5b0", background: "#ffffff", borderRadius: "0", fontSize: "16px", color: "#111111" }} name="email" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <label htmlFor="c-type" style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#3a3a38" }}>
          Enquiry type *
        </label>
        <select id="c-type" name="enquiryType" required style={{ minHeight: "48px", padding: "0 14px", border: "1px solid #b5b5b0", background: "#ffffff", borderRadius: "0", fontSize: "16px", color: "#111111" }}>
          <option value="general">General enquiry</option>
          <option value="press">{"Press & media"}</option>
          <option value="events">Events</option>
          <option value="feedback">Feedback</option>
          <option value="franchise">Franchise opportunity</option>
        </select>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <label htmlFor="c-shop" style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#3a3a38" }}>
          Shop (optional)
        </label>
        <select id="c-shop" style={{ minHeight: "48px", padding: "0 14px", border: "1px solid #b5b5b0", background: "#ffffff", borderRadius: "0", fontSize: "16px", color: "#111111" }} name="shop">
          <option>Not about a shop</option>
          <option>Manchester — Oxford Rd</option>
          <option>Leeds — The Headrow</option>
          <option>Glasgow — Byres Road</option>
          <option>Toronto (GTA) — Thornhill</option>
        </select>
      </div>
      <div style={{ gridColumn: "1 / -1", display: "flex", flexDirection: "column", gap: "8px" }}>
        <label htmlFor="c-msg" style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#3a3a38" }}>
          Message *
        </label>
        <textarea id="c-msg" rows={6} required style={{ padding: "12px 14px", border: "1px solid #b5b5b0", background: "#ffffff", borderRadius: "0", fontSize: "16px", color: "#111111", resize: "vertical" }} name="message"></textarea>
      </div>
      <div style={{ gridColumn: "1 / -1" }}>
        <button type="submit" style={{ minHeight: "48px", padding: "0 28px", background: "#111111", color: "#ffffff", border: "0", borderRadius: "0", fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "12px", letterSpacing: "0.18em", textTransform: "uppercase", cursor: "pointer" }} disabled={sending}>
          Send message
        </button>
      </div>
      <p role="status" aria-live="polite" style={{ gridColumn: "1 / -1", margin: "0", minHeight: "1.5em", fontSize: "14px", lineHeight: "1.5", color: "#3a3a38" }}>{message}</p>
    </form>
  );
}
