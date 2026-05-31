import { Check } from "lucide-react";
import { siteConfig, waLink } from "@/lib/site";
import Reveal from "./Reveal";

const points = [
  "Tim developer & desainer berpengalaman",
  "Komunikasi transparan dari awal sampai akhir",
  "Teknologi modern & standar industri terkini",
  "Garansi kepuasan dan dukungan purna jual",
];

export default function About() {
  return (
    <section id="tentang" className="bg-white py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-brand-100 to-accent-100 blur-2xl" />
            <div className="relative grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl bg-gradient-to-br from-brand-600 to-brand-700 p-6 text-white shadow-xl">
                  <p className="text-3xl font-extrabold">8+</p>
                  <p className="mt-1 text-sm text-brand-100">
                    Tahun pengalaman
                  </p>
                </div>
                <div className="rounded-2xl bg-slate-900 p-6 text-white shadow-xl">
                  <p className="text-3xl font-extrabold">99%</p>
                  <p className="mt-1 text-sm text-slate-300">
                    Tingkat kepuasan klien
                  </p>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl bg-gradient-to-br from-accent-500 to-accent-600 p-6 text-white shadow-xl">
                  <p className="text-3xl font-extrabold">500+</p>
                  <p className="mt-1 text-sm text-cyan-50">Proyek selesai</p>
                </div>
                <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-xl">
                  <p className="text-3xl font-extrabold text-slate-900">24/7</p>
                  <p className="mt-1 text-sm text-slate-500">Support tim</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <span className="inline-block rounded-full bg-brand-50 px-4 py-1.5 text-sm font-semibold uppercase tracking-wide text-brand-700">
            Tentang Kami
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Partner Digital Terpercaya untuk Pertumbuhan Bisnis Anda
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            {siteConfig.name} adalah tim profesional yang berdedikasi membantu
            bisnis Anda tumbuh di dunia digital. Kami menggabungkan desain yang
            memukau, teknologi terkini, dan strategi yang tepat untuk
            menghasilkan website yang tidak hanya indah, tapi juga menghasilkan.
          </p>

          <ul className="mt-7 space-y-3.5">
            {points.map((point) => (
              <li key={point} className="flex items-center gap-3">
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-600 text-white">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span className="font-medium text-slate-700">{point}</span>
              </li>
            ))}
          </ul>

          <a
            href={waLink(
              `Halo ${siteConfig.name}, saya ingin tahu lebih banyak tentang layanan Anda.`
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-brand-600 to-brand-500 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand-600/25 transition-all hover:shadow-xl hover:brightness-105"
          >
            Diskusi dengan Kami
          </a>
        </Reveal>
      </div>
    </section>
  );
}
