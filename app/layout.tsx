import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Curatorr Sounds - Independent Music Distribution & Artist Development Platform",
  description:
    "Curatorr Sounds is a leading digital music distribution platform amplifying independent artists. Discover music distribution, artist development, and music promotion services for African artists and beyond.",
  keywords:
    "Curatorr Sounds, music distribution, independent artists, digital music platform, artist development, music promotion, afrobeat distribution, music publishing, independent music label",
  generator: "v0.app",
  applicationName: "Curatorr Sounds",
  authors: [{ name: "Curatorr Sounds" }],
  creator: "Curatorr Sounds",
  publisher: "Curatorr Sounds",
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
    siteName: "Curatorr Sounds",
    title: "Curatorr Sounds - Independent Music Distribution Platform",
    description:
      "Curatorr Sounds amplifies independent artists through digital music distribution, artist development, and global music promotion. Reach 95+ countries.",
    images: [
      {
        url: "https://i.postimg.cc/1X1Mxb20/IMG-4104.png",
        width: 1200,
        height: 630,
        alt: "Curatorr Sounds - Music Distribution Platform for Independent Artists",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@curatorrsounds",
    creator: "@curatorrsounds",
    title: "Curatorr Sounds - Independent Music Distribution",
    description:
      "Curatorr Sounds amplifies independent artists through digital music distribution and artist development",
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
  classification: "Music Distribution Platform",
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
        <meta name="apple-mobile-web-app-title" content="Curatorr Sounds" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="author" content="Curatorr Sounds" />
        <meta name="distribution" content="global" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Curatorr Sounds",
              alternateName: "CURATORR SOUNDS",
              url: "https://curatorrsounds.com",
              logo: "https://curatorrsounds.com/curatorr-sounds-logo.png",
              description:
                "Curatorr Sounds is a digital music distribution company serving independent artists and record labels worldwide",
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
              foundingDate: "2024",
              areaServed: ["NG", "US", "UK", "CA", "AU", "ZA"],
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Curatorr Sounds",
              image: "https://curatorrsounds.com/curatorr-sounds-logo.png",
              description: "Independent music distribution and artist development platform",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Lagos",
                addressCountry: "NG",
              },
              telephone: "+234-806-198-9962",
              email: "curatorsoundent@gmail.com",
              url: "https://curatorrsounds.com",
              priceRange: "$$",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "50",
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
              name: "Curatorr Sounds",
              url: "https://curatorrsounds.com",
              description: "Curatorr Sounds - Independent music distribution and artist development platform",
              genre: ["Afrobeat", "Afro-Pop", "Afro-Fusion", "Hip-Hop", "R&B"],
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
                  name: "Curatorr Sounds Home",
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
                  name: "Music Catalog",
                  item: "https://linktr.ee/curatorrsounds",
                },
                {
                  "@type": "ListItem",
                  position: 4,
                  name: "Services",
                  item: "https://curatorrsounds.com#services",
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
              name: "Curatorr Sounds",
              url: "https://curatorrsounds.com",
              description: "Curatorr Sounds - Independent music distribution platform",
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
