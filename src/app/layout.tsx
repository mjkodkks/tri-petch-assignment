import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sport Website - Creacted by Thanonphat Supho',
  description: 'Sport Website for test assignment from tri petch it solution',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
