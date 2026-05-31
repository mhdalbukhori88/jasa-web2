"use client";

import { useState, type FormEvent } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";
import { siteConfig, waLink } from "@/lib/site";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: Phone,
    label: "Telepon / WhatsApp",
    value: siteConfig.phone,
    href: waLink(),
  },
  {
    icon: MapPin,
    label: "Alamat",
    value: siteConfig.address,
    href: undefined,
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const service = String(data.get("service") || "");
    const message = String(data.get("message") || "");

    const text =
      `Halo ${siteConfig.name}, saya ingin konsultasi.\n\n` +
      `Nama: ${name}\n` +
      `Email: ${email}\n` +
      `Layanan: ${service}\n` +
      `Pesan: ${message}`;

    window.open(waLink(text), "_blank", "noopener,noreferrer");
    setSubmitted(true);
    form.reset();
  }

  return (
    <section id="kontak" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Hubungi Kami"
          title="Siap Memulai Proyek Anda?"
          description="Ceritakan kebutuhan Anda. Tim kami akan merespons dengan cepat dan memberikan solusi terbaik."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-5">
          {/* Info */}
          <Reveal className="lg:col-span-2">
            <div className="flex h-full flex-col justify-between rounded-3xl bg-slate-950 p-8 text-white">
              <div>
                <h3 className="text-2xl font-bold">Mari Berkolaborasi</h3>
                <p className="mt-3 leading-relaxed text-slate-300">
                  Konsultasi gratis tanpa komitmen. Kami bantu wujudkan website
                  impian untuk bisnis Anda.
                </p>

                <ul className="mt-8 space-y-5">
                  {contactItems.map((item) => {
                    const Icon = item.icon;
                    const content = (
                      <>
                        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/10 text-brand-300">
                          <Icon className="h-5 w-5" />
                        </span>
                        <div>
                          <p className="text-sm text-slate-400">{item.label}</p>
                          <p className="font-medium text-white">{item.value}</p>
                        </div>
                      </>
                    );
                    return (
                      <li key={item.label}>
                        {item.href ? (
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 transition-opacity hover:opacity-80"
                          >
                            {content}
                          </a>
                        ) : (
                          <div className="flex items-center gap-4">{content}</div>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>

              <a
                href={waLink(
                  `Halo ${siteConfig.name}, saya ingin konsultasi cepat via WhatsApp.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex items-center justify-center gap-2 rounded-full bg-green-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-green-500/30 transition-all hover:bg-green-600"
              >
                <MessageCircle className="h-5 w-5" />
                Chat via WhatsApp
              </a>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={120} className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-slate-100 bg-white p-8 shadow-xl shadow-slate-900/5"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-sm font-semibold text-slate-700"
                  >
                    Nama Lengkap
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Nama Anda"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-brand-500 focus:bg-white focus:ring-4 focus:ring-brand-500/10"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-sm font-semibold text-slate-700"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="email@contoh.com"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-brand-500 focus:bg-white focus:ring-4 focus:ring-brand-500/10"
                  />
                </div>
              </div>

              <div className="mt-5">
                <label
                  htmlFor="service"
                  className="mb-1.5 block text-sm font-semibold text-slate-700"
                >
                  Jenis Layanan
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition-all focus:border-brand-500 focus:bg-white focus:ring-4 focus:ring-brand-500/10"
                  defaultValue="Company Profile"
                >
                  <option>Company Profile</option>
                  <option>Toko Online</option>
                  <option>Landing Page</option>
                  <option>Website Instansi</option>
                  <option>Web Aplikasi</option>
                  <option>Optimasi SEO</option>
                  <option>Lainnya</option>
                </select>
              </div>

              <div className="mt-5">
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-semibold text-slate-700"
                >
                  Pesan
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  placeholder="Ceritakan kebutuhan website Anda..."
                  className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-brand-500 focus:bg-white focus:ring-4 focus:ring-brand-500/10"
                />
              </div>

              <button
                type="submit"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-600 to-brand-500 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand-600/25 transition-all hover:shadow-xl hover:brightness-105"
              >
                <Send className="h-5 w-5" />
                Kirim Pesan
              </button>

              {submitted && (
                <p className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-green-600">
                  <CheckCircle2 className="h-4 w-4" />
                  Pesan Anda diarahkan ke WhatsApp. Terima kasih!
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
