"use client";

import { useEnquiry } from "./useEnquiry";

/** The enquiry form on the Franchising page. Where it is delivered is decided on the server (app/api/contact). */
export default function FranchiseForm() {
  const { state, message, onSubmit } = useEnquiry("franchise");
  const sending = state === "sending";
  return (
    <form onSubmit={onSubmit} style={{ flex: "1.4 1 520px", minWidth: "0", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(240px, 100%), 1fr))", gap: "24px" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <label htmlFor="f-name" style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#3a3a38" }}>
          Full name *
        </label>
        <input id="f-name" type="text" required autoComplete="name" style={{ minHeight: "48px", padding: "0 14px", border: "1px solid #b5b5b0", background: "#ffffff", borderRadius: "0", fontSize: "16px", color: "#111111" }} name="name" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <label htmlFor="f-email" style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#3a3a38" }}>
          Email address *
        </label>
        <input id="f-email" type="email" required autoComplete="email" style={{ minHeight: "48px", padding: "0 14px", border: "1px solid #b5b5b0", background: "#ffffff", borderRadius: "0", fontSize: "16px", color: "#111111" }} name="email" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <label htmlFor="f-phone" style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#3a3a38" }}>
          Phone
        </label>
        <input id="f-phone" type="tel" autoComplete="tel" style={{ minHeight: "48px", padding: "0 14px", border: "1px solid #b5b5b0", background: "#ffffff", borderRadius: "0", fontSize: "16px", color: "#111111" }} name="phone" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <label htmlFor="f-area" style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#3a3a38" }}>
          City or area
        </label>
        <input id="f-area" type="text" style={{ minHeight: "48px", padding: "0 14px", border: "1px solid #b5b5b0", background: "#ffffff", borderRadius: "0", fontSize: "16px", color: "#111111" }} name="area" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <label htmlFor="f-type" style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#3a3a38" }}>
          Enquiry type *
        </label>
        <select id="f-type" required style={{ minHeight: "48px", padding: "0 14px", border: "1px solid #b5b5b0", background: "#ffffff", borderRadius: "0", fontSize: "16px", color: "#111111" }} name="enquiryType">
          <option value="franchise">Franchise opportunity</option>
          <option value="general">General enquiry</option>
          <option value="press">{"Press & media"}</option>
          <option value="events">Events</option>
          <option value="feedback">Feedback</option>
        </select>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <label htmlFor="f-budget" style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#3a3a38" }}>
          Funds available
        </label>
        <select id="f-budget" style={{ minHeight: "48px", padding: "0 14px", border: "1px solid #b5b5b0", background: "#ffffff", borderRadius: "0", fontSize: "16px", color: "#111111" }} name="funds">
          <option value="">Choose one</option>
          <option>Under £100,000</option>
          <option>£100,000 – £200,000</option>
          <option>Over £200,000</option>
        </select>
      </div>
      <div style={{ gridColumn: "1 / -1", display: "flex", flexDirection: "column", gap: "8px" }}>
        <label htmlFor="f-msg" style={{ fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#3a3a38" }}>
          Message *
        </label>
        <textarea id="f-msg" rows={5} required style={{ padding: "12px 14px", border: "1px solid #b5b5b0", background: "#ffffff", borderRadius: "0", fontSize: "16px", color: "#111111", resize: "vertical" }} name="message"></textarea>
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
