type ProjectCardProps = {
  title: string;
  outcome: string;
  stack: string;
};

export default function ProjectCard({ title, outcome, stack }: ProjectCardProps) {
  return (
    <div className="rounded-3xl border border-bone bg-white/60 p-6 shadow-soft">
      <div className="h-36 rounded-2xl bg-gradient-to-br from-bone via-white to-mist" />
      <h3 className="mt-5 font-serif text-xl text-charcoal">{title}</h3>
      <p className="mt-2 text-sm text-slate">{outcome}</p>
      <p className="mt-4 text-xs uppercase tracking-[0.16em] text-deepblue">
        {stack}
      </p>
    </div>
  );
}
