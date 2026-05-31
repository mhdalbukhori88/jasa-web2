import { Quote, Star } from "lucide-react";
import { testimonials } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Testimonials() {
  return (
    <section className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimoni"
          title="Apa Kata Klien Kami"
          description="Kepuasan klien adalah prioritas kami. Berikut cerita mereka bekerja sama dengan kami."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal
              key={t.name}
              delay={i * 120}
              as="article"
              className="relative flex flex-col rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-100"
            >
              <Quote className="h-9 w-9 text-brand-200" />
              <div className="mt-2 flex">
                {[...Array(5)].map((_, s) => (
                  <Star
                    key={s}
                    className="h-4 w-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <p className="mt-4 flex-1 leading-relaxed text-slate-700">
                “{t.quote}”
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-brand-600 to-accent-500 text-lg font-bold text-white">
                  {t.initial}
                </span>
                <div>
                  <p className="font-bold text-slate-900">{t.name}</p>
                  <p className="text-sm text-slate-500">{t.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
