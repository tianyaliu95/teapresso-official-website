import type { Metadata } from "next";
import Link from "next/link";
import Header from "../_components/Header";
import Footer from "../_components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Teapresso collects, uses and protects your personal information, and how to withdraw consent.",
  alternates: { canonical: "/privacy" },
};

// `contact` is the start of a sentence that ends with a link to the contact form.
type Block = { heading?: string; text?: string[]; list?: string[]; contact?: string };

// The policy text follows the previous site. The postal address and the email address
// it used to give are replaced by a link to the contact form.
const SECTIONS: { title: string; blocks: Block[] }[] = [
  {
    title: "What Do We Do With Your Information?",
    blocks: [
      {
        text: [
          "When you purchase something from Teapresso, as part of the buying and selling process, we collect the personal information you provide, such as your name, address, and email address.",
          "When you browse our store, we also automatically receive your computer's Internet Protocol (IP) address to help us understand your browser and operating system for improved user experience.",
          "With your permission, we may send you emails about our store, new products, or promotional updates.",
        ],
      },
    ],
  },
  {
    title: "Consent",
    blocks: [
      {
        heading: "How do you give consent?",
        text: [
          "When you provide personal information to complete a transaction—such as placing an order or requesting a delivery—we assume you consent to us collecting and using it for that specific reason only.",
          "If we ask for your information for a secondary reason (e.g., marketing), we will ask for your express consent or give you an opportunity to opt out.",
        ],
      },
      {
        heading: "How to withdraw consent:",
        contact: "You may withdraw your consent at any time by sending us a message through",
      },
    ],
  },
  {
    title: "Disclosure",
    blocks: [{ text: ["We may disclose your personal information if required by law or if you violate our Terms of Service."] }],
  },
  {
    title: "E-Commerce Platform",
    blocks: [
      {
        text: [
          "Our online store is powered by Square, which provides the secure infrastructure to sell products and process transactions.",
          "Your data is stored securely via Square's encrypted systems, which comply with industry-standard security protocols.",
          "If you complete your transaction through a direct payment gateway, Square securely stores your payment details. All payment information is encrypted and processed in compliance with the Payment Card Industry Data Security Standard (PCI-DSS).",
          "For more details, please refer to Square's Privacy Policy.",
        ],
      },
    ],
  },
  {
    title: "Third-Party Services",
    blocks: [
      {
        text: [
          "Third-party providers used by Teapresso will only collect, use, or disclose your personal information to the extent required for the services they provide to us (e.g., payment gateways or delivery platforms).",
          "Some providers may operate in jurisdictions different from yours or ours, and your information may be subject to the laws of those regions.",
          "Once you leave our website or are redirected to a third-party platform, this Privacy Policy no longer applies.",
        ],
      },
      {
        heading: "Google Analytics:",
        text: ["We use Google Analytics to gain insights into who visits our site and which pages are viewed, helping us improve our services."],
      },
    ],
  },
  {
    title: "Security",
    blocks: [
      {
        text: [
          "To protect your personal data, we take reasonable precautions and follow industry best practices to prevent it from being lost, misused, accessed, disclosed, altered, or destroyed.",
          "When you provide credit card information, it is encrypted using SSL (Secure Socket Layer) and stored securely. Although no online system is 100% secure, we comply with PCI-DSS requirements and implement additional safeguards.",
        ],
      },
    ],
  },
  {
    title: "Cookies",
    blocks: [
      {
        text: ["We use cookies to enhance your browsing experience. These may include:"],
        list: [
          "_session_id – stores session information",
          "_secure_session_id – ensures secure login",
          "Google cookies – track visitor behaviour and traffic sources",
        ],
      },
      { text: ["You may choose to opt out by adjusting your browser settings."] },
    ],
  },
  {
    title: "Age of Consent",
    blocks: [
      {
        text: [
          "By using this site, you confirm that you are at least the age of majority in your country or region, or that you have given us consent to allow any minor dependents to use this site under your supervision.",
        ],
      },
    ],
  },
  {
    title: "Changes to This Policy",
    blocks: [
      {
        text: [
          "We reserve the right to modify this Privacy Policy at any time. Changes will take immediate effect upon being posted. If we make significant changes, we will update this page to reflect them.",
          "If Teapresso is acquired or merged with another business, your personal data may be transferred to the new owners so we can continue serving you.",
        ],
      },
    ],
  },
  {
    title: "Questions & Contact",
    blocks: [{ text: ["Teapresso HQ"], contact: "Send us a message through" }],
  },
];

const LABEL = {
  fontFamily: "var(--font-jost), sans-serif",
  fontWeight: "500",
  fontSize: "11px",
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  color: "#5c5c5a",
} as const;

const BODY = { margin: "0", maxWidth: "38em", fontSize: "16px", lineHeight: "1.65", color: "#3a3a38" } as const;

export default function PrivacyPage() {
  return (
    <div style={{ width: "100%", background: "#ffffff", color: "#111111", fontFamily: "var(--font-jost), system-ui, sans-serif" }}>
      <Header />

      <section style={{ padding: "clamp(56px, 8vw, 120px) clamp(20px, 5vw, 64px) clamp(40px, 5vw, 72px)" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "20px" }}>
          <span style={LABEL}>Privacy</span>
          <h1 style={{ margin: "0", fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "clamp(44px, 5.8vw, 88px)", lineHeight: "1", letterSpacing: "-0.02em" }}>
            Privacy Policy.
          </h1>
          <p style={{ margin: "0", maxWidth: "30em", fontFamily: "var(--font-jost), sans-serif", fontWeight: "300", fontSize: "clamp(20px, 1.9vw, 27px)", lineHeight: "1.35" }}>
            Your privacy is important to us. Learn how we collect, use, and protect your personal information.
          </p>
        </div>
      </section>

      <section style={{ padding: "0 clamp(20px, 5vw, 64px) clamp(72px, 9vw, 128px)" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "flex", flexDirection: "column", borderBottom: "1px solid #dcdcd8" }}>
          {SECTIONS.map((section, i) => (
            <div key={section.title} style={{ display: "flex", flexWrap: "wrap", gap: "16px clamp(32px, 6vw, 96px)", borderTop: "1px solid #dcdcd8", padding: "32px 0" }}>
              <div style={{ flex: "1 1 320px", minWidth: "0", display: "flex", flexDirection: "column", gap: "10px" }}>
                <span style={LABEL}>{String(i + 1).padStart(2, "0")}</span>
                <h2 style={{ margin: "0", fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "26px", lineHeight: "1.15", letterSpacing: "-0.01em" }}>
                  {section.title}
                </h2>
              </div>
              <div style={{ flex: "1.6 1 480px", minWidth: "0", display: "flex", flexDirection: "column", gap: "14px" }}>
                {section.blocks.map((block, b) => (
                  <div key={block.heading ?? b} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    {block.heading ? (
                      <h3 style={{ margin: "6px 0 0", fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "17px" }}>{block.heading}</h3>
                    ) : null}
                    {block.text?.map((paragraph) => (
                      <p key={paragraph} style={BODY}>
                        {paragraph}
                      </p>
                    ))}
                    {block.contact ? (
                      <p style={BODY}>
                        {block.contact}{" "}
                        <Link href="/contact" style={{ color: "inherit", textUnderlineOffset: "3px" }}>
                          the contact form
                        </Link>
                        .
                      </p>
                    ) : null}
                    {block.list ? (
                      <ul style={{ ...BODY, paddingLeft: "1.2em", display: "flex", flexDirection: "column", gap: "6px" }}>
                        {block.list.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
