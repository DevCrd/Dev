import "./globals.css"
import { Inter } from "next/font/google"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { ThemeProvider } from "./components/ThemeProvider"
import MouseFollower from "./components/MouseFollower"
import ParticlesBackground from "./components/ParticlesBackground"
import type React from "react" // Added import for React

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "DevCrd - Code with Precision. Build with Vision.",
  description:
    "DevCrd is a technology solutions provider specializing in scalable software development, cloud infrastructure, and DevOps automation.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <ParticlesBackground />
          <MouseFollower />
          <Header />
          <main className="flex-grow pt-16">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

