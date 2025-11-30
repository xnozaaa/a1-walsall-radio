import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";

export const metadata: Metadata = {
  title: "A1 Walsall Radio Taxis Ltd",
  description: "Professional taxi service in Walsall. Airport transfers, corporate accounts, school transport, and more. Available 24/7. Call 01922 644577 to book.",
  keywords: "Walsall taxis, airport transfers, corporate taxi, school transport, 24/7 taxi service",
  authors: [{ name: "A1 Walsall Radio Taxis Ltd" }],
  icons: {
    icon: [
      { url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/favicon-16x16-1764545159397.png", sizes: "16x16", type: "image/png" },
      { url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/favicon-32x32-1764545159067.png", sizes: "32x32", type: "image/png" },
      { url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/favicon-1764545159387.ico", sizes: "any", type: "image/x-icon" },
    ],
    apple: [
      { url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/apple-touch-icon-1764545159846.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
  themeColor: "#F2A93B",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://walsallradiocars.com",
    title: "A1 Walsall Radio Taxis Ltd",
    description: "Professional taxi service in Walsall. Airport transfers, corporate accounts, and more. Available 24/7.",
    siteName: "A1 Walsall Radio Taxis Ltd",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        {children}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}