import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Toaster } from "@/components/ui/toaster"
import SmoothScroll from '@/components/SmoothScroll'
import CustomCursor from '@/components/CustomCursor'
import CustomScrollbar from '@/components/CustomScrollbar'
import Preloader from '@/components/Preloader'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'VITB MUN Club',
  description: 'Official website of the VITB Model United Nations Club',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Preloader />
          <SmoothScroll>
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-grow">
                {children}
              </main>
              <Footer />
            </div>
          </SmoothScroll>
          <CustomCursor />
          <CustomScrollbar />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}

