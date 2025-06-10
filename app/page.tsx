"use client"

import { useState } from "react"
import { Menu, X, Phone, Mail, MessageCircle, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const services = [
    {
      title: "Layanan Konsultasi",
      description: "Konsultasi profesional untuk kebutuhan perizinan bisnis Anda",
      icon: "💼",
    },
    {
      title: "Layanan Pembuatan SOP",
      description: "Pembuatan Standar Operasional Prosedur yang terstruktur",
      icon: "📋",
    },
    {
      title: "Layanan Perizinan",
      description: "Pengurusan lengkap berbagai jenis perizinan UMKM",
      icon: "📄",
    },
    {
      title: "Layanan Training Teknis",
      description: "Pelatihan teknis untuk meningkatkan kapasitas tim Anda",
      icon: "🎓",
    },
  ]

  const testimonials = [
    {
      name: "Budi Santoso",
      company: "CV. Maju Bersama",
      text: "Pelayanan yang sangat profesional dan membantu sekali dalam pengurusan perizinan usaha kami. Prosesnya cepat dan transparan.",
      rating: 5,
    },
    {
      name: "Sari Dewi",
      company: "UD. Berkah Jaya",
      text: "Tim konsultan sangat berpengalaman dan sabar dalam memberikan penjelasan. Sangat recommended untuk UMKM yang butuh bantuan perizinan.",
      rating: 5,
    },
    {
      name: "Ahmad Rizki",
      company: "PT. Solusi Digital",
      text: "Terima kasih atas bantuan pembuatan SOP yang sangat detail dan mudah dipahami. Bisnis kami jadi lebih terstruktur.",
      rating: 5,
    },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="min-h-screen bg-white scroll-smooth">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold text-blue-900">PendampinganPerizinanUMKM</h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#beranda" className="text-gray-700 hover:text-blue-900 transition-colors">
                Beranda
              </a>
              <a href="#tentang" className="text-gray-700 hover:text-blue-900 transition-colors scroll-smooth">
                Tentang Kami
              </a>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-gray-700 hover:text-blue-900 transition-colors">
                  Layanan <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <a href="#layanan" className="w-full">
                      Layanan Konsultasi
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="#layanan" className="w-full">
                      Layanan Pembuatan SOP
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="#layanan" className="w-full">
                      Layanan Perizinan
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="#layanan" className="w-full">
                      Layanan Training Teknis
                    </a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <a href="/artikel" className="text-gray-700 hover:text-blue-900 transition-colors">
                Artikel
              </a>
              <a href="/kontak" className="text-gray-700 hover:text-blue-900 transition-colors">
                Kontak
              </a>
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <a href="https://wa.link/84h6xq" target="_blank" rel="noopener noreferrer">
                <Button className="bg-blue-900 hover:bg-blue-800 text-white">Konsultasi Sekarang</Button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <nav className="flex flex-col space-y-4">
                <a href="#beranda" className="text-gray-700 hover:text-blue-900 transition-colors">
                  Beranda
                </a>
                <a href="#tentang" className="text-gray-700 hover:text-blue-900 transition-colors">
                  Tentang Kami
                </a>
                <div className="space-y-2 pl-4">
                  <div className="text-gray-700 font-medium">Layanan:</div>
                  <a href="#layanan" className="block text-gray-700 hover:text-blue-900 transition-colors pl-2">
                    Layanan Konsultasi
                  </a>
                  <a href="#layanan" className="block text-gray-700 hover:text-blue-900 transition-colors pl-2">
                    Layanan Pembuatan SOP
                  </a>
                  <a href="#layanan" className="block text-gray-700 hover:text-blue-900 transition-colors pl-2">
                    Layanan Perizinan
                  </a>
                  <a href="#layanan" className="block text-gray-700 hover:text-blue-900 transition-colors pl-2">
                    Layanan Training Teknis
                  </a>
                </div>
                <a href="/artikel" className="text-gray-700 hover:text-blue-900 transition-colors">
                  Artikel
                </a>
                <a href="/kontak" className="text-gray-700 hover:text-blue-900 transition-colors">
                  Kontak
                </a>
                <a href="https://wa.link/84h6xq" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-blue-900 hover:bg-blue-800 text-white w-full">Konsultasi Sekarang</Button>
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="beranda" className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-yellow-500 text-blue-900 hover:bg-yellow-400">Solusi Perizinan Terpercaya</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Solusi Bisnis Anda dalam Pendampingan Perizinan UMKM
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                Kami membantu Anda memahami, mengelola, dan menyelesaikan kebutuhan perizinan bisnis melalui layanan
                konsultasi, SOP, dan training teknis.
              </p>
              <a href="https://wa.link/84h6xq" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-semibold">
                  Pelajari Layanan
                </Button>
              </a>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                      <span className="text-2xl">👥</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">Konsultasi Profesional</h3>
                      <p className="text-blue-100 text-sm">Tim berpengalaman siap membantu</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                      <span className="text-2xl">⚡</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">Proses Cepat</h3>
                      <p className="text-blue-100 text-sm">Pengurusan perizinan yang efisien</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                      <span className="text-2xl">🎯</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">Hasil Terjamin</h3>
                      <p className="text-blue-100 text-sm">Kepuasan klien adalah prioritas</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="tentang" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Tentang Kami</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Kami adalah Solusi Bisnis Anda dalam memahami, mengelola dan membantu Anda dalam Memberikan Layanan
                  Konsultasi, Pembuatan SOP (Standar Operasional Prosedur), Layanan Perizinan dan Layanan Training
                  Teknis.
                </p>
                <p>
                  Kami memiliki konsultan-konsultan pendamping yang Bersertifikasi Resmi dengan beragam keahlian dalam
                  bidang pendampingan perizinan UMKM.
                </p>
                <p>
                  Kami yakin bahwa pengurusan perizinan tidak seharusnya menjadi beban pikiran Anda, dan pengalaman kami
                  akan menjadi aset berharga bagi bisnis Anda melalui pemenuhan dan perencanaan proses perizinan yang
                  terukur dan pasti.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-900 mb-2">500+</div>
                  <div className="text-gray-600">Klien Terlayani</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-900 mb-2">10+</div>
                  <div className="text-gray-600">Tahun Pengalaman</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-900 mb-2">50+</div>
                  <div className="text-gray-600">Jenis Perizinan</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-900 mb-2">98%</div>
                  <div className="text-gray-600">Tingkat Kepuasan</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="layanan" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Layanan Kami</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Kami menyediakan berbagai layanan profesional untuk mendukung kebutuhan perizinan bisnis Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg"
              >
                <CardContent className="p-8 text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  <div className="mt-6">
                    <a href="https://wa.link/84h6xq" target="_blank" rel="noopener noreferrer">
                      <Button
                        variant="outline"
                        className="group-hover:bg-blue-900 group-hover:text-white transition-all duration-300"
                      >
                        Pelajari Lebih Lanjut
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Siap Memulai Proses Perizinan Bisnis Anda?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Jangan biarkan urusan perizinan menghambat pertumbuhan bisnis Anda. Hubungi kami sekarang untuk konsultasi
            gratis.
          </p>
          <a href="https://wa.link/84h6xq" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-semibold text-lg px-8 py-4"
            >
              Hubungi Kami Sekarang
            </Button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer id="kontak" className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">PendampinganPerizinanUMKM</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Solusi terpercaya untuk kebutuhan perizinan bisnis Anda. Kami siap membantu mengembangkan UMKM
                Indonesia.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="bg-green-600 hover:bg-green-700 p-3 rounded-full transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </a>
                <a href="#" className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
                <a href="#" className="bg-blue-500 hover:bg-blue-600 p-3 rounded-full transition-colors">
                  <Phone className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Navigasi</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#beranda" className="text-gray-300 hover:text-white transition-colors">
                    Beranda
                  </a>
                </li>
                <li>
                  <a href="#tentang" className="text-gray-300 hover:text-white transition-colors">
                    Tentang Kami
                  </a>
                </li>
                <li>
                  <a href="#layanan" className="text-gray-300 hover:text-white transition-colors">
                    Layanan
                  </a>
                </li>
                <li>
                  <a href="/artikel" className="text-gray-300 hover:text-white transition-colors">
                    Artikel
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Kontak</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center space-x-2">
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp: +62 812-3456-7890</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>info@pendampinganperizinanumkm.com</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>(021) 1234-5678</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 PendampinganPerizinanUMKM. Semua hak dilindungi undang-undang.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
