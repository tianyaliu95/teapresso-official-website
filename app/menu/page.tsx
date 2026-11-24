import { Fragment } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Header from "../_components/Header";
import Footer from "../_components/Footer";

export const metadata: Metadata = {
  title: "Menu",
  description: "The Teapresso menu: tea lattes, tea frappes, matcha, brown sugar boba, yoghurt smoothies, iced lemon tea and coffee.",
  alternates: { canonical: "/menu" },
};

type Drink = {
  name: string;
  /** What is in it. */
  made?: string;
  /** Hot, cold or both. */
  served?: string;
  /** File name in /public/images/drinks, without ".jpg". Defaults to the drink's name in lower case with dashes. */
  photo?: string;
};

type Series = {
  id: string;
  name: string;
  note: string;
  about: string;
  groups: { label?: string; drinks: Drink[] }[];
};

const SERIES: Series[] = [
  {
    id: "tea-latte",
    name: "Tea Latte",
    note: "Hot or cold · Light or strong tea",
    about: "Whole-leaf tea, extracted by the cup, with fresh milk.",
    groups: [
      {
        drinks: [
          { name: "Jasmine Snow Tea Latte", made: "Jasmine tea · Fresh milk" },
          { name: "Orchid Tea Latte", made: "Orchid green tea · Fresh milk" },
          { name: "Rose Tea Latte", made: "Rose tea · Fresh milk" },
          { name: "Earl Grey Tea Latte", made: "Earl Grey tea · Fresh milk" },
          { name: "Peach Tea Latte", made: "White peach oolong tea · Fresh milk" },
          { name: "Osmanthus Tea Latte", made: "Osmanthus oolong · Fresh milk" },
          { name: "Oolong Tea Latte", made: "Rock oolong tea · Fresh milk" },
          { name: "Glutinous Rice Tea Latte", made: "Glutinous rice green tea · Fresh milk" },
        ],
      },
    ],
  },
  {
    id: "tea-frappe",
    name: "Tea Frappe",
    note: "Served cold",
    about: "Extracted tea and fresh milk, finished with a cream top.",
    groups: [
      {
        drinks: [
          { name: "Jasmine Snow Tea Frappe", made: "Jasmine tea · Fresh milk · Cream top" },
          { name: "Rose Lychee Tea Frappe", made: "Rose tea · Lychee · Fresh milk · Strawberry cream top" },
          { name: "Strawberry Peach Tea Frappe", made: "Peach tea · Strawberry · Fresh milk · Strawberry cream top" },
          { name: "Caramel Oolong Tea Frappe", made: "Oolong tea · Caramel · Fresh milk · Cream top" },
        ],
      },
    ],
  },
  {
    id: "matcha",
    name: "Matcha",
    note: "In every shop",
    about: "Uji matcha with milk. On the menu at every Teapresso shop.",
    groups: [
      {
        drinks: [
          { name: "Ube Matcha Latte", made: "Uji matcha · Blueberry · Ube · Fresh milk" },
          { name: "Brown Sugar Boba Matcha Latte", made: "Uji matcha · Brown sugar boba · Fresh milk" },
          { name: "Strawberry Matcha Latte", made: "Uji matcha · Fresh strawberry jam · Fresh milk" },
          { name: "Mango Coconut Matcha Latte", made: "Uji matcha · Fresh mango jam · Coconut milk" },
          { name: "Sea Salt Caramel Pistachio Matcha Latte", made: "Uji matcha · Sea salt caramel · Pistachio cream · Pistachio milk" },
          { name: "Tiramisu Matcha Latte", made: "Uji matcha · Chocolate butter · Cocoa powder · Cheese foam · Fresh milk" },
        ],
      },
    ],
  },
  {
    id: "brown-sugar-boba",
    name: "Brown Sugar Boba",
    note: "Served cold",
    about: "Brown sugar boba with fresh milk.",
    groups: [
      {
        drinks: [
          { name: "Brown Sugar Milk Boba", made: "Brown sugar boba · Fresh milk" },
          { name: "Roasted Brown Sugar Milk Boba", made: "Cheese foam · Brown sugar powder · Brown sugar boba · Fresh milk" },
          { name: "Rose Brown Sugar Boba Milk Tea", made: "Rose tea · Brown sugar boba · Fresh milk" },
          { name: "Ube Brown Sugar Milk Boba", made: "Ube · Brown sugar boba · Fresh milk" },
          { name: "Tiramisu Brown Sugar Milk Boba", made: "Cheese foam · Cocoa powder · Brown sugar boba · Fresh milk" },
          { name: "Pistachio Brown Sugar Milk Boba", made: "Pistachio milk · Brown sugar boba" },
        ],
      },
    ],
  },
  {
    id: "yoghurt-smoothie",
    name: "Yoghurt Smoothie",
    note: "Served cold",
    about: "Natural yoghurt blended with fruit.",
    groups: [
      {
        drinks: [
          { name: "Avocado Yoghurt Smoothie", made: "A whole avocado · Natural yoghurt · Cream" },
          { name: "Earth Yoghurt Smoothie", made: "Banana · Phycocyanin · Natural yoghurt · Cream" },
          { name: "Berry Blast Yoghurt Smoothie", made: "Strawberry · Blueberry · Natural yoghurt · Cream" },
          { name: "Purple Rice Yoghurt Smoothie", made: "Purple rice · Natural yoghurt · Cream" },
        ],
      },
    ],
  },
  {
    id: "iced-lemon-tea",
    name: "Iced Lemon Tea",
    note: "Served cold",
    about: "Tea and lemon over ice.",
    groups: [{ drinks: [{ name: "Iced Oolong Lemon Tea", made: "Oolong tea · Lemon" }] }],
  },
  {
    id: "coffee",
    name: "Coffee",
    note: "Hot drinks come in one size",
    about: "A medium-roast blend, ground fresh for each cup.",
    groups: [
      {
        label: "Classic",
        drinks: [
          { name: "Americano", served: "Cold" },
          { name: "Latte", served: "Cold or hot" },
          { name: "Cappuccino", served: "Hot" },
          // Mocha and Caramel Macchiato share a photo with another drink until each has its own.
          { name: "Mocha", served: "Cold or hot", photo: "caramel-oat-milk-latte" },
          { name: "Caramel Macchiato", served: "Cold or hot", photo: "brown-sugar-latte" },
        ],
      },
      {
        label: "Signature",
        drinks: [
          { name: "Tiramisu Latte", served: "Cold or hot" },
          { name: "White Mocha Ube Latte", served: "Cold" },
          { name: "Brown Sugar Latte", served: "Cold" },
          { name: "Sea Salt Caramel Pistachio Latte", served: "Cold or hot" },
          { name: "Caramel Oat Milk Latte", served: "Cold or hot" },
        ],
      },
      {
        label: "Not coffee",
        drinks: [
          { name: "Iced Peach Tea", served: "Cold" },
          { name: "Matcha Latte", served: "Cold or hot" },
        ],
      },
    ],
  },
];

const EXTRAS = [
  { label: "Toppings", text: "Cream top · Cheese foam · Coconut jelly · Purple rice · Pecan nuts · Strawberry chews · Pearls · Water chestnut popping" },
  { label: "For matcha", text: "Extra matcha · Matcha cloud topping · Cheese foam" },
  { label: "For coffee", text: "Extra flavoured syrup · Extra espresso shot" },
  { label: "Milk", text: "Oat milk or coconut milk, on request" },
  { label: "Sweetness", text: "120% · Normal · 70% · 50% · 30% · None" },
  { label: "Allergens", text: "If you have an allergy or a dietary requirement, please tell a member of staff before you order." },
];

// The cups that float round the title, cut out of their backgrounds. Nineteen, each one once.
// Files are in /public/images/cups. The outer ring turns one way, the inner ring the other.
const OUTER_RING = ["snow-cup", "mango-matcha", "ube-boba", "avocado", "summer-frappe", "oolong-lemon", "coffee", "tiramisu-matcha", "berry", "roasted-boba", "lemon-tea"];
const INNER_RING = ["strawberry-matcha", "americano", "yogurt-can", "ube-matcha", "cappuccino", "pistachio-boba", "peach-tea", "purple-rice"];
const OUTER_TURN_S = 72; // one full turn of each ring, in seconds: twice the half-swing set in globals.css
const INNER_TURN_S = 54;

const LABEL = {
  fontFamily: "var(--font-jost), sans-serif",
  fontWeight: "500",
  fontSize: "11px",
  letterSpacing: "0.18em",
  textTransform: "uppercase",
} as const;

const HEADING = {
  margin: "0",
  fontFamily: "var(--font-jost), sans-serif",
  fontWeight: "500",
  fontSize: "clamp(36px, 4.2vw, 60px)",
  lineHeight: "1",
  letterSpacing: "-0.02em",
} as const;

const SOLID_BUTTON = {
  display: "inline-flex",
  alignItems: "center",
  minHeight: "48px",
  padding: "0 22px",
  background: "#111111",
  color: "#ffffff",
  textDecoration: "none",
  fontFamily: "var(--font-jost), sans-serif",
  fontWeight: "500",
  fontSize: "12px",
  letterSpacing: "0.18em",
  textTransform: "uppercase",
} as const;

const INDEX_LINK = { display: "inline-flex", alignItems: "center", minHeight: "44px", color: "#111111", textDecoration: "none" } as const;

const photoOf = (drink: Drink) => `/images/drinks/${drink.photo ?? drink.name.toLowerCase().replace(/ /g, "-")}.jpg`;

/** One ring of floating cups. Two alternating swings, a quarter turn apart, make each cup travel an ellipse. */
function Ring({ cups, ring, turn, reverse }: { cups: string[]; ring: "mp-a" | "mp-b"; turn: number; reverse: boolean }) {
  return (
    <>
      {cups.map((cup, k) => {
        const dx = (-k * turn) / cups.length;
        const dy = dx + (reverse ? turn / 4 : -turn / 4) - (reverse ? turn : 0);
        return (
          <div key={cup} className={`mp-orb ${ring}`} style={{ animationDelay: `${dx.toFixed(2)}s` }}>
            <div className="mp-bob" style={{ animationDelay: `${dy.toFixed(2)}s` }}>
              <img className="mp-card" src={`/images/cups/${cup}.webp`} alt="" style={{ transform: "translate(-50%, -50%)" }} />
            </div>
          </div>
        );
      })}
    </>
  );
}

function DrinkRow({ drink }: { drink: Drink }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "20px", borderTop: "1px solid #dcdcd8", padding: "14px 0" }}>
      <img src={photoOf(drink)} alt={drink.name} loading="lazy" style={{ flex: "0 0 96px", width: "96px", height: "120px", objectFit: "cover" }} />
      <div style={{ flex: "1 1 auto", minWidth: "0", display: "flex", flexDirection: "column", gap: "6px" }}>
        <h3 style={{ margin: "0", fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "21px", lineHeight: "1.2", letterSpacing: "-0.01em" }}>
          {drink.name}
        </h3>
        {drink.made ? <p style={{ margin: "0", fontSize: "14px", lineHeight: "1.5", color: "#5c5c5a" }}>{drink.made}</p> : null}
      </div>
      {drink.served ? <span style={{ ...LABEL, flex: "0 0 auto", fontSize: "10px", color: "#5c5c5a" }}>{drink.served}</span> : null}
    </div>
  );
}

export default function MenuPage() {
  return (
    <div className="mp-root" style={{ width: "100%", background: "#ffffff", color: "#111111", fontFamily: "var(--font-jost), system-ui, sans-serif" }}>
      <Header current="/menu" />

      {/* Title: the cups float round the word on two rings, one each way */}
      <section className="mp-stage" aria-label="Menu">
        <Ring cups={OUTER_RING} ring="mp-a" turn={OUTER_TURN_S} reverse={false} />
        <Ring cups={INNER_RING} ring="mp-b" turn={INNER_TURN_S} reverse />
        <div className="mp-title">
          <span style={{ ...LABEL, color: "#5c5c5a" }}>Teapresso — in every shop</span>
          <h1 style={{ margin: "0", fontFamily: "var(--font-jost), sans-serif", fontWeight: "500", fontSize: "max(56px, 9cqw)", lineHeight: "0.95", letterSpacing: "-0.03em", color: "#111111" }}>
            Menu.
          </h1>
        </div>
      </section>

      {/* Series index */}
      <section style={{ padding: "0 clamp(20px, 5vw, 64px) clamp(48px, 6vw, 80px)" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "16px 48px" }}>
          <nav aria-label="Series" style={{ ...LABEL, display: "flex", flexWrap: "wrap", gap: "0 26px" }}>
            {SERIES.map((series) => (
              <a key={series.id} href={`#${series.id}`} style={INDEX_LINK}>
                {series.name}
              </a>
            ))}
            <a href="#extras" style={INDEX_LINK}>
              Toppings and extras
            </a>
          </nav>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "12px 22px" }}>
            <p style={{ margin: "0", maxWidth: "30em", fontSize: "14px", lineHeight: "1.55", color: "#5c5c5a" }}>
              {"Prices and today's availability are on each shop's ordering page."}
            </p>
            <Link href="/click-collect" style={SOLID_BUTTON}>
              Order from your shop
            </Link>
          </div>
        </div>
      </section>

      {SERIES.map((series, i) => (
        <section key={series.id} id={series.id} style={{ padding: "0 clamp(20px, 5vw, 64px) clamp(56px, 7vw, 96px)" }}>
          <div style={{ maxWidth: "1320px", margin: "0 auto", display: "flex", flexDirection: "column" }}>
            <div style={{ ...LABEL, display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "8px 24px", padding: "16px 0", borderTop: "1px solid #111111" }}>
              <span style={{ color: "#111111" }}>
                {String(i + 1).padStart(2, "0")} — {series.name}
              </span>
              <span style={{ color: "#5c5c5a" }}>{series.note}</span>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "12px 48px", padding: "clamp(20px, 3vw, 40px) 0 clamp(20px, 2.4vw, 32px)" }}>
              <h2 style={HEADING}>{series.name}.</h2>
              <p style={{ margin: "0", maxWidth: "26em", fontSize: "16px", lineHeight: "1.6", color: "#3a3a38" }}>{series.about}</p>
            </div>
            {series.groups.map((group, g) => (
              <Fragment key={group.label ?? g}>
                {group.label ? <span style={{ ...LABEL, color: "#111111", padding: "26px 0 12px" }}>{group.label}</span> : null}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(min(480px, 100%), 1fr))",
                    columnGap: "clamp(24px, 4vw, 64px)",
                    borderBottom: "1px solid #dcdcd8",
                  }}
                >
                  {group.drinks.map((drink) => (
                    <DrinkRow key={drink.name} drink={drink} />
                  ))}
                </div>
              </Fragment>
            ))}
          </div>
        </section>
      ))}

      {/* Toppings and extras */}
      <section id="extras" style={{ background: "#f3f3f1", color: "#111111", padding: "clamp(64px, 8vw, 112px) clamp(20px, 5vw, 64px)" }}>
        <div style={{ maxWidth: "1320px", margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "flex-start", gap: "32px clamp(32px, 6vw, 96px)" }}>
          <div style={{ flex: "0 1 320px", minWidth: "0", display: "flex", flexDirection: "column", gap: "16px" }}>
            <span style={{ ...LABEL, color: "#5c5c5a" }}>08 — Make it yours</span>
            <h2 style={HEADING}>Toppings and extras.</h2>
          </div>
          <div style={{ flex: "1 1 480px", minWidth: "0", display: "flex", flexDirection: "column", borderBottom: "1px solid #c9c9c4" }}>
            {EXTRAS.map((extra) => (
              <div key={extra.label} style={{ display: "flex", flexWrap: "wrap", gap: "6px 32px", borderTop: "1px solid #c9c9c4", padding: "18px 0" }}>
                <span style={{ ...LABEL, flex: "0 0 200px", color: "#5c5c5a" }}>{extra.label}</span>
                <p style={{ flex: "1 1 320px", margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#111111" }}>{extra.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
