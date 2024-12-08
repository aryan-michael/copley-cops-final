import type { Metadata } from 'next'

import { cn } from 'src/utilities/cn'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import React from 'react'

import { AdminBar } from '@/components/AdminBar'
import { Footer } from '@/Footer/Component'
import { Header } from '@/Header/Component'
import { LivePreviewListener } from '@/components/LivePreviewListener'
import { Providers } from '@/providers'
import { InitTheme } from '@/providers/Theme/InitTheme'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import { draftMode } from 'next/headers'
import {ThemeProvider} from "./(Components)/ThemeProvider"
import Navbar from "./(Components)/Navbar"
import { Toaster } from "react-hot-toast";
import { Roboto } from "next/font/google";

import './globals.css'
import { getServerSideURL } from '@/utilities/getURL'


const Robotos = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { isEnabled } = await draftMode()

  return (
    // <html className={cn(GeistSans.variable, GeistMono.variable)} lang="en" suppressHydrationWarning>
    <html  lang="en" suppressHydrationWarning>
      <head>
        <InitTheme />
        <link href="/favicon.ico" rel="icon" sizes="32x32" />
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
      </head>
      <body suppressHydrationWarning className={`${Robotos.variable} box-border antialiased font-mono`}>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
 <Navbar />
 <section className="max-w-6xl mx-auto w-full p-2">
        <Providers>
          <AdminBar
            adminBarProps={{
              preview: isEnabled,
            }}
          />
          <LivePreviewListener />

          {/* <Header /> */}
          <Toaster
                position="top-right"
                toastOptions={{
                  duration: 5000,
                }}
              />
          {children}
          {/* <Footer /> */}
        </Providers>
        </section>
        </ThemeProvider>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  metadataBase: new URL(getServerSideURL()),
  openGraph: mergeOpenGraph(),
  twitter: {
    card: 'summary_large_image',
    creator: '@payloadcms',
  },
}
