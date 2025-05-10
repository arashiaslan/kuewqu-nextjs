import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Link from "next/link"
import { ThemeProvider } from "@/components/theme-provider"
import { CakeIcon } from "@/components/ui/cake-icon"
import { CandyIcon } from "@/components/ui/candy-icon"
import { FloatingElement } from "@/components/ui/floating-element"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "KuewQu - Toko Kue Rumahan",
  description: "Toko kue rumahan dengan berbagai pilihan kue tradisional dan modern",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <header className="bg-white/90 backdrop-blur-sm border-b border-pink-100 sticky top-0 z-10">
              <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                  <Link
                    href="/"
                    className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 flex items-center"
                  >
                    <CakeIcon className="w-8 h-8 mr-2" />
                    KuewQu
                  </Link>
                  <nav className="hidden md:flex space-x-8">
                    <Link href="/" className="text-pink-700 hover:text-pink-900 relative group">
                      Beranda
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                    <Link href="/products" className="text-pink-700 hover:text-pink-900 relative group">
                      Produk
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                    <Link href="/order" className="text-pink-700 hover:text-pink-900 relative group">
                      Pesan
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </nav>
                  <div className="md:hidden">{/* Mobile menu button would go here */}</div>
                </div>
              </div>
            </header>

            {children}

            <footer className="bg-gradient-to-r from-pink-600 to-purple-600 text-white py-12 mt-auto relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="footer-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                      <circle cx="20" cy="20" r="2" fill="white" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#footer-pattern)" />
                </svg>
              </div>

              <FloatingElement
                className="absolute top-10 left-10 w-16 h-16 opacity-20 hidden md:block"
                duration={4}
                delay={0}
              >
                <CakeIcon fill="white" />
              </FloatingElement>
              <FloatingElement
                className="absolute bottom-10 right-10 w-16 h-16 opacity-20 hidden md:block"
                duration={5}
                delay={1}
              >
                <CandyIcon fill="white" />
              </FloatingElement>

              <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4 flex items-center">
                      <CakeIcon className="w-6 h-6 mr-2" fill="white" />
                      KuewQu
                    </h3>
                    <p className="mb-4">
                      Toko kue rumahan yang menyajikan berbagai kue tradisional dan modern dengan cita rasa homemade
                      yang lezat.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">Menu</h3>
                    <ul className="space-y-2">
                      <li>
                        <Link href="/" className="hover:text-white relative group inline-block">
                          Beranda
                          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/products" className="hover:text-white relative group inline-block">
                          Produk
                          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/order" className="hover:text-white relative group inline-block">
                          Pesan
                          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">Kontak</h3>
                    <p className="mb-2">Jl. Kue Lezat No. 123</p>
                    <p className="mb-2">Jakarta, Indonesia</p>
                    <p className="mb-2">Telp: 081234567890</p>
                    <p className="mb-2">Email: info@kuewqu.com</p>
                  </div>
                </div>
                <div className="border-t border-pink-400 mt-8 pt-8 text-center">
                  <p>&copy; {new Date().getFullYear()} KuewQu. Hak Cipta Dilindungi.</p>
                </div>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
