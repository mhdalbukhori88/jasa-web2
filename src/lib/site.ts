/**
 * Konfigurasi utama website.
 * Ubah nilai di sini untuk menyesuaikan dengan bisnis Anda
 * (nama brand, kontak, sosial media, dll).
 */

export const siteConfig = {
  name: "Webnesia",
  tagline: "Jasa Pembuatan Website Profesional",
  description:
    "Webnesia adalah jasa pembuatan website profesional untuk bisnis, UMKM, toko online, dan perusahaan. Desain modern, cepat, SEO friendly, dan siap bersaing di era digital.",
  url: "https://webnesia.example.com",
  email: "halo@webnesia.id",
  phone: "+62 812 3456 7890",
  // Nomor untuk link WhatsApp (format internasional tanpa tanda + atau spasi)
  whatsapp: "6281234567890",
  address: "Jl. Digital No. 88, Jakarta Selatan, Indonesia",
  social: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
    linkedin: "https://linkedin.com/",
    twitter: "https://x.com/",
  },
} as const;

export function waLink(message?: string) {
  const text = message
    ? `?text=${encodeURIComponent(message)}`
    : "";
  return `https://wa.me/${siteConfig.whatsapp}${text}`;
}

export const navLinks = [
  { label: "Beranda", href: "/" },
  { label: "Layanan", href: "/#layanan" },
  { label: "Portofolio", href: "/#portofolio" },
  { label: "Harga", href: "/#harga" },
  { label: "Tentang", href: "/#tentang" },
  { label: "FAQ", href: "/#faq" },
] as const;
