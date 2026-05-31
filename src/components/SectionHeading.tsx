import Reveal from "./Reveal";

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  center?: boolean;
  light?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  center = true,
  light = false,
}: Props) {
  return (
    <Reveal
      className={`max-w-2xl ${center ? "mx-auto text-center" : "text-left"}`}
    >
      <span className="inline-block rounded-full bg-brand-50 px-4 py-1.5 text-sm font-semibold uppercase tracking-wide text-brand-700">
        {eyebrow}
      </span>
      <h2
        className={`mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl ${
          light ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            light ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
