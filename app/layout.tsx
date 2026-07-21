import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const siteUrl = 'https://edinsonpalacio.dev'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Edinson Palacio — Desarrollador de Software',
    template: '%s | Edinson Palacio',
  },
  icons: {
      icon: '/apple-icon.png',
      shortcut: '/apple-icon.png',
      apple: '/apple-icon.png',
    },
  description:
    'Portafolio de Edinson Palacio, desarrollador de software especializado en backend (Java, Python/Django, PHP) y frontend (React, JavaScript). Construyo aplicaciones web escalables y de alto rendimiento.',
  keywords: [
    'Edinson Palacio',
    'Desarrollador de Software',
    'Desarrollador Backend',
    'Desarrollador Full Stack',
    'React',
    'Java',
    'Python',
    'Django',
    'PHP',
    'Portafolio',
  ],
  authors: [{ name: 'Edinson Palacio' }],
  creator: 'Edinson Palacio',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: siteUrl,
    title: 'Edinson Palacio — Desarrollador de Software',
    description:
      'Desarrollador de software enfocado en resultados. Backend, frontend y bases de datos. Aplicaciones escalables y limpias.',
    siteName: 'Edinson Palacio',
    images: [
      {
        url: '/foto.jpg',
        width: 1200,
        height: 1200,
        alt: 'Edinson Palacio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Edinson Palacio — Desarrollador de Software',
    description:
      'Desarrollador de software enfocado en resultados. Backend, frontend y bases de datos.',
    images: ['/edinson-profile.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Edinson Palacio',
  jobTitle: 'Desarrollador de Software',
  url: siteUrl,
  image: `${siteUrl}/edinson-profile.png`,
  sameAs: [
    'https://github.com/edinsonpalacio',
    'https://www.linkedin.com/in/edinsonpalacio',
  ],
  knowsAbout: [
    'Java',
    'Python',
    'Django',
    'PHP',
    'React',
    'JavaScript',
    'MySQL',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning className={`${inter.variable} bg-background`}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
