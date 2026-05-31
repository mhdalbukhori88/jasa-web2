import {
  Globe,
  ShoppingCart,
  Building2,
  Smartphone,
  Search,
  Rocket,
  Palette,
  Headphones,
  Gauge,
  ShieldCheck,
  Code2,
  TrendingUp,
} from "lucide-react";

export type Service = {
  icon: typeof Globe;
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    icon: Globe,
    title: "Company Profile",
    description:
      "Website profil perusahaan yang merepresentasikan kredibilitas dan identitas brand Anda secara profesional.",
  },
  {
    icon: ShoppingCart,
    title: "Toko Online",
    description:
      "Toko online lengkap dengan katalog produk, keranjang belanja, dan integrasi pembayaran yang aman.",
  },
  {
    icon: Building2,
    title: "Website Instansi",
    description:
      "Website untuk instansi, sekolah, dan organisasi dengan fitur informasi dan manajemen konten yang mudah.",
  },
  {
    icon: Rocket,
    title: "Landing Page",
    description:
      "Halaman promosi yang fokus pada konversi untuk kampanye produk, event, atau penawaran khusus.",
  },
  {
    icon: Smartphone,
    title: "Web Aplikasi",
    description:
      "Aplikasi berbasis web custom sesuai kebutuhan bisnis, mulai dari sistem booking hingga dashboard.",
  },
  {
    icon: Search,
    title: "Optimasi SEO",
    description:
      "Optimasi mesin pencari agar website Anda mudah ditemukan dan tampil di halaman pertama Google.",
  },
];

export type Feature = {
  icon: typeof Globe;
  title: string;
  description: string;
};

export const features: Feature[] = [
  {
    icon: Palette,
    title: "Desain Modern & Custom",
    description:
      "Setiap desain dibuat khusus sesuai identitas brand Anda, bukan template pasaran.",
  },
  {
    icon: Gauge,
    title: "Cepat & Ringan",
    description:
      "Website dioptimasi untuk loading super cepat sehingga meningkatkan pengalaman pengunjung.",
  },
  {
    icon: Smartphone,
    title: "Responsif Semua Perangkat",
    description:
      "Tampilan sempurna di desktop, tablet, maupun smartphone secara otomatis.",
  },
  {
    icon: Search,
    title: "SEO Friendly",
    description:
      "Struktur kode rapi dan optimasi SEO agar mudah ditemukan di mesin pencari.",
  },
  {
    icon: ShieldCheck,
    title: "Keamanan Terjamin",
    description:
      "Dilengkapi SSL dan praktik keamanan terbaik untuk melindungi data Anda.",
  },
  {
    icon: Headphones,
    title: "Support Responsif",
    description:
      "Tim support siap membantu Anda dengan cepat kapan pun dibutuhkan.",
  },
];

export type Step = {
  number: string;
  title: string;
  description: string;
};

export const steps: Step[] = [
  {
    number: "01",
    title: "Konsultasi",
    description:
      "Diskusikan kebutuhan, tujuan, dan ide website Anda bersama tim kami secara gratis.",
  },
  {
    number: "02",
    title: "Desain & Penawaran",
    description:
      "Kami menyusun konsep desain dan penawaran yang sesuai dengan kebutuhan dan budget Anda.",
  },
  {
    number: "03",
    title: "Pengerjaan",
    description:
      "Tim developer kami mulai membangun website dengan update progres secara berkala.",
  },
  {
    number: "04",
    title: "Launching",
    description:
      "Website diluncurkan ke domain Anda, lengkap dengan pelatihan dan dukungan purna jual.",
  },
];

export type PricingPlan = {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  badge?: string;
};

export const pricingPlans: PricingPlan[] = [
  {
    name: "Starter",
    price: "1.5jt",
    period: "/ project",
    description: "Cocok untuk personal & UMKM yang baru memulai online.",
    features: [
      "Hingga 5 halaman",
      "Desain responsif",
      "Domain .com gratis 1 tahun",
      "Hosting gratis 1 tahun",
      "Form kontak & WhatsApp",
      "SSL keamanan",
      "Revisi 2x",
    ],
  },
  {
    name: "Business",
    price: "3.5jt",
    period: "/ project",
    description: "Solusi lengkap untuk bisnis yang ingin tampil profesional.",
    highlighted: true,
    badge: "Paling Populer",
    features: [
      "Hingga 12 halaman",
      "Desain custom premium",
      "Domain .com gratis 1 tahun",
      "Hosting SSD gratis 1 tahun",
      "Optimasi SEO dasar",
      "Integrasi Google Analytics",
      "Email bisnis profesional",
      "Revisi 5x",
      "Support prioritas",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Untuk toko online & web aplikasi dengan kebutuhan khusus.",
    features: [
      "Halaman tanpa batas",
      "Desain & fitur custom penuh",
      "Toko online / web app",
      "Integrasi payment gateway",
      "Optimasi SEO lanjutan",
      "Maintenance bulanan",
      "Konsultasi strategi digital",
      "Revisi tanpa batas*",
      "Support dedicated",
    ],
  },
];

export type PortfolioItem = {
  title: string;
  category: string;
  gradient: string;
};

export const portfolio: PortfolioItem[] = [
  {
    title: "Kopi Nusantara",
    category: "Toko Online",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    title: "Klinik Sehat Medika",
    category: "Company Profile",
    gradient: "from-sky-500 to-blue-600",
  },
  {
    title: "Sekolah Cendekia",
    category: "Website Instansi",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    title: "Properti Asri",
    category: "Landing Page",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    title: "Travel Jelajah",
    category: "Web Aplikasi",
    gradient: "from-rose-500 to-pink-600",
  },
  {
    title: "Fashion Lokal",
    category: "Toko Online",
    gradient: "from-indigo-500 to-blue-700",
  },
];

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  initial: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Andi Pratama",
    role: "Owner, Kopi Nusantara",
    quote:
      "Website toko online kami selesai tepat waktu dan hasilnya melebihi ekspektasi. Penjualan naik signifikan sejak online.",
    initial: "A",
  },
  {
    name: "Siti Rahma",
    role: "Marketing, Klinik Sehat",
    quote:
      "Tim sangat responsif dan profesional. Desain website kami terlihat modern dan memudahkan pasien melakukan booking.",
    initial: "S",
  },
  {
    name: "Budi Santoso",
    role: "Direktur, Properti Asri",
    quote:
      "Pelayanan ramah, proses transparan, dan hasil sangat memuaskan. Sangat direkomendasikan untuk yang serius berbisnis online.",
    initial: "B",
  },
];

export type Stat = {
  value: string;
  label: string;
  icon: typeof Globe;
};

export const stats: Stat[] = [
  { value: "500+", label: "Website Selesai", icon: Code2 },
  { value: "350+", label: "Klien Puas", icon: TrendingUp },
  { value: "8+", label: "Tahun Pengalaman", icon: ShieldCheck },
  { value: "24/7", label: "Dukungan Support", icon: Headphones },
];

export type Faq = {
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
  {
    question: "Berapa lama proses pembuatan website?",
    answer:
      "Tergantung kompleksitas, umumnya 7-14 hari kerja untuk company profile dan 3-6 minggu untuk toko online atau web aplikasi. Kami selalu memberi estimasi jelas di awal.",
  },
  {
    question: "Apakah saya bisa mengelola konten website sendiri?",
    answer:
      "Tentu. Kami membangun website dengan sistem manajemen konten yang mudah dan memberikan pelatihan agar Anda dapat memperbarui konten secara mandiri.",
  },
  {
    question: "Apakah sudah termasuk domain dan hosting?",
    answer:
      "Paket Starter dan Business sudah termasuk domain .com dan hosting gratis untuk tahun pertama. Untuk tahun berikutnya ada biaya perpanjangan yang terjangkau.",
  },
  {
    question: "Bagaimana sistem pembayarannya?",
    answer:
      "Pembayaran dilakukan bertahap: 50% di awal sebagai DP untuk memulai pengerjaan, dan 50% pelunasan saat website siap diluncurkan.",
  },
  {
    question: "Apakah ada garansi dan support setelah website jadi?",
    answer:
      "Ya. Kami memberikan garansi perbaikan bug dan dukungan teknis setelah website diluncurkan. Paket maintenance bulanan juga tersedia jika dibutuhkan.",
  },
  {
    question: "Apakah website akan tampil bagus di HP?",
    answer:
      "Pasti. Semua website kami dibuat responsif sehingga tampil optimal di semua perangkat, mulai dari smartphone, tablet, hingga desktop.",
  },
];
