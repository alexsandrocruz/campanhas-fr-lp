import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://campanhas.fabioribeiroadvogados.com.br'),
  // Subdominio de trafego pago nao deve competir com o institucional no Google.
  robots: { index: false, follow: false },
  icons: {
    icon: [{ url: '/favicon.webp', type: 'image/webp', sizes: '32x32' }],
  },
}

const PIXEL = process.env.NEXT_PUBLIC_META_PIXEL_ID
const GA4 = process.env.NEXT_PUBLIC_GA4_ID
const ADS = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID

// GA4 e Google Ads usam o mesmo gtag.js: carrega uma vez, configura os dois.
const GTAG = GA4 || ADS

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}

        {PIXEL && (
          <>
            <Script id="meta-pixel" strategy="afterInteractive">
              {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init','${PIXEL}');fbq('track','PageView');`}
            </Script>
            <noscript>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                height="1"
                width="1"
                alt=""
                style={{ display: 'none' }}
                src={`https://www.facebook.com/tr?id=${PIXEL}&ev=PageView&noscript=1`}
              />
            </noscript>
          </>
        )}

        {GTAG && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GTAG}`}
              strategy="afterInteractive"
            />
            <Script id="gtag" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}
gtag('js',new Date());
${GA4 ? `gtag('config','${GA4}');` : ''}
${ADS ? `gtag('config','${ADS}');` : ''}`}
            </Script>
          </>
        )}
      </body>
    </html>
  )
}
