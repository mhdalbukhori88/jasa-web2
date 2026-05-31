import { ArrowUpRight } from "lucide-react";
import { portfolio } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Portfolio() {
  return (
    <section id="portofolio" className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Portofolio"
          title="Karya yang Kami Banggakan"
          description="Beberapa proyek yang telah kami selesaikan untuk klien dari berbagai industri."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolio.map((item, i) => (
            <Reveal
              key={item.title}
              delay={(i % 3) * 100}
              as="article"
              className="group relative overflow-hidden rounded-2xl shadow-sm ring-1 ring-slate-200/60"
            >
              <div
                className={`relative flex aspect-[4/3] items-center justify-center bg-gradient-to-br ${item.gradient}`}
              >
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 30% 30%, #fff 1px, transparent 1px)",
                    backgroundSize: "22px 22px",
                  }}
                />
                {/* Mini mockup */}
                <div className="relative w-3/5 rounded-lg bg-white/95 p-2 shadow-2xl transition-transform duration-500 group-hover:scale-105">
                  <div className="mb-2 flex gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
                    <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
                  </div>
                  <div className={`h-10 rounded bg-gradient-to-r ${item.gradient}`} />
                  <div className="mt-2 space-y-1">
                    <div className="h-1.5 w-full rounded bg-slate-200" />
                    <div className="h-1.5 w-2/3 rounded bg-slate-200" />
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between bg-white px-5 py-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">
                    {item.category}
                  </p>
                  <h3 className="mt-0.5 text-lg font-bold text-slate-900">
                    {item.title}
                  </h3>
                </div>
                <span className="grid h-10 w-10 place-items-center rounded-full bg-slate-100 text-slate-500 transition-all group-hover:bg-brand-600 group-hover:text-white">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
