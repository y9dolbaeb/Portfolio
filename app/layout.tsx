import type { Metadata } from 'next'
import { DM_Sans, Sora } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import { LanguageProvider } from '@/lib/language-context'
import './globals.css'

// Main font - professional and readable
const dmSans = DM_Sans({ 
  subsets: ['latin', 'latin-ext'],
  variable: '--font-dm-sans',
  weight: ['400', '500', '600', '700']
})

// Heading font - modern and bold
const sora = Sora({ 
  subsets: ['latin', 'latin-ext'],
  variable: '--font-sora',
  weight: ['400', '500', '600', '700', '800']
})

export const metadata: Metadata = {
  title: 'Portfolio | UI/UX Designer & Frontend Developer',
  description: 'Creative UI/UX designer and frontend developer. Creating modern, interactive web interfaces with attention to detail.',
  generator: 'v0.app',
  keywords: ['UI/UX', 'designer', 'frontend', 'React', 'Next.js', 'portfolio'],
  authors: [{ name: 'Your Name' }],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${dmSans.variable} ${sora.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
