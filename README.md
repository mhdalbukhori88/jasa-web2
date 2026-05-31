# Webnesia — Jasa Pembuatan Website Profesional

Website company profile / landing page profesional untuk bisnis jasa pembuatan website. Dibangun dengan **Next.js 16 (App Router)**, **TypeScript**, dan **Tailwind CSS v4**. Siap di-deploy ke **Vercel**.

## ✨ Fitur

- Desain modern, profesional, dan fully responsive (mobile, tablet, desktop)
- Animasi halus (scroll reveal, floating elements)
- Section lengkap: Hero, Statistik, Layanan, Keunggulan, Cara Kerja, Portofolio, Harga, Tentang, Testimoni, FAQ, CTA, dan Kontak
- Form kontak yang langsung terhubung ke WhatsApp
- Tombol WhatsApp mengambang
- SEO siap pakai: metadata Open Graph, `sitemap.xml`, `robots.txt`, dan structured data (JSON-LD)
- Mudah dikustomisasi lewat satu file konfigurasi

## 🛠️ Kustomisasi

Semua data bisnis Anda diatur di dua file:

| File | Isi |
|------|-----|
| `src/lib/site.ts` | Nama brand, tagline, email, nomor telepon, **nomor WhatsApp**, alamat, sosial media |
| `src/lib/data.ts` | Layanan, keunggulan, langkah kerja, paket harga, portofolio, testimoni, statistik, FAQ |

> **Penting:** Ganti nomor `whatsapp` di `src/lib/site.ts` dengan nomor Anda (format internasional tanpa `+` atau spasi, contoh: `6281234567890`).

## 🚀 Menjalankan Secara Lokal

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

## 📦 Build Produksi

```bash
npm run build
npm run start
```

## ☁️ Deploy ke Vercel

1. Push project ini ke repository GitHub/GitLab/Bitbucket Anda.
2. Buka [vercel.com](https://vercel.com), klik **Add New → Project**, lalu import repository tersebut.
3. Vercel otomatis mendeteksi Next.js — cukup klik **Deploy**. Tidak perlu konfigurasi tambahan.
4. Setelah live, tambahkan domain kustom Anda di **Settings → Domains**.

Alternatif via CLI:

```bash
npm i -g vercel
vercel
```

## 📁 Struktur Project

```
src/
├── app/
│   ├── layout.tsx      # Layout & SEO metadata global
│   ├── page.tsx        # Halaman utama (merangkai semua section)
│   ├── globals.css     # Tema warna & animasi
│   ├── sitemap.ts      # Sitemap otomatis
│   ├── robots.ts       # robots.txt otomatis
│   └── icon.svg        # Favicon
├── components/         # Komponen tiap section
└── lib/
    ├── site.ts         # Konfigurasi bisnis
    └── data.ts         # Konten website
```
