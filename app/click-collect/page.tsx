import type { Metadata } from "next";
import ClickCollectView from "./ClickCollectView";

export const metadata: Metadata = {
  title: "Click & Collect",
  description: "Order ahead and collect at the counter. Choose your Teapresso shop to start ordering.",
  alternates: { canonical: "/click-collect" },
};

export default function ClickCollectPage() {
  return <ClickCollectView />;
}
