import Image from "next/image";

type ProjectCardProps = {
  title: string;
  outcome: string;
  stack: string;
  projectUrl?: string;
  imageUrl?: string;
  images?: string[];
};

export default function ProjectCard({
  title,
  outcome,
  stack,
  projectUrl,
  imageUrl,
  images
}: ProjectCardProps) {
  const previewImage = images?.[0] ?? imageUrl;
  const imageCount = images?.length ?? (imageUrl ? 1 : 0);

  return (
    <div className="min-w-0 overflow-hidden rounded-3xl border border-bone bg-white/60 p-5 shadow-soft sm:p-6">
      <div className="relative overflow-hidden rounded-2xl border border-bone bg-gradient-to-br from-bone via-white to-mist">
        {previewImage ? (
          <Image
            src={previewImage}
            alt={`${title} project screenshot`}
            width={1200}
            height={800}
            className="h-44 w-full object-cover sm:h-40 md:h-44"
          />
        ) : (
          <div className="h-44 w-full sm:h-40 md:h-44" />
        )}
        {imageCount > 1 ? (
          <span className="absolute right-3 top-3 rounded-full bg-charcoal/80 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-white">
            {imageCount} shots
          </span>
        ) : null}
      </div>
      <h3 className="mt-5 break-words font-serif text-xl text-charcoal">
        {title}
      </h3>
      <p className="mt-2 break-words text-sm text-slate">{outcome}</p>
      <p className="mt-4 break-words text-xs uppercase tracking-[0.16em] text-deepblue">
        {stack}
      </p>
      {projectUrl ? (
        <a
          href={projectUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex items-center text-sm font-medium text-deepblue underline underline-offset-4"
        >
          Open project
        </a>
      ) : null}
    </div>
  );
}
