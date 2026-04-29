type FocusCardProps = {
  title: string;
  description: string;
  tags: string[];
};

export default function FocusCard({ title, description, tags }: FocusCardProps) {
  return (
    <div className="rounded-3xl border border-bone bg-white/70 p-6">
      <h3 className="font-serif text-xl text-brand">{title}</h3>
      <p className="mt-2 text-sm text-slate">{description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-brand/20 bg-brand/5 px-3 py-1 text-xs uppercase tracking-[0.14em] text-orange"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
