"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search } from "lucide-react"
import { SprinklesPattern } from "@/components/ui/sprinkles-pattern"
import { FloatingElement } from "@/components/ui/floating-element"
import { CakeIcon } from "@/components/ui/cake-icon"
import { CandyIcon } from "@/components/ui/candy-icon"
import { CookieIcon } from "@/components/ui/cookie-icon"
import { CupcakeIcon } from "@/components/ui/cupcake-icon"

// Dummy data for products
const products = [
  {
    id: 1,
    name: "Kue Lapis Legit",
    description: "Kue lapis tradisional dengan cita rasa yang kaya",
    price: 150000,
    category: "kue-tradisional",
    image: "/lapis.jpeg",
  },
  {
    id: 2,
    name: "Brownies Kukus",
    description: "Brownies kukus lembut dengan topping coklat",
    price: 85000,
    category: "kue-modern",
    image: "/brownies.jpg",
  },
  {
    id: 3,
    name: "Nastar",
    description: "Kue nastar dengan isian selai nanas homemade",
    price: 100000,
    category: "kue-kering",
    image: "/nastar.jpg",
  },
  {
    id: 4,
    name: "Bolu Pandan",
    description: "Bolu pandan lembut dengan aroma pandan alami",
    price: 75000,
    category: "kue-basah",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 5,
    name: "Kue Putri Salju",
    description: "Kue putri salju dengan taburan gula halus",
    price: 90000,
    category: "kue-kering",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 6,
    name: "Bika Ambon",
    description: "Bika ambon dengan tekstur berserat dan rasa yang manis",
    price: 120000,
    category: "kue-tradisional",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 7,
    name: "Cheesecake",
    description: "Cheesecake lembut dengan topping buah segar",
    price: 200000,
    category: "kue-modern",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 8,
    name: "Kue Lumpur",
    description: "Kue lumpur dengan topping kismis",
    price: 80000,
    category: "kue-basah",
    image: "/placeholder.svg?height=200&width=300",
  },
]

// Categories
const categories = [
  { id: "semua", name: "Semua" },
  { id: "kue-tradisional", name: "Kue Tradisional" },
  { id: "kue-modern", name: "Kue Modern" },
  { id: "kue-kering", name: "Kue Kering" },
  { id: "kue-basah", name: "Kue Basah" },
]

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("semua")
  const [searchQuery, setSearchQuery] = useState("")

  // Filter products based on category and search query
  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "semua" || product.category === selectedCategory
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <main className="min-h-screen bg-gradient-to-r from-pink-50 to-purple-50 py-12 relative">
      <SprinklesPattern className="opacity-10" />

      <FloatingElement className="absolute top-20 left-10 w-12 h-12 opacity-30 hidden md:block" duration={4} delay={0}>
        <CakeIcon />
      </FloatingElement>
      <FloatingElement
        className="absolute bottom-20 right-10 w-16 h-16 opacity-30 hidden md:block"
        duration={5}
        delay={1}
      >
        <CupcakeIcon fill="#fce7f3" stroke="#ec4899" />
      </FloatingElement>

      <div className="container mx-auto px-4">
        <div className="flex items-center mb-8">
          <h1 className="text-3xl font-bold text-pink-800">Daftar Produk</h1>
          <FloatingElement className="ml-4 w-10 h-10" duration={3} delay={0.5}>
            <CandyIcon />
          </FloatingElement>
        </div>

        {/* Search and Filter */}
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-sm mb-8 relative overflow-hidden">
          <div className="absolute -right-8 -bottom-8 opacity-10 w-32 h-32">
            <CookieIcon />
          </div>

          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Cari produk..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Badge
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                className={`cursor-pointer ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600"
                    : "hover:bg-pink-100"
                } rounded-full px-4 py-2`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </Badge>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <Card
                key={product.id}
                className={`overflow-hidden bg-white hover:shadow-lg transition-all duration-300 group relative ${
                  index % 3 === 1
                    ? "md:transform md:translate-y-6"
                    : index % 3 === 2
                      ? "md:transform md:translate-y-12"
                      : ""
                }`}
              >
                <div className="overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-pink-800">{product.name}</h3>
                    <Badge className="bg-teal-100 text-teal-800 hover:bg-teal-200 rounded-full">
                      {categories.find((c) => c.id === product.category)?.name}
                    </Badge>
                  </div>
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

                {/* Add random cake icons to some cards */}
                {index % 4 === 0 && (
                  <div className="absolute -top-4 -right-4 w-12 h-12 opacity-70 transform rotate-12">
                    <CupcakeIcon fill="#fce7f3" stroke="#ec4899" />
                  </div>
                )}
                {index % 4 === 2 && (
                  <div className="absolute -bottom-4 -left-4 w-12 h-12 opacity-70 transform -rotate-12">
                    <CookieIcon fill="#facc15" />
                  </div>
                )}
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white/80 backdrop-blur-sm rounded-lg">
            <p className="text-gray-600">Tidak ada produk yang ditemukan.</p>
          </div>
        )}
      </div>
    </main>
  )
}
