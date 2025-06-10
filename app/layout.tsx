import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'pendampinganperizinanumkm',
  description: 'Created with v0',
  generator: 'v0.dev',
  icons: {
    icon: '/logo-umkm.png', // jika kamu pakai favicon.ico, gunakan '/favicon.ico'
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  )
}
