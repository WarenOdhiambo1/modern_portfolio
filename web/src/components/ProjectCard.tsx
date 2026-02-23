type ProjectCardProps = {
  title: string;
  outcome: string;
  stack: string;
  projectUrl?: string;
  imageUrl?: string;
};

export default function ProjectCard({
  title,
  outcome,
  stack,
  projectUrl,
  imageUrl
}: ProjectCardProps) {
  return (
    <div className="rounded-3xl border border-bone bg-white/60 p-6 shadow-soft">
      <div
        className="h-36 rounded-2xl border border-bone bg-gradient-to-br from-bone via-white to-mist bg-cover bg-center"
        style={imageUrl ? { backgroundImage: `url(${imageUrl})` } : undefined}
        aria-label={imageUrl ? `${title} project graphic` : undefined}
      />
      <h3 className="mt-5 font-serif text-xl text-charcoal">{title}</h3>
      <p className="mt-2 text-sm text-slate">{outcome}</p>
      <p className="mt-4 text-xs uppercase tracking-[0.16em] text-deepblue">
        {stack}
      </p>
      {projectUrl ? (
        <a
          href={projectUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex items-center text-sm font-medium text-deepblue underline underline-offset-4"
        >
          View project post
        </a>
      ) : null}
    </div>
  );
}
