import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import React from 'react'

import { AppSidebar } from '@/components/App-sidebar'
import Navigation from '@/components/navigation'
import { ThemeProvider } from '@/components/theme-provider'

import './globals.css'

import { SidebarProvider } from '@/components/ui/sidebar'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Hugo成长之路',
  description: 'Hugo的成长之路，记录了AI和前端知识的分享，以及生活专栏',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          <SidebarProvider>
            <AppSidebar />
            <main className="flex min-h-screen w-full flex-1 flex-col">
              <Navigation />
              {children}
              <Analytics />
              <SpeedInsights />
            </main>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
