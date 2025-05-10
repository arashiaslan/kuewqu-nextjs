import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight, Star } from "lucide-react"
import { CurvedDivider } from "@/components/ui/curved-divider"
import { FloatingElement } from "@/components/ui/floating-element"
import { SprinklesPattern } from "@/components/ui/sprinkles-pattern"
import { CakeIcon } from "@/components/ui/cake-icon"
import { CandyIcon } from "@/components/ui/candy-icon"
import { CookieIcon } from "@/components/ui/cookie-icon"
import { CupcakeIcon } from "@/components/ui/cupcake-icon"

export default function Home() {
  // Dummy data for featured products
  const featuredProducts = [
    {
      id: 1,
      name: "Kue Lapis Legit",
      description: "Kue lapis tradisional dengan cita rasa yang kaya",
      price: 150000,
      image: "/lapis.jpeg",
    },
    {
      id: 2,
      name: "Brownies Kukus",
      description: "Brownies kukus lembut dengan topping coklat",
      price: 85000,
      image: "/brownies.jpg",
    },
    {
      id: 3,
      name: "Nastar",
      description: "Kue nastar dengan isian selai nanas homemade",
      price: 100000,
      image: "/nastar.jpg",
    },
  ]

  // Dummy data for testimonials
  const testimonials = [
    {
      id: 1,
      name: "Budi Santoso",
      text: "Kue-kue dari KuewQu selalu menjadi favorit keluarga kami. Rasanya enak dan tidak terlalu manis.",
      rating: 5,
    },
    {
      id: 2,
      name: "Siti Rahayu",
      text: "Saya selalu memesan kue lapis untuk acara keluarga. Teksturnya lembut dan aromanya harum.",
      rating: 5,
    },
    {
      id: 3,
      name: "Dian Permata",
      text: "Brownies kukusnya lembut dan tidak seret. Anak-anak saya sangat suka!",
      rating: 4,
    },
  ]

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-pink-50 to-purple-50 py-20 overflow-hidden">
        <SprinklesPattern />

        {/* Floating Cake Icons */}
        <FloatingElement
          className="absolute top-20 left-10 w-12 h-12 opacity-30 hidden md:block"
          duration={4}
          delay={0}
        >
          <CakeIcon />
        </FloatingElement>
        <FloatingElement
          className="absolute bottom-20 right-10 w-16 h-16 opacity-30 hidden md:block"
          duration={5}
          delay={1}
        >
          <CupcakeIcon fill="#fce7f3" stroke="#ec4899" />
        </FloatingElement>
        <FloatingElement
          className="absolute top-40 right-20 w-10 h-10 opacity-30 hidden md:block"
          duration={3}
          delay={0.5}
        >
          <CandyIcon />
        </FloatingElement>

        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 z-10">
              <div className="relative">
                <FloatingElement className="absolute -top-16 -left-16 w-12 h-12 opacity-70" duration={3} delay={0.2}>
                  <CookieIcon fill="#facc15" />
                </FloatingElement>
                <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 mb-4">
                  KuewQu
                </h1>
                <p className="text-xl md:text-2xl text-pink-700 mb-2">Toko Kue Rumahan</p>
                <p className="text-gray-700 mb-6 max-w-md">
                  Menyajikan berbagai kue tradisional dan modern dengan cita rasa homemade yang lezat
                </p>
                <div className="flex gap-4">
                  <Button
                    asChild
                    className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 rounded-full"
                  >
                    <Link href="/products">Lihat Produk</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-pink-500 text-pink-600 hover:bg-pink-50 rounded-full"
                  >
                    <Link href="/order">Pesan Sekarang</Link>
                  </Button>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="relative bg-white p-4 rounded-lg shadow-lg transform rotate-3 z-10">
                <img src="/bg-kuewqu.jpg?height=400&width=600" alt="Koleksi kue KuewQu" className="rounded-lg" />
              </div>
              <div className="absolute top-6 left-6 right-6 bottom-6 bg-gradient-to-r from-pink-300 to-purple-300 rounded-lg transform -rotate-3"></div>
              <FloatingElement className="absolute -bottom-10 -right-10 w-16 h-16 opacity-70" duration={4} delay={1}>
                <CandyIcon fill="#a855f7" />
              </FloatingElement>
            </div>
          </div>
        </div>
        <CurvedDivider position="bottom" fill="white" className="bottom-0" />
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div className="relative">
              <h2 className="text-3xl font-bold text-pink-800">Produk Unggulan</h2>
              <div className="h-2 w-20 bg-gradient-to-r from-pink-500 to-purple-500 mt-2 rounded-full"></div>
            </div>
            <Button asChild variant="link" className="text-pink-600">
              <Link href="/products" className="flex items-center">
                Lihat Semua <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <div key={product.id} className={`transform ${index % 2 === 1 ? "md:translate-y-8" : ""}`}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow group relative">
                  <div className="overflow-hidden">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-6 relative">
                    {index === 0 && (
                      <FloatingElement
                        className="absolute -top-6 -right-6 w-12 h-12 opacity-70"
                        duration={3}
                        delay={0.5}
                      >
                        <CupcakeIcon fill="#fce7f3" stroke="#ec4899" />
                      </FloatingElement>
                    )}
                    {index === 2 && (
                      <FloatingElement
                        className="absolute -top-6 -left-6 w-10 h-10 opacity-70"
                        duration={3}
                        delay={0.8}
                      >
                        <CookieIcon fill="#facc15" />
                      </FloatingElement>
                    )}
                    <h3 className="text-xl font-semibold text-pink-800 mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-pink-700 font-medium">Rp {product.price.toLocaleString()}</span>
                      <Button
                        asChild
                        size="sm"
                        className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 rounded-full"
                      >
                        <Link href={`/order?product=${product.id}`}>Pesan</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-50 to-blue-50 skew-y-3 transform origin-top-right"></div>
        <CurvedDivider position="top" fill="white" className="top-0" />

        <div className="container mx-auto px-4 relative z-10 pt-10">
          <div className="text-center mb-12 relative">
            <FloatingElement className="absolute -top-10 left-1/4 w-12 h-12 opacity-50" duration={4} delay={0.5}>
              <CakeIcon fill="#ec4899" />
            </FloatingElement>
            <h2 className="text-3xl font-bold text-pink-800 inline-block relative">
              Testimoni Pelanggan
              <div className="h-2 w-20 bg-gradient-to-r from-pink-500 to-purple-500 mt-2 rounded-full mx-auto"></div>
            </h2>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/3 order-2 md:order-1">
              <Card className="bg-white transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonials[0].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonials[0].text}"</p>
                  <p className="font-medium text-pink-800">{testimonials[0].name}</p>
                </CardContent>
              </Card>
            </div>

            <div className="md:w-1/3 md:-mt-10 md:mb-10 z-20 order-1 md:order-2">
              <Card className="bg-white transform rotate-0 hover:rotate-3 transition-transform duration-300 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonials[1].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonials[1].text}"</p>
                  <p className="font-medium text-pink-800">{testimonials[1].name}</p>
                </CardContent>
              </Card>
              <FloatingElement className="absolute -bottom-6 right-1/4 w-14 h-14 opacity-60" duration={3} delay={0.2}>
                <CandyIcon fill="#a855f7" />
              </FloatingElement>
            </div>

            <div className="md:w-1/3 order-3">
              <Card className="bg-white transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonials[2].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonials[2].text}"</p>
                  <p className="font-medium text-pink-800">{testimonials[2].name}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        <CurvedDivider position="bottom" fill="#e0f2fe" className="bottom-0" />
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-teal-100 to-blue-100 relative overflow-hidden">
        <SprinklesPattern className="opacity-10" />

        <FloatingElement
          className="absolute top-10 left-10 w-16 h-16 opacity-30 hidden md:block"
          duration={4}
          delay={0}
        >
          <CakeIcon fill="#ec4899" />
        </FloatingElement>
        <FloatingElement
          className="absolute bottom-10 right-10 w-14 h-14 opacity-30 hidden md:block"
          duration={5}
          delay={1}
        >
          <CookieIcon fill="#facc15" />
        </FloatingElement>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-2xl mx-auto bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold text-pink-800 mb-4">Ingin Memesan Kue untuk Acara Spesial?</h2>
            <p className="text-gray-700 mb-8">
              Kami menerima pesanan untuk berbagai acara seperti ulang tahun, pernikahan, dan acara keluarga lainnya.
              Hubungi kami untuk konsultasi menu.
            </p>
            <Button
              asChild
              className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 rounded-full"
            >
              <Link href="/order">Pesan Sekarang</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
