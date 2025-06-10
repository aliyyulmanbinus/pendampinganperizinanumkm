"use client"

import { useState } from "react"
import { Menu, X, Search, Calendar, User, ArrowRight, ChevronLeft, ChevronRight, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function ArtikelPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Semua")
  const [currentPage, setCurrentPage] = useState(1)
  const articlesPerPage = 6

  const categories = [
    "Semua",
    "Perizinan UMKM",
    "Konsultasi Bisnis",
    "SOP & Prosedur",
    "Training & Pelatihan",
    "Tips & Trik",
    "Regulasi Terbaru",
  ]

  const articles = [
    {
      id: 1,
      title: "Panduan Lengkap Mengurus Izin Usaha UMKM di Era Digital",
      excerpt:
        "Pelajari langkah-langkah praktis untuk mengurus berbagai jenis izin usaha UMKM dengan mudah dan cepat melalui sistem online.",
      category: "Perizinan UMKM",
      author: "Tim Konsultan",
      date: "15 Desember 2024",
      image: "/placeholder.svg?height=200&width=300",
      readTime: "5 menit",
    },
    {
      id: 2,
      title: "5 Kesalahan Umum dalam Pembuatan SOP yang Harus Dihindari",
      excerpt: "Hindari kesalahan fatal dalam pembuatan Standard Operating Procedure yang dapat merugikan bisnis Anda.",
      category: "SOP & Prosedur",
      author: "Dr. Sari Wijaya",
      date: "12 Desember 2024",
      image: "/placeholder.svg?height=200&width=300",
      readTime: "7 menit",
    },
    {
      id: 3,
      title: "Update Regulasi Terbaru: Perubahan Aturan Perizinan 2024",
      excerpt:
        "Simak perubahan terbaru dalam regulasi perizinan yang berlaku mulai tahun 2024 dan dampaknya bagi UMKM.",
      category: "Regulasi Terbaru",
      author: "Ahmad Rizki",
      date: "10 Desember 2024",
      image: "/placeholder.svg?height=200&width=300",
      readTime: "6 menit",
    },
    {
      id: 4,
      title: "Strategi Efektif Konsultasi Bisnis untuk Startup",
      excerpt: "Tips dan strategi konsultasi bisnis yang terbukti efektif untuk membantu startup berkembang pesat.",
      category: "Konsultasi Bisnis",
      author: "Budi Santoso",
      date: "8 Desember 2024",
      image: "/placeholder.svg?height=200&width=300",
      readTime: "8 menit",
    },
    {
      id: 5,
      title: "Pentingnya Training Teknis untuk Tim UMKM",
      excerpt: "Mengapa training teknis menjadi kunci sukses dalam mengembangkan kapasitas tim UMKM di era modern.",
      category: "Training & Pelatihan",
      author: "Sari Dewi",
      date: "5 Desember 2024",
      image: "/placeholder.svg?height=200&width=300",
      readTime: "4 menit",
    },
    {
      id: 6,
      title: "Tips Mengoptimalkan Proses Perizinan Bisnis",
      excerpt: "Rahasia mengoptimalkan proses perizinan bisnis agar lebih cepat, efisien, dan hemat biaya.",
      category: "Tips & Trik",
      author: "Tim Konsultan",
      date: "3 Desember 2024",
      image: "/placeholder.svg?height=200&width=300",
      readTime: "6 menit",
    },
    {
      id: 7,
      title: "Cara Memilih Konsultan Perizinan yang Tepat",
      excerpt: "Panduan memilih konsultan perizinan yang profesional dan terpercaya untuk kebutuhan bisnis Anda.",
      category: "Tips & Trik",
      author: "Dr. Sari Wijaya",
      date: "1 Desember 2024",
      image: "/placeholder.svg?height=200&width=300",
      readTime: "5 menit",
    },
    {
      id: 8,
      title: "Digitalisasi SOP: Langkah Menuju Efisiensi Operasional",
      excerpt: "Manfaat dan cara implementasi digitalisasi SOP untuk meningkatkan efisiensi operasional perusahaan.",
      category: "SOP & Prosedur",
      author: "Ahmad Rizki",
      date: "28 November 2024",
      image: "/placeholder.svg?height=200&width=300",
      readTime: "7 menit",
    },
    {
      id: 9,
      title: "Pelatihan Soft Skills untuk UMKM: Investasi Jangka Panjang",
      excerpt: "Mengapa pelatihan soft skills menjadi investasi penting untuk pertumbuhan jangka panjang UMKM.",
      category: "Training & Pelatihan",
      author: "Budi Santoso",
      date: "25 November 2024",
      image: "/placeholder.svg?height=200&width=300",
      readTime: "6 menit",
    },
  ]

  // Filter articles based on search term and category
  const filteredArticles = articles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "Semua" || article.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  // Pagination
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage)
  const startIndex = (currentPage - 1) * articlesPerPage
  const currentArticles = filteredArticles.slice(startIndex, startIndex + articlesPerPage)

  return (
    <div className="min-h-screen bg-white scroll-smooth">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm border-b">
        <div className="container mx-auto px-2 sm:px-4">
          <div className="flex flex-wrap items-center justify-between h-auto min-h-[64px] py-2">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-sm sm:text-base md:text-lg font-bold text-blue-900">
                Pendampingan Perizinan UMKM
              </h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-4 md:space-x-6 lg:space-x-8">
              <a href="#beranda" className="text-gray-700 hover:text-blue-900 transition-colors">Beranda</a>
              <a href="#tentang" className="text-gray-700 hover:text-blue-900 transition-colors">Tentang Kami</a>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-gray-700 hover:text-blue-900 transition-colors">
                  Layanan <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem><a href="#layanan" className="w-full">Layanan Konsultasi</a></DropdownMenuItem>
                  <DropdownMenuItem><a href="#layanan" className="w-full">Layanan Pembuatan SOP</a></DropdownMenuItem>
                  <DropdownMenuItem><a href="#layanan" className="w-full">Layanan Perizinan</a></DropdownMenuItem>
                  <DropdownMenuItem><a href="#layanan" className="w-full">Layanan Training Teknis</a></DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <a href="/artikel" className="text-gray-700 hover:text-blue-900 transition-colors">Artikel</a>
              <a href="/kontak" className="text-gray-700 hover:text-blue-900 transition-colors">Kontak</a>
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <a href="https://wa.link/84h6xq" target="_blank" rel="noopener noreferrer">
                <Button className="bg-blue-900 hover:bg-blue-800 text-white text-sm px-4 py-2">
                  Konsultasi Sekarang
                </Button>
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

      {/* Breadcrumb */}
      <section className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-900 transition-colors">
              Beranda
            </Link>
            <ArrowRight className="w-4 h-4" />
            <span className="text-blue-900 font-medium">Artikel</span>
          </nav>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-4">Artikel & Insights</h1>
          <p className="text-gray-600 mt-2">
            Temukan artikel terbaru seputar perizinan UMKM, tips bisnis, dan insights dari para ahli
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Cari artikel..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-end">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => {
                    setSelectedCategory(category)
                    setCurrentPage(1)
                  }}
                  className={selectedCategory === category ? "bg-blue-900 hover:bg-blue-800" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {currentArticles.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">Tidak ada artikel yang ditemukan.</p>
            </div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentArticles.map((article) => (
                  <Card
                    key={article.id}
                    className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <Badge className="absolute top-4 left-4 bg-blue-900 hover:bg-blue-800">{article.category}</Badge>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span className="mr-4">{article.date}</span>
                        <User className="w-4 h-4 mr-1" />
                        <span className="mr-4">{article.author}</span>
                        <span>{article.readTime}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                      <Button
                        variant="outline"
                        className="group-hover:bg-blue-900 group-hover:text-white transition-all duration-300"
                      >
                        Baca Selengkapnya
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center mt-12 space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Sebelumnya
                  </Button>

                  <div className="flex space-x-1">
                    {[...Array(totalPages)].map((_, index) => (
                      <Button
                        key={index + 1}
                        variant={currentPage === index + 1 ? "default" : "outline"}
                        size="sm"
                        onClick={() => setCurrentPage(index + 1)}
                        className={currentPage === index + 1 ? "bg-blue-900 hover:bg-blue-800" : ""}
                      >
                        {index + 1}
                      </Button>
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                  >
                    Selanjutnya
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">Dapatkan Update Artikel Terbaru</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Berlangganan newsletter kami untuk mendapatkan artikel terbaru seputar perizinan UMKM dan tips bisnis
            langsung di inbox Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input type="email" placeholder="Masukkan email Anda" className="flex-1 bg-white text-gray-900" />
            <Button className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-semibold">Berlangganan</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="kontak" className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">
                PendampinganPerizinanUMKM
              </h3>
              <p className="text-sm sm:text-base text-gray-300 mb-6 leading-relaxed">
                Solusi terpercaya untuk kebutuhan perizinan bisnis Anda. Kami siap membantu mengembangkan UMKM Indonesia.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Navigasi</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                    Beranda
                  </Link>
                </li>
                <li>
                  <Link href="/#tentang" className="text-gray-300 hover:text-white transition-colors">
                    Tentang Kami
                  </Link>
                </li>
                <li>
                  <Link href="/#layanan" className="text-gray-300 hover:text-white transition-colors">
                    Layanan
                  </Link>
                </li>
                <li>
                  <Link href="/artikel" className="text-gray-300 hover:text-white transition-colors">
                    Artikel
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Kontak</h4>
              <ul className="space-y-2 text-gray-300">
                <li>WhatsApp: +62 813-7008-6608</li>
                <li>Email: info@gmail.com</li>
                <li>Telepon: (021) xxxx-xxxx</li>
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
