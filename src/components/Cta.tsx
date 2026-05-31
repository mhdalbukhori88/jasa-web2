import { ArrowRight } from "lucide-react";
import { siteConfig, waLink } from "@/lib/site";
import Reveal from "./Reveal";

export default function Cta() {
  return (
    <section className="bg-white pb-4 pt-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-700 via-brand-600 to-accent-600 px-6 py-14 text-center shadow-2xl shadow-brand-600/30 sm:px-12 sm:py-16">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
            <div className="absolute -bottom-20 -right-10 h-72 w-72 rounded-full bg-accent-400/20 blur-2xl" />
          </div>
          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Saatnya Bisnis Anda Punya Website Profesional
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-brand-50">
              Jangan biarkan kompetitor selangkah lebih maju. Mulai perjalanan
              digital Anda bersama {siteConfig.name} hari ini.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={waLink(
                  `Halo ${siteConfig.name}, saya siap membuat website. Mohon dibantu.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-semibold text-brand-700 shadow-lg transition-all hover:shadow-xl hover:brightness-105 sm:w-auto"
              >
                Konsultasi Gratis Sekarang
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#harga"
                className="inline-flex w-full items-center justify-center rounded-full border border-white/40 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto"
              >
                Lihat Paket Harga
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
