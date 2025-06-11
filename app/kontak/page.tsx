"use client"

import type React from "react"

import { useState } from "react"
import { Menu, X, MapPin, Phone, Mail, Clock, Send, MessageCircle, ArrowRight, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function KontakPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  })

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    alert("Terima kasih! Pesan Anda telah terkirim. Tim kami akan segera menghubungi Anda.")
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: "",
    })
    setIsSubmitting(false)
  }

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Alamat Kantor",
      details: ["Jl. Sudirman No. 123, Lantai 15", "Jakarta Pusat 10220", "DKI Jakarta, Indonesia"],
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Telepon",
      details: ["(021) xxxx-xxxx", "+62 813-7008-6608", "Senin - Jumat: 08:00 - 17:00"],
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: [
        "info@gmail.com",
        "konsultasi@gmail.com",
        "support@gmail.com",
      ],
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Jam Operasional",
      details: ["Senin - Jumat: 08:00 - 17:00", "Sabtu: 08:00 - 12:00", "Minggu: Tutup"],
    },
  ]

  const services = [
    "Layanan Konsultasi",
    "Layanan Pembuatan SOP",
    "Layanan Perizinan",
    "Layanan Training Teknis",
    "Konsultasi Umum",
    "Lainnya",
  ]

  return (
    <div className="min-h-screen bg-white scroll-smooth">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm border-b">
        <div className="container mx-auto px-2 sm:px-4">
          <div className="flex flex-wrap items-center justify-between h-auto min-h-[64px] py-2">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <img
                src="/logo-umkm.png"
                alt="Logo UMKM"
                className="h-6 w-auto sm:h-8"
              />
              <h1 className="text-sm sm:text-base md:text-lg font-bold text-blue-900">
                Pendampingan Perizinan UMKM
              </h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-4 md:space-x-6 lg:space-x-8">
              <a href="/#beranda" className="text-gray-700 hover:text-blue-900 transition-colors">Beranda</a>
              <a href="/#tentang" className="text-gray-700 hover:text-blue-900 transition-colors">Tentang Kami</a>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-gray-700 hover:text-blue-900 transition-colors">
                  Layanan <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem><a href="/#layanan" className="w-full">Layanan Konsultasi</a></DropdownMenuItem>
                  <DropdownMenuItem><a href="/#layanan" className="w-full">Layanan Pembuatan SOP</a></DropdownMenuItem>
                  <DropdownMenuItem><a href="/#layanan" className="w-full">Layanan Perizinan</a></DropdownMenuItem>
                  <DropdownMenuItem><a href="/#layanan" className="w-full">Layanan Training Teknis</a></DropdownMenuItem>
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
                <a href="/#beranda" className="text-gray-700 hover:text-blue-900 transition-colors">
                  Beranda
                </a>
                <a href="/#tentang" className="text-gray-700 hover:text-blue-900 transition-colors">
                  Tentang Kami
                </a>
                <div className="space-y-2 pl-4">
                  <div className="text-gray-700 font-medium">Layanan:</div>
                  <a href="/#layanan" className="block text-gray-700 hover:text-blue-900 transition-colors pl-2">
                    Layanan Konsultasi
                  </a>
                  <a href="/#layanan" className="block text-gray-700 hover:text-blue-900 transition-colors pl-2">
                    Layanan Pembuatan SOP
                  </a>
                  <a href="/#layanan" className="block text-gray-700 hover:text-blue-900 transition-colors pl-2">
                    Layanan Perizinan
                  </a>
                  <a href="/#layanan" className="block text-gray-700 hover:text-blue-900 transition-colors pl-2">
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
            <span className="text-blue-900 font-medium">Kontak</span>
          </nav>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-4">Hubungi Kami</h1>
          <p className="text-gray-600 mt-2">Siap membantu Anda dengan kebutuhan perizinan dan konsultasi bisnis</p>
        </div>
      </section>

      {/* Contact Hero */}
      <section className="py-12 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-yellow-500 text-blue-900 hover:bg-yellow-400 mb-4">Konsultasi Gratis</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Mari Diskusikan Kebutuhan Perizinan Bisnis Anda</h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Tim konsultan berpengalaman kami siap membantu Anda menemukan solusi terbaik untuk kebutuhan perizinan
                dan pengembangan bisnis.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://wa.link/84h6xq" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-semibold">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp Kami
                  </Button>
                </a>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-900"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Telepon Langsung
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-xl font-semibold mb-6">Mengapa Memilih Kami?</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-blue-900 font-bold text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Konsultan Bersertifikat</h4>
                      <p className="text-blue-100 text-sm">Tim ahli dengan sertifikasi resmi</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-blue-900 font-bold text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Proses Transparan</h4>
                      <p className="text-blue-100 text-sm">Update progress secara berkala</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-blue-900 font-bold text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Garansi Kepuasan</h4>
                      <p className="text-blue-100 text-sm">Jaminan hasil sesuai ekspektasi</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900">Kirim Pesan</CardTitle>
                  <p className="text-gray-600">
                    Isi formulir di bawah ini dan tim kami akan menghubungi Anda dalam 24 jam
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name">Nama Lengkap *</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="mt-1"
                          placeholder="Masukkan nama lengkap"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="mt-1"
                          placeholder="nama@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="phone">Nomor Telepon *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="mt-1"
                          placeholder="+62 813-7008-6608"
                        />
                      </div>
                      <div>
                        <Label htmlFor="company">Nama Perusahaan</Label>
                        <Input
                          id="company"
                          name="company"
                          type="text"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="mt-1"
                          placeholder="PT/CV/UD Nama Perusahaan"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="service">Layanan yang Dibutuhkan *</Label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleInputChange}
                        className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Pilih layanan</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="message">Pesan *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        className="mt-1"
                        rows={5}
                        placeholder="Jelaskan kebutuhan Anda secara detail..."
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full bg-blue-900 hover:bg-blue-800 text-white"
                    >
                      {isSubmitting ? (
                        "Mengirim..."
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Kirim Pesan
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="shadow-lg border-0">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">{info.title}</h3>
                        <div className="space-y-1">
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-gray-600 text-sm">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Lokasi Kantor</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Kunjungi kantor kami untuk konsultasi langsung dengan tim ahli kami
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="aspect-video bg-gray-200 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 font-medium">Google Maps Integration</p>
                <p className="text-gray-500 text-sm">Jl. Sudirman No. 123, Jakarta Pusat</p>
              </div>
            </div>

            <div className="p-6 border-t">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-3">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">Alamat Lengkap</h4>
                  <p className="text-gray-600 text-sm">Jl. Sudirman No. 123, Lantai 15, Jakarta Pusat 10220</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">Telepon</h4>
                  <p className="text-gray-600 text-sm">(021) xxxx-xxxx</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">Jam Buka</h4>
                  <p className="text-gray-600 text-sm">Senin - Jumat: 08:00 - 17:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Pertanyaan Umum</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Temukan jawaban untuk pertanyaan yang sering diajukan tentang layanan kami
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="shadow-lg border-0">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Berapa lama proses pengurusan perizinan?</h3>
                <p className="text-gray-600 text-sm">
                  Waktu pengurusan bervariasi tergantung jenis perizinan, umumnya 2-4 minggu untuk perizinan standar
                  UMKM.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Apakah ada garansi jika perizinan ditolak?</h3>
                <p className="text-gray-600 text-sm">
                  Ya, kami memberikan garansi revisi gratis hingga perizinan Anda disetujui sesuai dengan ketentuan yang
                  berlaku.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Bagaimana cara melakukan konsultasi?</h3>
                <p className="text-gray-600 text-sm">
                  Anda bisa melakukan konsultasi melalui WhatsApp, telepon, email, atau datang langsung ke kantor kami.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Apakah layanan tersedia di seluruh Indonesia?</h3>
                <p className="text-gray-600 text-sm">
                  Ya, kami melayani klien di seluruh Indonesia dengan sistem online dan kunjungan ke daerah tertentu.
                </p>
              </CardContent>
            </Card>
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
                <li className="flex items-center space-x-2">
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp: +62 813-7008-6608</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>info@gmail.com</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>(021) xxxx-xxxx</span>
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
