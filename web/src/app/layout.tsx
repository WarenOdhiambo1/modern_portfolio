import type { Metadata } from "next";
import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif"
});

const sans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: {
    default: "Waren Odhiambo — Computer Science",
    template: "%s — Waren Odhiambo"
  },
  description:
    "Portfolio of Waren Odhiambo, focused on backend systems, data pipelines, cloud infrastructure, and automation.",
  keywords: [
    "Backend Engineer",
    "Cloud Architecture",
    "AWS",
    "Data Pipelines",
    "Automation",
    "AI",
    "FastAPI",
    "Django",
    "Supabase"
  ],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Waren Odhiambo — Computer Science",
    description:
      "Systems-focused engineering portfolio: backend, cloud, data, and automation.",
    url: "/",
    siteName: "Waren Odhiambo",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Waren Odhiambo — Computer Science",
    description:
      "Systems-focused engineering portfolio: backend, cloud, data, and automation."
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim();
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body className="font-sans antialiased">
        {children}
        {gaMeasurementId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaMeasurementId}');
              `}
            </Script>
          </>
        ) : null}
      </body>
    </html>
  );
}
