"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ChevronLeft, ChevronRight, Phone, Facebook, Instagram, Mail, MapPin } from "lucide-react"
import Image from "next/image"

export default function ArtesaniasWebsite() {
  const [currentPage, setCurrentPage] = useState("inicio")

  const products = Array(6).fill({
    name: "Producto 1",
    price: "$10000",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.aboutespanol.com%2Fthmb%2F_T9XY3p1ZFpKufVUSoiCvPCLhOA%3D%2F1024x680%2Ffilters%3Ano_upscale()%3Amax_bytes(150000)%3Astrip_icc()%2Falebrije-597b76183df78cbb7a24b350.jpg&f=1&nofb=1&ipt=bc5448c15f17adcfc6011eebd1aa707d23f91a2605a88ea444cfaa085ab0a736",
  })

  const Navigation = () => (
    <nav className="bg-[#a74122] p-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-white text-2xl font-bold text-center mb-4">ARTESANIAS</h1>
        <div className="flex justify-center space-x-8">
          {["inicio", "productos", "sobre", "contacto"].map((page) => (
            <Button
              key={page}
              variant={currentPage === page ? "secondary" : "ghost"}
              onClick={() => setCurrentPage(page)}
              className="text-black bg-white hover:bg-gray-100 capitalize"
            >
              {page}
            </Button>
          ))}
        </div>
      </div>
    </nav>
  )

  const Footer = () => (
    <footer className="bg-[#a74122] p-6 mt-8">
      <div className="max-w-6xl mx-auto flex justify-center space-x-8">
        <Phone className="w-8 h-8 text-black" />
        <Facebook className="w-8 h-8 text-black" />
        <Instagram className="w-8 h-8 text-black" />
      </div>
    </footer>
  )

  const ProductCarousel = ({ title, products }: { title: string; products: any[] }) => (
    <div className="mb-8">
      <h3 className="text-xl font-bold mb-4 text-black">{title}</h3>
      <div className="relative">
        <div className="flex items-center">
          <Button variant="ghost" size="icon" className="absolute left-0 z-10">
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <div className="flex space-x-4 mx-12 overflow-hidden">
            {products.slice(0, 3).map((product, index) => (
              <Card key={index} className="flex-shrink-0 w-48">
                <CardContent className="p-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="w-full h-32 object-cover mb-2 rounded"
                  />
                  <p className="text-sm font-medium text-black">{product.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <Button variant="ghost" size="icon" className="absolute right-0 z-10">
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </div>
  )

  const renderPage = () => {
    switch (currentPage) {
      case "inicio":
        return (
          <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto p-6">
            {products.map((product, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="p-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="w-full h-48 object-cover mb-2 rounded"
                  />
                  <p className="text-sm font-medium text-black">{product.name}</p>
                  <p className="text-sm text-black">{product.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )

      case "productos":
        return (
          <div className="max-w-6xl mx-auto p-6">
            <ProductCarousel title="PRODUCTOS MAS RECIENTES" products={products} />
            <ProductCarousel title="PRODUCTOS MAS VENDIDOS" products={products} />
            <ProductCarousel title="PRODUCTOS EN LIQUIDACION" products={products} />
          </div>
        )

      case "sobre":
        return (
          <div className="max-w-4xl mx-auto p-6">
            <h2 className="text-2xl font-bold mb-6 text-black">SOBRE NOSOTROS</h2>
            <p className="text-black mb-8 leading-relaxed">
              Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto...
            </p>

            <h3 className="text-xl font-bold mb-4 text-black">CALIDAD DE NUESTROS PRODUCTOS</h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <Image
                src="/placeholder.svg?height=200&width=300"
                alt="Artisan crafts"
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded"
              />
              <Image
                src="/placeholder.svg?height=200&width=300"
                alt="Artisan crafts"
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded"
              />
            </div>

            <p className="text-black leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisci elit...
            </p>
          </div>
        )

      case "contacto":
        return (
          <div className="max-w-4xl mx-auto p-6">
            <h2 className="text-3xl font-bold mb-8 text-black text-center">CONTACTANOS</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-black" />
                  <span className="text-black">artesaniaseve@gmail.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-black" />
                  <span className="text-black">1145678245</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-black" />
                  <span className="text-black">av. roca y escalada</span>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-black mb-1">Name</label>
                  <Input placeholder="Value" className="bg-white" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-black mb-1">Surname</label>
                  <Input placeholder="Value" className="bg-white" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-black mb-1">Email</label>
                  <Input placeholder="Value" className="bg-white" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-black mb-1">Message</label>
                  <Textarea placeholder="Value" className="bg-white min-h-[100px]" />
                </div>
                <Button className="w-full bg-[#2c2c2c] hover:bg-[#1e1e1e] text-white">Submit</Button>
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-[#d9d9d9]">
      <Navigation />
      <main className="py-8">{renderPage()}</main>
      <Footer />
    </div>
  )
}