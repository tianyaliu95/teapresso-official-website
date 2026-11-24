import Link from "next/link";

const LABEL = {
  fontFamily: "var(--font-jost), sans-serif",
  fontWeight: "500",
  fontSize: "10px",
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  color: "#5c5c5a",
} as const;

const LINK = { color: "#111111", textDecoration: "none", fontSize: "15px", lineHeight: "1.9" } as const;

const COLUMNS = [
  {
    title: "Visit",
    links: [
      { href: "/locations", label: "Our Locations" },
      { href: "/click-collect", label: "Click & Collect" },
      { href: "/menu", label: "Menu" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About Us" },
      { href: "/franchising", label: "Franchising" },
      { href: "/contact", label: "Contact Us" },
    ],
  },
];

type Props = {
  /** The line at the bottom left. The Franchising page names the franchising company here. */
  legal?: string;
};

export default function Footer({ legal = "© 2026 Teapresso" }: Props) {
  return (
    <footer
      style={{
        background: "#ffffff",
        color: "#111111",
        borderTop: "1px solid #dcdcd8",
        padding: "clamp(56px, 7vw, 96px) clamp(20px, 5vw, 64px) 32px",
      }}
    >
      <div style={{ maxWidth: "1320px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "56px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "40px" }}>
          <div style={{ flex: "1 1 260px", display: "flex", flexDirection: "column", gap: "16px" }}>
            <img src="/brand/wordmark.svg" alt="Teapresso" style={{ height: "30px", width: "auto", alignSelf: "flex-start" }} />
            <span style={{ ...LABEL, fontSize: "11px" }}>Modern Beverage Shop</span>
          </div>
          <div
            style={{
              flex: "2 1 560px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
              gap: "28px",
            }}
          >
            {COLUMNS.map((column) => (
              <div key={column.title} style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span style={{ ...LABEL, marginBottom: "6px" }}>{column.title}</span>
                {column.links.map((link) => (
                  <Link key={link.href} href={link.href} style={LINK}>
                    {link.label}
                  </Link>
                ))}
              </div>
            ))}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span style={{ ...LABEL, marginBottom: "6px" }}>Follow</span>
              <a href="https://www.instagram.com/teapresso.uk/" target="_blank" rel="noopener noreferrer" style={LINK}>
                Instagram
              </a>
            </div>
          </div>
        </div>
        <div
          style={{
            ...LABEL,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: "12px",
            borderTop: "1px solid #dcdcd8",
            paddingTop: "22px",
          }}
        >
          <span>{legal}</span>
          <Link href="/privacy" style={{ color: "#5c5c5a", textDecoration: "none" }}>
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
