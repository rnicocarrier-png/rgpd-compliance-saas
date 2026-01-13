import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'RGPD Compliance - SaaS',
  description: 'Conformité RGPD automatisée pour PME',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}