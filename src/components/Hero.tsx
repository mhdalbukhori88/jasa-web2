import { ArrowRight, Check, Star } from "lucide-react";
import { siteConfig, waLink } from "@/lib/site";

const heroPoints = [
  "Desain custom & modern",
  "SEO friendly",
  "Garansi & support",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 pt-28 pb-20 lg:pt-36 lg:pb-28">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-brand-600/30 blur-3xl" />
        <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-accent-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-brand-500/20 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="animate-fade-up text-center lg:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-medium text-brand-200 backdrop-blur">
            <span className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-3.5 w-3.5 fill-amber-400 text-amber-400"
                />
              ))}
            </span>
            Dipercaya 350+ klien di Indonesia
          </div>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Wujudkan{" "}
            <span className="bg-gradient-to-r from-brand-400 to-accent-400 bg-clip-text text-transparent">
              Website Profesional
            </span>{" "}
            untuk Bisnis Anda
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate-300 lg:mx-0">
            {siteConfig.name} membantu Anda tampil profesional di dunia digital.
            Desain modern, cepat, dan SEO friendly yang siap mendongkrak bisnis
            Anda ke level berikutnya.
          </p>

          <ul className="mt-7 flex flex-wrap justify-center gap-x-6 gap-y-2 lg:justify-start">
            {heroPoints.map((point) => (
              <li
                key={point}
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-200"
              >
                <span className="grid h-5 w-5 place-items-center rounded-full bg-brand-500/20 text-brand-300">
                  <Check className="h-3 w-3" />
                </span>
                {point}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row lg:items-start">
            <a
              href={waLink(
                `Halo ${siteConfig.name}, saya tertarik membuat website. Boleh minta info lebih lanjut?`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-600 to-brand-500 px-7 py-3.5 text-base font-semibold text-white shadow-xl shadow-brand-600/30 transition-all hover:shadow-2xl hover:shadow-brand-600/50 hover:brightness-110 sm:w-auto"
            >
              Mulai Sekarang
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#harga"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-base font-semibold text-white backdrop-blur transition-colors hover:bg-white/10 sm:w-auto"
            >
              Lihat Harga
            </a>
          </div>
        </div>

        {/* Visual mockup */}
        <div className="animate-fade-in [animation-delay:200ms]">
          <div className="animate-float relative mx-auto max-w-md">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-2.5 shadow-2xl backdrop-blur-sm">
              <div className="overflow-hidden rounded-xl bg-white">
                {/* Browser bar */}
                <div className="flex items-center gap-1.5 border-b border-slate-100 bg-slate-50 px-4 py-3">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-amber-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                  <span className="ml-3 h-5 flex-1 rounded-md bg-slate-200/70" />
                </div>
                {/* Fake content */}
                <div className="space-y-4 p-5">
                  <div className="flex items-center justify-between">
                    <div className="h-6 w-24 rounded-md bg-gradient-to-r from-brand-600 to-accent-500" />
                    <div className="flex gap-2">
                      <span className="h-3 w-10 rounded bg-slate-200" />
                      <span className="h-3 w-10 rounded bg-slate-200" />
                      <span className="h-3 w-10 rounded bg-slate-200" />
                    </div>
                  </div>
                  <div className="h-28 rounded-xl bg-gradient-to-br from-brand-500 to-accent-500" />
                  <div className="space-y-2">
                    <div className="h-3 w-3/4 rounded bg-slate-200" />
                    <div className="h-3 w-full rounded bg-slate-100" />
                    <div className="h-3 w-5/6 rounded bg-slate-100" />
                  </div>
                  <div className="grid grid-cols-3 gap-3 pt-1">
                    {[0, 1, 2].map((i) => (
                      <div key={i} className="space-y-2">
                        <div className="h-12 rounded-lg bg-slate-100" />
                        <div className="h-2 w-full rounded bg-slate-100" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -left-6 top-10 hidden rounded-xl border border-slate-100 bg-white px-4 py-3 shadow-xl sm:block">
              <p className="text-xs font-medium text-slate-500">Loading</p>
              <p className="text-lg font-bold text-green-600">0.8s ⚡</p>
            </div>
            <div className="absolute -right-4 bottom-12 hidden rounded-xl border border-slate-100 bg-white px-4 py-3 shadow-xl sm:block">
              <p className="text-xs font-medium text-slate-500">SEO Score</p>
              <p className="text-lg font-bold text-brand-600">98 / 100</p>
            </div>
          </div>
        </div>
      </div>

      {/* Wave separator */}
      <div className="absolute inset-x-0 bottom-0 leading-[0]">
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-[60px] w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 100V40C240 80 480 80 720 50C960 20 1200 20 1440 40V100H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
