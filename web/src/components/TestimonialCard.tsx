type TestimonialCardProps = {
  quote: string;
  name: string;
  org: string;
};

export default function TestimonialCard({ quote, name, org }: TestimonialCardProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-left">
      <p className="text-sm leading-relaxed text-white/80">“{quote}”</p>
      <div className="mt-4 text-xs uppercase tracking-[0.2em] text-white/60">
        {name}
      </div>
      <div className="mt-1 text-sm text-white/70">{org}</div>
    </div>
  );
}
