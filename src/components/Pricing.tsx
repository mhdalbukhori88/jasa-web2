import { Check, Sparkles } from "lucide-react";
import { pricingPlans } from "@/lib/data";
import { siteConfig, waLink } from "@/lib/site";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Pricing() {
  return (
    <section id="harga" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Harga Paket"
          title="Investasi Terbaik untuk Bisnis Anda"
          description="Pilih paket yang sesuai dengan kebutuhan. Semua harga transparan tanpa biaya tersembunyi."
        />

        <div className="mt-14 grid items-start gap-8 lg:grid-cols-3">
          {pricingPlans.map((plan, i) => (
            <Reveal
              key={plan.name}
              delay={i * 120}
              as="article"
              className={`relative flex flex-col rounded-3xl p-8 ${
                plan.highlighted
                  ? "bg-slate-950 text-white shadow-2xl shadow-brand-900/30 ring-1 ring-brand-500/40 lg:-mt-4 lg:mb-4"
                  : "bg-white text-slate-900 shadow-sm ring-1 ring-slate-200"
              }`}
            >
              {plan.badge && (
                <span className="absolute -top-3.5 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 rounded-full bg-gradient-to-r from-brand-500 to-accent-500 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white shadow-lg">
                  <Sparkles className="h-3.5 w-3.5" />
                  {plan.badge}
                </span>
              )}

              <h3
                className={`text-lg font-bold ${
                  plan.highlighted ? "text-white" : "text-slate-900"
                }`}
              >
                {plan.name}
              </h3>
              <p
                className={`mt-2 text-sm leading-relaxed ${
                  plan.highlighted ? "text-slate-300" : "text-slate-500"
                }`}
              >
                {plan.description}
              </p>

              <div className="mt-6 flex items-end gap-1">
                {plan.price !== "Custom" && (
                  <span
                    className={`text-lg font-semibold ${
                      plan.highlighted ? "text-slate-300" : "text-slate-400"
                    }`}
                  >
                    Rp
                  </span>
                )}
                <span
                  className={`text-4xl font-extrabold tracking-tight ${
                    plan.highlighted ? "text-white" : "text-slate-900"
                  }`}
                >
                  {plan.price}
                </span>
                {plan.period && (
                  <span
                    className={`mb-1 text-sm font-medium ${
                      plan.highlighted ? "text-slate-400" : "text-slate-500"
                    }`}
                  >
                    {plan.period}
                  </span>
                )}
              </div>

              <a
                href={waLink(
                  `Halo ${siteConfig.name}, saya tertarik dengan paket ${plan.name}. Mohon info lebih lanjut.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-7 inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all ${
                  plan.highlighted
                    ? "bg-gradient-to-r from-brand-500 to-accent-500 text-white shadow-lg shadow-brand-600/30 hover:brightness-110"
                    : "bg-slate-900 text-white hover:bg-brand-700"
                }`}
              >
                Pilih Paket
              </a>

              <ul className="mt-8 space-y-3.5">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <span
                      className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full ${
                        plan.highlighted
                          ? "bg-brand-500/20 text-brand-300"
                          : "bg-brand-50 text-brand-600"
                      }`}
                    >
                      <Check className="h-3 w-3" />
                    </span>
                    <span
                      className={
                        plan.highlighted ? "text-slate-200" : "text-slate-600"
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-slate-500">
          Butuh paket khusus?{" "}
          <a
            href={waLink(
              `Halo ${siteConfig.name}, saya butuh penawaran khusus untuk proyek website saya.`
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-brand-600 hover:underline"
          >
            Hubungi kami untuk penawaran custom
          </a>
          .
        </p>
      </div>
    </section>
  );
}
