"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"
import { ArrowLeft, Check } from "lucide-react"
import { SprinklesPattern } from "@/components/ui/sprinkles-pattern"
import { FloatingElement } from "@/components/ui/floating-element"
import { CakeIcon } from "@/components/ui/cake-icon"
import { CandyIcon } from "@/components/ui/candy-icon"
import { CookieIcon } from "@/components/ui/cookie-icon"
import { CupcakeIcon } from "@/components/ui/cupcake-icon"

// Dummy products data
const products = [
  {
    id: 1,
    name: "Kue Lapis Legit",
    price: 150000,
  },
  {
    id: 2,
    name: "Brownies Kukus",
    price: 85000,
  },
  {
    id: 3,
    name: "Nastar",
    price: 100000,
  },
  {
    id: 4,
    name: "Bolu Pandan",
    price: 75000,
  },
  {
    id: 5,
    name: "Kue Putri Salju",
    price: 90000,
  },
  {
    id: 6,
    name: "Bika Ambon",
    price: 120000,
  },
  {
    id: 7,
    name: "Cheesecake",
    price: 200000,
  },
  {
    id: 8,
    name: "Kue Lumpur",
    price: 80000,
  },
]

export default function OrderPage() {
  const searchParams = useSearchParams()
  const productId = searchParams.get("product")

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    product: productId || "",
    quantity: "1",
    notes: "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  // Calculate total price
  const selectedProduct = products.find((p) => p.id.toString() === formData.product)
  const totalPrice = selectedProduct ? selectedProduct.price * Number.parseInt(formData.quantity) : 0

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value) => {
    setFormData((prev) => ({ ...prev, product: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Validate form
    if (!formData.name || !formData.phone || !formData.address || !formData.product || !formData.quantity) {
      toast({
        title: "Error",
        description: "Mohon lengkapi semua field yang diperlukan",
        variant: "destructive",
      })
      return
    }

    // In a real app, you would submit the form data to a server here
    console.log("Form submitted:", formData)

    // Show success message
    setIsSubmitted(true)
    toast({
      title: "Pesanan Berhasil",
      description: "Terima kasih! Pesanan Anda telah kami terima.",
      variant: "default",
    })
  }

  return (
    <main className="min-h-screen bg-gradient-to-r from-pink-50 to-purple-50 py-12 relative">
      <Toaster />
      <SprinklesPattern className="opacity-10" />

      <FloatingElement className="absolute top-20 right-10 w-12 h-12 opacity-30 hidden md:block" duration={4} delay={0}>
        <CakeIcon />
      </FloatingElement>
      <FloatingElement
        className="absolute bottom-20 left-10 w-16 h-16 opacity-30 hidden md:block"
        duration={5}
        delay={1}
      >
        <CupcakeIcon fill="#fce7f3" stroke="#ec4899" />
      </FloatingElement>

      <div className="container mx-auto px-4">
        <div className="mb-6 flex items-center">
          <Button asChild variant="ghost" className="mb-4 mr-4">
            <Link href="/products" className="flex items-center text-pink-600">
              <ArrowLeft className="mr-2 h-4 w-4" /> Kembali ke Produk
            </Link>
          </Button>
          <h1 className="text-3xl font-bold text-pink-800">Form Pemesanan</h1>
          <FloatingElement className="ml-4 w-10 h-10" duration={3} delay={0.5}>
            <CandyIcon />
          </FloatingElement>
        </div>

        {!isSubmitted ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <Card className="relative overflow-hidden">
                <div className="absolute -right-8 -bottom-8 opacity-5 w-40 h-40">
                  <CakeIcon />
                </div>

                <CardHeader>
                  <CardTitle>Informasi Pesanan</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="name">Nama Lengkap</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Masukkan nama lengkap"
                          required
                          className="rounded-md"
                        />
                      </div>

                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Masukkan email"
                          className="rounded-md"
                        />
                      </div>

                      <div>
                        <Label htmlFor="phone">Nomor Telepon</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Masukkan nomor telepon"
                          required
                          className="rounded-md"
                        />
                      </div>

                      <div>
                        <Label htmlFor="address">Alamat Pengiriman</Label>
                        <Textarea
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          placeholder="Masukkan alamat lengkap"
                          required
                          className="rounded-md"
                        />
                      </div>

                      <div>
                        <Label htmlFor="product">Pilih Produk</Label>
                        <Select value={formData.product} onValueChange={handleSelectChange}>
                          <SelectTrigger className="rounded-md">
                            <SelectValue placeholder="Pilih produk" />
                          </SelectTrigger>
                          <SelectContent>
                            {products.map((product) => (
                              <SelectItem key={product.id} value={product.id.toString()}>
                                {product.name} - Rp {product.price.toLocaleString()}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="quantity">Jumlah</Label>
                        <Input
                          id="quantity"
                          name="quantity"
                          type="number"
                          min="1"
                          value={formData.quantity}
                          onChange={handleChange}
                          required
                          className="rounded-md"
                        />
                      </div>

                      <div>
                        <Label htmlFor="notes">Catatan Tambahan</Label>
                        <Textarea
                          id="notes"
                          name="notes"
                          value={formData.notes}
                          onChange={handleChange}
                          placeholder="Tambahkan catatan khusus untuk pesanan Anda"
                          className="rounded-md"
                        />
                      </div>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 rounded-full"
                    >
                      Pesan Sekarang
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="sticky top-4 bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    Ringkasan Pesanan
                    <FloatingElement className="ml-2 w-8 h-8" duration={3} delay={0.2}>
                      <CookieIcon fill="#facc15" />
                    </FloatingElement>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-500">Produk</p>
                      <p className="font-medium">{selectedProduct ? selectedProduct.name : "Belum dipilih"}</p>
                    </div>

                    <div>
                      <p className="text-sm text-gray-500">Jumlah</p>
                      <p className="font-medium">{formData.quantity}</p>
                    </div>

                    <div>
                      <p className="text-sm text-gray-500">Harga Satuan</p>
                      <p className="font-medium">
                        {selectedProduct ? `Rp ${selectedProduct.price.toLocaleString()}` : "-"}
                      </p>
                    </div>

                    <div className="pt-4 border-t">
                      <p className="text-sm text-gray-500">Total</p>
                      <p className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
                        Rp {totalPrice.toLocaleString()}
                      </p>
                    </div>

                    <div className="pt-4 text-sm text-gray-600">
                      <p>* Pembayaran dilakukan melalui transfer bank</p>
                      <p>* Pengiriman hanya tersedia untuk area tertentu</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        ) : (
          <Card className="max-w-md mx-auto bg-white/90 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute -right-8 -top-8 opacity-10 w-32 h-32">
              <CakeIcon />
            </div>
            <div className="absolute -left-8 -bottom-8 opacity-10 w-32 h-32">
              <CandyIcon />
            </div>

            <CardContent className="pt-6">
              <div className="text-center">
                <div className="mx-auto w-16 h-16 bg-gradient-to-r from-green-100 to-teal-100 rounded-full flex items-center justify-center mb-4">
                  <Check className="h-8 w-8 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 mb-2">
                  Pesanan Berhasil!
                </h2>
                <p className="text-gray-600 mb-6">
                  Terima kasih telah memesan di KuewQu. Kami akan menghubungi Anda segera untuk konfirmasi pesanan.
                </p>
                <Button
                  asChild
                  className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 rounded-full"
                >
                  <Link href="/">Kembali ke Beranda</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </main>
  )
}
