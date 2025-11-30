import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";

export const metadata: Metadata = {
  title: "A1 Walsall Radio Taxis Ltd | 24/7 Taxi Service in Walsall",
  description: "Professional taxi service in Walsall. Airport transfers, corporate accounts, school transport, and more. Available 24/7. Call 01922 644577 to book.",
  keywords: "Walsall taxis, airport transfers, corporate taxi, school transport, 24/7 taxi service",
  authors: [{ name: "A1 Walsall Radio Taxis Ltd" }],
  icons: {
    icon: [
      { url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/321dc789-f6df-4a18-a342-76c745235fcf/generated_images/simple-bold-favicon-icon-design-for-taxi-330345eb-20251130232104.jpg", sizes: "32x32", type: "image/jpeg" },
      { url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/321dc789-f6df-4a18-a342-76c745235fcf/generated_images/simple-bold-favicon-icon-design-for-taxi-330345eb-20251130232104.jpg", sizes: "16x16", type: "image/jpeg" },
    ],
    apple: [
      { url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/321dc789-f6df-4a18-a342-76c745235fcf/generated_images/apple-touch-icon-design-for-taxi-company-92f026b7-20251130232105.jpg", sizes: "180x180", type: "image/jpeg" },
    ],
  },
  manifest: "/manifest.json",
  themeColor: "#F2A93B",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://walsallradiocars.com",
    title: "A1 Walsall Radio Taxis Ltd | 24/7 Taxi Service",
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