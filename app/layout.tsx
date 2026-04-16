import type { Metadata } from 'next'
import { Cairo } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { CartProvider } from '@/context/cart-context'
import './globals.css'

// 👇 FontAwesome fix (أضفه هنا)
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'

config.autoAddCss = false

const cairo = Cairo({ 
  subsets: ['arabic', 'latin'],
  variable: '--font-cairo',
})

export const metadata: Metadata = {
  title: 'بوكو لوكو | حلويات فاخرة',
  description: 'حلويات طازجة… تجربة ما بتنساها - أفضل الحلويات والمشروبات والآيس كريم',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl" className="bg-background">
      <body className={`${cairo.className} font-sans antialiased`}>
        <CartProvider>
          {children}
        </CartProvider>

        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}