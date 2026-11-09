import './globals.css'
import { Chakra_Petch } from 'next/font/google'

const chakraPetch = Chakra_Petch({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] })

export const metadata = {
  title: 'NON20 — La anomalía del 20 %',
  description: 'Uniformes para la anomalía. NON20, Callao, Perú.',
  icons: {
    icon: '/non20.png',
    apple: '/non20.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={chakraPetch.className}>{children}</body>
    </html>
  )
}
