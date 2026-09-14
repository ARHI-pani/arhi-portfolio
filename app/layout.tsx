import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Press_Start_2P, Space_Grotesk } from 'next/font/google'
import './globals.css'

const pixel = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-pixel',
  display: 'swap',
})

const sans = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Aryapriya Panigrahi — Creative Portfolio',
  description:
    'Portfolio of Aryapriya Panigrahi, a Production Engineering student at VSSUT Burla exploring manufacturing, CAD/CAM, and software development.',
  generator: 'v0.app',
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
  },
  verification: {
    google: "C9eC0J2ybQUlZ4q3Qy67AfhRJOu0rcq9a4BFeJqmflg",
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#ff5f5a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${pixel.variable} ${sans.variable}`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
