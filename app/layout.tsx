import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "CURATORR SOUNDS - Independent Music Distribution & Artist Development",
  description:
    "Amplifying Independent Artists - Digital music distribution, artist development, and music promotion. Discover exceptional music from independent artists worldwide.",
  keywords:
    "music distribution, independent artists, digital music, music publishing, artist development, music promotion, afrobeat, streaming",
  generator: "v0.app",
  applicationName: "CURATORR SOUNDS",
  authors: [{ name: "CURATORR SOUNDS" }],
  creator: "CURATORR SOUNDS",
  publisher: "CURATORR SOUNDS",
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  icons: {
    icon: "/assets/curatorr-sounds-logo.png",
    apple: "/assets/curatorr-sounds-logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://curatorrsounds.com",
    siteName: "CURATORR SOUNDS",
    title: "CURATORR SOUNDS - Independent Music Distribution & Artist Development",
    description:
      "Amplifying Independent Artists - Digital music distribution, artist development, and music promotion. Discover exceptional music from independent artists worldwide.",
    images: [
      {
        url: "https://i.postimg.cc/1X1Mxb20/IMG-4104.png",
        width: 1200,
        height: 630,
        alt: "CURATORR SOUNDS - Music Distribution Platform",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@curatorrsounds",
    creator: "@curatorrsounds",
    title: "CURATORR SOUNDS - Independent Music Distribution",
    description: "Amplifying Independent Artists - Digital music distribution and artist development",
    images: ["https://i.postimg.cc/1X1Mxb20/IMG-4104.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://curatorrsounds.com",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  category: "Music",
  classification: "Music Distribution",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="CURATORR SOUNDS" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "CURATORR SOUNDS",
              url: "https://curatorrsounds.com",
              logo: "https://curatorrsounds.com/curatorr-sounds-logo.png",
              description: "Digital music distribution company serving independent artists and record labels",
              sameAs: [
                "https://www.instagram.com/curatorr.sounds",
                "https://twitter.com/curatorrsounds",
                "https://linktr.ee/curatorrsounds",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Customer Service",
                email: "curatorsoundent@gmail.com",
                telephone: "+234-806-198-9962",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Lagos",
                addressCountry: "NG",
              },
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MusicGroup",
              name: "CURATORR SOUNDS",
              url: "https://curatorrsounds.com",
              description: "Independent music distribution and artist development platform",
              genre: ["Afrobeat", "Afro-Pop", "Afro-Fusion"],
              sameAs: ["https://open.spotify.com/artist/curatorrsounds", "https://www.instagram.com/curatorr.sounds"],
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://curatorrsounds.com",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Artists",
                  item: "https://curatorrsounds.com#artists",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Catalog",
                  item: "https://linktr.ee/curatorrsounds",
                },
              ],
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "CURATORR SOUNDS",
              url: "https://curatorrsounds.com",
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: "https://curatorrsounds.com/search?q={search_term_string}",
                },
                query_input: "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense
          fallback={
            <div className="min-h-screen bg-background flex items-center justify-center">
              <div className="text-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
                <p className="text-muted-foreground">Loading...</p>
              </div>
            </div>
          }
        >
          {children}
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
