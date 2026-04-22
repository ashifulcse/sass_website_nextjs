import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "FlowPilot CRM | Modern CRM for Growth Teams",
    template: "%s | FlowPilot CRM",
  },
  description:
    "FlowPilot CRM helps sales, customer success, and revenue operations teams close faster with automation, forecasting, and a shared customer view.",
  keywords: [
    "CRM",
    "SaaS CRM",
    "sales pipeline software",
    "customer relationship management",
    "revenue operations",
  ],
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "FlowPilot CRM | Modern CRM for Growth Teams",
    description:
      "A modern CRM landing experience built for conversion, speed, and trust.",
    siteName: "FlowPilot CRM",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FlowPilot CRM | Modern CRM for Growth Teams",
    description:
      "Close more deals with automation, forecasting, and a CRM your team actually enjoys using.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/icon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#2563eb",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
