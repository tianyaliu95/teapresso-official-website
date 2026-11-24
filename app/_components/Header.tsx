import Link from "next/link";

const NAV = [
  { href: "/locations", label: "Our Locations" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
  { href: "/click-collect", label: "Click & Collect" },
  { href: "/menu", label: "Menu" },
  { href: "/franchising", label: "Franchising" },
];

type Props = {
  /** Route of the page being shown, e.g. "/menu". Its link is underlined. */
  current?: string;
  /** Home only: the header sits on the hero's grey ground instead of white. */
  tint?: boolean;
};

export default function Header({ current, tint = false }: Props) {
  return (
    <header
      style={{
        background: tint ? "transparent" : "#ffffff",
        padding: "0 clamp(20px, 5vw, 64px)",
        borderBottom: tint ? "1px solid rgba(17, 17, 17, 0.12)" : "1px solid #dcdcd8",
      }}
    >
      <div
        style={{
          maxWidth: "1320px",
          margin: "0 auto",
          minHeight: "72px",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "4px 32px",
          padding: "10px 0",
          boxSizing: "border-box",
        }}
      >
        <Link href="/" aria-label="Teapresso home" style={{ display: "block", lineHeight: "0" }}>
          <img src="/brand/wordmark.svg" alt="Teapresso" style={{ height: "22px", width: "auto" }} />
        </Link>
        <nav
          aria-label="Main"
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "0 24px",
            fontFamily: "var(--font-jost), sans-serif",
            fontWeight: "500",
            fontSize: "11px",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          }}
        >
          {NAV.map((item) =>
            item.href === current ? (
              <Link
                key={item.href}
                href={item.href}
                aria-current="page"
                style={{ color: "#111111", textDecoration: "underline", textUnderlineOffset: "6px", padding: "14px 0" }}
              >
                {item.label}
              </Link>
            ) : (
              <Link key={item.href} href={item.href} style={{ color: "#111111", textDecoration: "none", padding: "14px 0" }}>
                {item.label}
              </Link>
            )
          )}
        </nav>
      </div>
    </header>
  );
}
