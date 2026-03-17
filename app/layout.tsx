import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'GeoGain Tools — Free AI Tools',
  description: 'Free AI-powered tools: Prompt Optimizer, Reply Generator, FAQ Generator, Blog Title Generator. No signup required.',
  openGraph: {
    title: 'GeoGain Tools — Free AI Tools',
    description: 'Free AI-powered tools for content creators and professionals. No signup required.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased min-h-screen">
        {children}
      </body>
    </html>
  )
}
