import { Bebas_Neue, DM_Sans } from 'next/font/google'
import './globals.css'

const display = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
})

const body = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
})

export const metadata = {
  title: 'RunToSpain — Excursions Espagne depuis Montpellier',
  description: 'Partez à La Jonquera, Mercado El Pertús et Empuriabrava depuis Montpellier, Sète et Béziers. Réservez votre place en ligne. 49 € A/R.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${display.variable} ${body.variable}`}>
      <body className="bg-brand-dark text-white font-body antialiased">
        {children}
      </body>
    </html>
  )
}
